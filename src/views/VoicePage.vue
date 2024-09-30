<script setup>
import { ref, watch } from "vue";
import { IonBackButton } from "@ionic/vue";
import { useSpeechRecognition } from "@vueuse/core";
import axios from "axios";
const lang = ref("id-ID");

const arrtext = ref([]);
const speech = useSpeechRecognition({
  lang,
  continuous: true,
});

const sampled = ref([]);

function start() {
  speech.result.value = "";
  sampled.value = [];
  speech.start();
}

const { isListening, isSupported, stop, result } = speech;

const selectedLanguage = ref(lang.value);
watch(lang, (lang) =>
  isListening.value ? null : (selectedLanguage.value = lang)
);
watch(isListening, (isListening) =>
  isListening ? null : (selectedLanguage.value = lang.value)
);

watch(isListening, (newValue) => {
  if (newValue) {
    start();
  } else {
    stop();
  }
});
watch(result, (result) => {
  if (result) {
    // loop perkata jadi pas ada spaci push arrnya
    const word = result.split(" ");
    sampled.value.push(word);
    // arrtext ngambil sampled push terakhir
    arrtext.value = sampled.value.slice(-1)[0];
    console.log(arrtext.value);
  }
});
const word = ref(result);
console.log(word.value);
const images = ref([]);
const postIsyarat = async () => {
  try {
    const results = [];

    for (const name of arrtext.value.flat()) {
      const res = await axios.get("https://pramudita.my.id/image", {
        params: { names: name },
      });
      results.push(res.data.result[0]);
    }

    images.value = results;
    console.log(images.value);
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<template>
 
  <ion-content class="background">
    <!-- bungkus ion back button -->
    <div class="flex justify-start p-5">
  <ion-back-button defaultHref="/" class="custom-icon-size" color="success" size="5"></ion-back-button>
</div>

    <div v-if="!isSupported">
      Browser Anda tidak mendukung,
      <a href="https://caniuse.com/mdn-api_speechrecognition" target="_blank"
        >lihat detail</a
      >
    </div>
    <div class="p-10" v-else>
      <div
        class="flex flex-wrap flex-col items-center w-full justify-center max-h-[100vh]"
      >
      <img
        src="\p.png"
        alt="logo"
        width="100"
        height="100"
        class="h-44 w-40"
         
      />
        <ion-grid class="md:w-1/2 w-full min-h-[500px] border border-gray-900 mb-10">
          <ion-row class=" ">
            <ion-col
              size="6"
              size-md="4"
              size-lg="4"
              v-for="image in images"
              :key="image.id"
            >
              <ion-card color="succes">
                <ion-card-header>
                  <ion-card-title>{{ image.Name }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <!-- img -->
                  <img :src="image.Path" alt="" />
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-5 rounded-full"
          v-if="!isListening"
          @click="start"
        >
          <ion-icon name="mic"></ion-icon>
        </button>
        <h3
          class="text-center font-bold text-2xl text-slate-800 md:inline"
          style="display: none;"
          v-if="!isListening"
        >
          Tekan Untuk Memulai
        </h3>
      </div>
      <button v-if="isListening" class="orange" @click="stop">Stop</button>
      <div v-if="isListening" class="mt-4 items-center flex justify-center flex-col">
        
        <textarea name="" v-model="word" id="" cols="30" rows="10" class="bg-transparent text-slate-900 px-2 border border-slate-900"></textarea>
        <!-- ion button --> 
        <ion-button @click="postIsyarat"  class="text-white mt-3"> Translate</ion-button>
      </div>
    </div>
  </ion-content>
</template>

<style>
ion-content.background {
  --background: url("bg.jpg") no-repeat center center / cover;
}
ion-icon {
  font-size: 60px;
  
}
.custom-icon-size {
  --ion-icon-width: 100px; 
  --ion-icon-height: 100px; 
}
.rounded-button {
  width: 80px;
  height: 80px; 
  border-radius: 100%;
  text-align: center; 
  line-height: 80px; 
}
</style>
