<template>
  <ion-content ref="content" class="background">
    <!-- Ionic content -->
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85vh;
        flex-direction: column;
      "
    >
      <img
        src="\LOGO.png"
        alt="logo"
        width="100"
        height="100"
        class="md:h-2/3 h-1/3 md:w-1/3 w-2/3 -mb-16"
      />
      <h1 class="text-3xl pb-28 -mb-28 font-bold">Ananta</h1>
      <h2 class="text-2xl font-semibold">Make Your Life Easier</h2>
    </div>
    <!-- center button -->
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15vh;
        flex-direction: column;
      "
    >
      <ion-button size="small" color="dark" class="font-bold" @click="swipeUp">
        Swipe Up
        <ion-icon slot="end" name="ups"></ion-icon>
      </ion-button>
    </div>
    <ion-slides pager="true" class="h-screen" :options="slideOptions">
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 85vh;
          flex-direction: column;
        "
      >
        <img
          src="\LOGO.png"
          alt="logo"
          width="100"
          height="100"
          class="md:h-2/3 h-1/3 md:w-1/3 w-2/3 -mb-16"
        />
        <h1 class="text-3xl pb-4 font-bold">Ananta Apps</h1>
        <h2 class="text-lg font-normal text-center pb-8">
            Ananta, Hilangkan Batasan Komunikasi di dunia, Bawa Dunia Tanpa Batas.
            <br>
            Kami hadir untuk membantu anda berkomunikasi dengan orang-orang yang memiliki keterbatasan.
        </h2>

        <div class="flex justify-around items-center w-full px-4">
          <div>
            <div>
              <div class="border border-white rounded-full p-5">
                <div class="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-16 md:h-16 w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>

                </div>
              </div>
              <router-link to="/gesture" class="text-white">
              <p class="text-center mt-3 font-semibold" @click="gesture()">Translator <br> Gestur</p>
            </router-link>  
            </div>
          </div>
          <div>
            <div>
              <div class="border border-white rounded-full p-5">
                <div class="w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="md:w-16 md:h-16 w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </div>
              </div>
            <router-link to="/voice" class="text-white">
              <p class="text-center mt-3 font-semibold " @click="voice()">Transalor <br> Suara</p>
            </router-link>  

            </div>
          </div>
          <div>
            <div class="border border-white rounded-full p-5">
              <div class="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="md:w-16 md:h-16 w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
            </div>
            <p class="text-center mt-3 font-semibold " @click="edu()">Edukasi  <br> Isyarat</p>

          </div>
        </div>
      </div>

      <!-- center button -->
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 15vh;
          flex-direction: column;
        "
      >
        <ion-button
          size="small"
          color="dark"
          class="font-bold"
          @click="swipeUp"
        >
          Swipe Up
          <ion-icon slot="end" name="ups"></ion-icon>
        </ion-button>
      </div>
    </ion-slides>

    <!-- button size small -->
    <!-- ion swip up -->

    <!-- <ion-slides pager="true" class="h-1/2">
  <ion-slide>
    <ion-card class="h-1/2">
      <ion-card-header>
        <ion-card-title>What is Ananta?</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Ananta is an application that can help you to communicate with people who are deaf and dumb.
      </ion-card-content>
    </ion-card>
  </ion-slide>
  <ion-slide>
    <ion-card class="h-1/2">
      <ion-card-header>
        <ion-card-title>How to use Ananta?</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        You can use Ananta by using the camera on your device and then you can start communicating with people who are deaf and dumb.
      </ion-card-content>
    </ion-card>
  </ion-slide>
  <ion-slide>
    <ion-card class="h-1/2">
      <ion-card-header>
        <ion-card-title>What are the features of Ananta?</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Ananta has 3 features, namely voice recognition, gesture recognition, and translation.
      </ion-card-content>
    </ion-card>
  </ion-slide>
</ion-slides> -->
  </ion-content>
</template>
<script setup>
import { ref } from "vue";
import router from "../router";
import { IonContent } from "@ionic/vue";

const content = ref(null);

const slideOptions = {
  initialSlide: 0,
  speed: 10000,
};

const swipeUp = () => {
  if (content.value) {
    content.value.scrollToBottom(1000);
  }
};

const edu = () => {
  window.location.href ="/edu";
};
const gesture = () => {
  window.location.href ="/gesture";

};
const voice = () => {
  window.location.href ="/voice";
};

</script>

<style scoped>
ion-col {
  height: 100%;
  width: 100%;
  margin-top: 100px;
  color: #fff;
  text-align: center;
}
ion-content.background {
  --background: url("\green.jpg") no-repeat center center / cover;
}
</style>
