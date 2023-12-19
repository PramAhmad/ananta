<template>

    <IonContent ref="content">
     <ion-toolbar>
        <ion-title style="text-align: center;">Ananta</ion-title>
     </ion-toolbar>
      
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="6" size-md="4" size-lg="6">
            <ion-card color="primary">
              <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <!-- img -->
                <ion-icon icon="heart" style="font-size: 100px;"></ion-icon>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6" size-md="4" size-lg="6">
            <ion-card color="primary">
              <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Here's a small text description for the card content. Nothing
                more, nothing less.
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6" size-md="4" size-lg="6">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Here's a small text description for the card content. Nothing
                more, nothing less.
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6" size-md="4" size-lg="6">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Here's a small text description for the card content. Nothing
                more, nothing less.
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </IonContent>
  
  </template>
  
  <script>
  import { heart} from "ionicons/icons";
  import {
    IonApp,
    IonCol,
    IonContent,
    IonToolbar,
    IonGrid,
    IonRow,
    IonTitle,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonIcon,
  } from "@ionic/vue";
  // import { logoIonic } from 'ionicons/icons';
  
  
  </script>
  
  <style scoped>
  
  
  ion-col {
    height: 100%;
    width: 100%;
    margin-top: 100px;
    color: #fff;
    text-align: center;
  }
  </style>
  