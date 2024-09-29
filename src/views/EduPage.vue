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
    <!-- grid xl 3 grid -->
    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-card color="white"> <!-- Change to white -->
            <ion-card-header>
              <ion-card-title>Judul 1</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <!-- embed yt -->
              <iframe width="100%" height="230" class="mb-3-" src="https://www.youtube.com/embed/mukNGgweHSI?si=JF61u9la8x85UnzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <ion-button
                size="small"
                color="dark"
                href="https://youtu.be/Py6Ch1vBvL0?si=VmL8NEG5kov5LwMp"
                target="_blank"
                class="mt-3 text-white"
                >Lihat</ion-button
              >
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-card color="white"> <!-- Change to white -->
            <ion-card-header>
              <ion-card-title>Judul 2</ion-card-title> <!-- Update title for uniqueness -->
            </ion-card-header>
            <ion-card-content>
              <iframe width="100%" height="230" class="mb-3-" src="https://www.youtube.com/embed/4DZnZv3weBw?si=jGWIB3IIb1J-au2r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <ion-button
                size="small"
                color="dark"
                href="https://www.youtube.com/embed/4DZnZv3weBw?si=jGWIB3IIb1J-au2r"
                target="_blank"
                class="mt-3 text-white"
                >Lihat</ion-button
              >
            </ion-card-content>
          </ion-card>
        </ion-col>
     
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-card color="white"> <!-- Change to white -->
            <ion-card-header>
              <ion-card-title>Judul 3</ion-card-title> <!-- Update title for uniqueness -->
            </ion-card-header>
            <ion-card-content>
              <iframe width="100%" height="230" class="mb-3-" src="https://www.youtube.com/embed/03kWuwWQwu0?si=szjg24jT8iNUHHik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <ion-button
                size="small"
                color="dark"
                href="https://www.youtube.com/embed/03kWuwWQwu0?si=szjg24jT8iNUHHik"
                target="_blank"
                class="mt-3 text-white"
                >Lihat</ion-button
              >
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/vue";
</script>

<style scoped>
ion-content.background {
  --background: url("bg.jpg") no-repeat center center / cover;
}
</style>
