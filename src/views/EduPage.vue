<template>
  <ion-content class="background">
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
      Edukasi Ananta
    </h4>
    
    <ion-grid>
      <ion-row class="ion-justify-content-center" >
        
        <ion-col size="12" size-md="6" size-lg="3" v-for="data in datas" :key="data.ID">
          <ion-card color="white"> 
            <ion-card-header>
              <ion-card-title>{{ data.Title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <iframe
                width="100%"
                height="250"
                class="mb-3"
                :src="data.Link"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <ion-button
                size="small"
                color="dark"
                :href="data.Link"
                target="_blank"
                class="mt-3 text-white"
              >Lihat</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>
     
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script setup>
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue"; 
import axios from "axios";
import { onMounted, ref } from "vue";

const datas = ref([])

const getEdukasi = async () => {
  try {
    const response = await axios.get("https://pramudita.my.id/content");
    datas.value = response.data.result;
    console.log(datas.value);
  } catch (error) {
    console.error(error);
  }
};

onMounted(()=>{
  getEdukasi();
});
</script>

<style scoped>
ion-content.background {
  --background: url("bg.jpg") no-repeat center center / cover;
}
</style>
