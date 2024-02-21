<template>
  <ion-content ref="content" scroll-y="true" class="background">
    <!-- center image -->
    <div style="display: flex; justify-content: center">
      <img
        src="\p.png"
        alt="logo"
        width="100"
        height="100"
        class="h-40 w-40"
        style="margin-bottom: -60px"
      />
    </div>
    <h4
      style="
        text-align: center;
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: 0.5rem;
      "
      class="text-slate-900"
    >
      Ananta
    </h4>
    <ion-grid>
      <!-- ion title -->

      <!-- path img to public -->
      <ion-row class="ion-justify-content-center">
        <ion-col size="12" size-md="7" size-lg="6">
          <ion-card class="video-card p-2" color="dark">
            <!-- Placeholder -->

            <video ref="webcam" width="100%" height="90%" autoplay></video>
            <!-- Video dan Tombol -->

            <button
              class="py-2 px-3 bg-green-700 mt-3 rounded-md"
              @click="toggleWebcam"
              :disabled="webcamRunning"
              color="success"
              size="sm"
            >
              <!-- percangan enable disable -->
              <ion-icon
                slot="icon-only"
                name="stop"
                v-if="icon"
                color="dark"
              ></ion-icon>
              <ion-icon
                slot="icon-only"
                name="camera"
                v-if="!icon"
                color="dark"
              ></ion-icon>
            </button>

            <div
              id="gestureOutput"
              :style="{ display: gestureOutputDisplay }"
            ></div>
          </ion-card>
        </ion-col>

        <ion-col size="12" size-md="4" size-lg="6">
          <ion-card color="dark">
            <ion-card-header>
              <ion-card-title>
                <h3>Output Isyarat</h3>
              </ion-card-title>
            </ion-card-header>
            <div class="text-container">
              <div v-for="text in textDisplay" :key="text"> 
                <ion-chip color="light" v-if="text != ''">

                  <ion-label>{{ text }}</ion-label>
                </ion-chip>
              </div>
            </div>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { onMounted, ref } from "vue";
import {
  GestureRecognizer,
  FilesetResolver,
  DrawingUtils,
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
// import icon ionic

export default {
  setup() {
    const webcam = ref(null); // Added webcam reference

    const icon = ref(true);
    const gestureRecognizer = ref(null);
    const runningMode = ref("IMAGE");
    const webcamRunning = ref(false);
    console.log(webcamRunning.value);

    const videoWidth = "100%";
    const lastVideoTime = ref(-1);
    const results = ref(undefined);
    const textDisplay = ref([]);
    const curentText = ref("");
    let lastAddedTime = 0;
    const currentTime = new Date().getTime(); 

    const gestureOutputDisplay = ref("none");

    onMounted(async () => {
      await createHandGestureRecognizer();
    });

    async function createHandGestureRecognizer() {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
      );
      gestureRecognizer.value = await GestureRecognizer.createFromOptions(
        vision,
        {
          baseOptions: {
            modelAssetPath:
              "https://res.cloudinary.com/dvwldqymc/raw/upload/v1702920586/ai/gesture_recognizer_m4s4nb.task",
            delegate: "GPU",
          },
          runningMode: runningMode.value,
        }
      );

      if (webcamRunning.value) {
        enableWebcam();
      }
    }
    function toggleWebcam() {
      if (webcamRunning.value) {
        webcamRunning.value = false; // Ubah ke false ketika mematikan webcam
        icon.value = true; 
        if (webcam.value && webcam.value.srcObject) {
          webcam.value.srcObject.getTracks().forEach((track) => track.stop());
        }
      } else {
        webcamRunning.value = true; // Ubah jadi ture ketika mengaktifkan webcam
        icon.value = false; 
        enableWebcam();
      }
    }

    async function enableWebcam() {
      const webcamElement = webcam.value;
      if (!webcamElement) {
        console.error("gada webcam cuy");
        return;
      }

      if (navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        webcamElement.srcObject = stream;
        webcamElement.addEventListener("loadeddata", predictHandGesture);
      }
    }
    async function predictHandGesture() {
      if (!gestureRecognizer.value) {
        console.error("gesture error cuy");
        return;
      }

      const webcamElement = webcam.value;
      if (runningMode.value === "IMAGE") {
        runningMode.value = "VIDEO";
        await gestureRecognizer.value.setOptions({ runningMode: "VIDEO" });
      }

      let nowInMs = Date.now();
      if (webcamElement.currentTime !== lastVideoTime.value) {
        lastVideoTime.value = webcamElement.currentTime;
        results.value = await gestureRecognizer.value.recognizeForVideo(
          webcamElement,
          nowInMs
        );
      }

      const gestureOutput = document.getElementById("gestureOutput");
      if (results.value && results.value.gestures.length > 0) {
        gestureOutputDisplay.value = "block";
        gestureOutput.style.width = videoWidth;
        const gesture = results.value.gestures[0][0];
        const categoryName = gesture.categoryName;

        // const handedness = results.value.handednesses[0][0].displayName;
        gestureOutput.innerText = `Nama Isyarat: ${categoryName}`;
        curentText.value = categoryName;
        // push saat tidak sama dalam 1 detik teakhir

        if (textDisplay.value[textDisplay.value.length - 1] !== curentText.value && currentTime - lastAddedTime > 1000 && curentText.value != "") {
          textDisplay.value.push(curentText.value);
          
        }
        // textDisplay.value.push(curentText.value);
      } else {
        gestureOutputDisplay.value = "none";
      }

      requestAnimationFrame(predictHandGesture);
    }

    return {
      toggleWebcam,
      gestureOutputDisplay,
      webcam,
      

      textDisplay,
    };
  },
};
</script>
<style>
.text-container {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: start;
  padding: 4px;
  align-items: center;
  min-width: 300px;
}
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
}
.placeholder {
  padding-top: 200px;
}
ion-content.background {
  --background: url("bg.jpg") no-repeat center center / cover;
}
@media screen and (max-width: 768px) {
  .video-card video {
    height: 400px;
    width: 100%; 
    object-fit: cover; 
  }
}
</style>
