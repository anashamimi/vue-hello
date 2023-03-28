/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/


const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Primo esercizio con Vue',
        image: 'https://static.sky.it/editorialimages/277e8ac0d513fd95ebc81c5a06285e78133f9515/skytg24/it/lifestyle/approfondimenti/giornata-gatto-buongiorno-frasi-immagini/giornata-gatto-buongiorno-frasi-immagini-00-canva.jpg'
      }
    }
  }).mount('#app')