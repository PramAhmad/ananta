<template>

<IonContent ref="content">
  <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="7" size-lg="7">
          <ion-card class="video-card">
            <video ref="webcam" width="100%" height="100%" autoplay></video>
            <ion-card-header>
              <ion-card-title>
                <button @click="toggleWebcam">{{ webcamRunning ? 'Disable Webcam' : 'Enable Webcam' }}</button>
  
              </ion-card-title>
              <ion-card-subtitle>
    <div id="gestureOutput" :style="{ display: gestureOutputDisplay }"></div></ion-card-subtitle>
            </ion-card-header>
          </ion-card>
        </ion-col>
          <ion-col size="12" size-md="4" size-lg="6">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Yang Di Ucapakan Oleh Tunarungu</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <div class="text-container">
                    <div v-for="text in textDisplay" :key="text">{{ text }}</div>
                  </div>
                </ion-card-content>
              </ion-card>
          </ion-col>
          </ion-row>
          </ion-grid>
    
    <div class="">
      <canvas ref="outputCanvas" width="300" height="500"></canvas>
    </div>
    
    <!-- foreach box no new line text display selai none -->
  

</IonContent>
</template>

<script>
import { onMounted, ref } from 'vue';
import { GestureRecognizer, FilesetResolver, DrawingUtils } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";


export default {
  setup() {
    const webcam = ref(null); // Added webcam reference
    const outputCanvas = ref(null); // Added outputCanvas reference

    const gestureRecognizer = ref(null);
    const runningMode = ref("IMAGE");
    const webcamRunning = ref(false);
    const videoHeight = "400px";
    const videoWidth = "100%";
    const lastVideoTime = ref(-1);
    const results = ref(undefined);
    const textDisplay = ref([]);
    const curentText = ref("");
    
    const gestureOutputDisplay = ref("none");

    onMounted(async () => {
      await createHandGestureRecognizer();
    });

    async function createHandGestureRecognizer() {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
      );
      gestureRecognizer.value = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
          "https://res.cloudinary.com/dvwldqymc/raw/upload/v1702920586/ai/gesture_recognizer_m4s4nb.task",   
          delegate: "GPU"
        },
        runningMode: runningMode.value
      });

      // Start webcam if needed
      if (webcamRunning.value) {
        enableWebcam();
      }
    }

    function toggleWebcam() {
      webcamRunning.value = !webcamRunning.value;
      if (webcamRunning.value) {
        enableWebcam();
      } else {
        webcam.value.srcObject = null;
        webcam.value.removeEventListener("loadeddata", predictHandGesture);
      }
    }

  async function enableWebcam () {
      const webcamElement = webcam.value;
      if (!webcamElement) {
        console.error("Webcam element not initialized");
        return;
      }

      if (navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });
        webcamElement.srcObject = stream;
        webcamElement.addEventListener("loadeddata", predictHandGesture);
      }
    }
    async function predictHandGesture() {
      if (!gestureRecognizer.value) {
        console.error("Gesture recognizer not initialized");
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
        results.value = await gestureRecognizer.value.recognizeForVideo(webcamElement, nowInMs);
      }

      const canvasElement = outputCanvas.value;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      const drawingUtils = new DrawingUtils(canvasCtx);

      canvasElement.style.height = videoHeight;
      webcamElement.style.height = videoHeight;
      canvasElement.style.width = videoWidth;
      webcamElement.style.width = videoWidth;
      
        if (results.value && results.value.landmarks) {
        //  simpan tiap ganti isyarat dan di tambahkan terus namenya doang    
          for (const landmarks of results.value.landmarks) {
            drawingUtils.drawConnectors(
              landmarks,
              GestureRecognizer.HAND_CONNECTIONS,
              {
                color: "#00FF00",
                lineWidth: 5
              }
            );
            drawingUtils.drawLandmarks(landmarks, {
              color: "#FF0000",
              lineWidth: 2
            });
          }
        }
      canvasCtx.restore();

      const gestureOutput = document.getElementById("gestureOutput");
      if (results.value && results.value.gestures.length > 0) {
        gestureOutputDisplay.value = "block";
        gestureOutput.style.width = videoWidth;
        const gesture = results.value.gestures[0][0];
        const categoryName = gesture.categoryName;
        const categoryScore = parseFloat(gesture.score * 100).toFixed(2);
        const handedness = results.value.handednesses[0][0].displayName;
        gestureOutput.innerText = `Nama Isyarat: ${categoryName}\n Akurasi: ${categoryScore} %\n Tangan: ${handedness}`;
        curentText.value = categoryName;
        // push saat tidak sama kyaak sebelumnya
        if (textDisplay.value[textDisplay.value.length - 1] !== curentText.value && curentText.value !== "None"){
          textDisplay.value.push(curentText.value);
          console.log(textDisplay.value);
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
      outputCanvas,
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
  max-width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  
}

</style>
