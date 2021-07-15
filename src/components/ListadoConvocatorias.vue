<template>
<v-container>
  <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
          >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="text-h5"
                    v-text="item.peducativo"
                  ></v-card-title>
  
                  <v-card-subtitle v-text="item.nombre"></v-card-subtitle>
  
                  <v-card-actions>
             
                    <v-btn
                     
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                    >
                      VER DETALLE
                    </v-btn>
                  </v-card-actions>
                </div>
  
                <v-avatar
                  class="ma-3"
                  size="100"
                  tile
                >
                  <v-img contain :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
</v-container>
</template>

<script>
	//Maestría en Redes y Sistemas Integrados
	//Maestría en Computación Aplicada
  export default {
    data: () => ({
      items: [
        {
          color: '#002656', //El color cambiara depende si es maestria o diplomado
          src: 'http://www.lania.mx/wp-content/uploads/2020/05/logoMR.png',
          peducativo: 'MRYSI',
          nombre: 'Convocatoria MRySI Presencial 2021',
        },
        {
          color: '#002656',
          src: 'http://www.lania.mx/wp-content/uploads/2020/05/logoMCA.png',
          peducativo: 'MCA',
          nombre: 'Convocatoria en MCA 2021',
        },
         {
          color: '#00358C',
          src: 'http://www.lania.mx/wp-content/uploads/2020/05/thumbnail-1.png',
          peducativo: 'Diplomado en Redes',
          nombre: 'Convocatoria en MCA 2021',
        },
      ],
    }),
  }
</script>

