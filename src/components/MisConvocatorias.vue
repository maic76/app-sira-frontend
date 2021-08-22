  <template>
  <v-container>
    <h3>Mis participaciones:</h3>
    <v-col
            v-for="(participacion, i) in participaciones"
            :key="i"
            cols="12"
          >
      <v-card
        class="mx-auto"
        max-width="500"
         elevation="8"
      shaped
      tile
      >
      <v-card-title class="indigo darken-4 white--text ">
        <div class="subtitle-1">{{participacion.convocatoria.programaEducativo.nombre}}</div>
          <p class="text-h5 white--text fix">
            {{participacion.convocatoria.nombre}}
          </p>
         
      </v-card-title>
        <v-card-text class="mt-2">
              <v-row>
                  <v-col
                        cols="5"
                        sm="5"
                        md="5"

                      >
                       <p class="font-weight-bold mb-0">Requisitos entregados:</p>                
                       <v-chip
                           close-icon="mdi-close-outline"
                         color="red"
                         text-color="white"
                         class="mt-1"
                      >2 de 4</v-chip>               
                </v-col>
                 <v-col
                        cols="7"
                        sm="7"
                        md="7"
                            class="text-center"
                      >                
                       <p class="font-weight-bold mb-0">Fecha Límite para subir documentos:</p>
                       <v-chip  text-color="white"
                         
                         color="primary"
                          class="ma-1"
                      >{{participacion.convocatoria.fechaTermino}}</v-chip>                
                </v-col>
              </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            
            color="green white--text"
            @click="verParticipacion(participacion)"
          >
            Subir requisitos
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-col>

  <v-card v-if="participaciones.length==0"
        class="mx-auto"
        max-width="500"
         elevation="8"
      shaped
      tile
      >
      <v-card-title class="indigo darken-4 white--text ">
     
          <p class="text-h5 white--text fix">
            Mis Participaciones
          </p>
         
      </v-card-title>
        <v-card-text class="mt-2">
              <v-row>
                 <v-alert
                    class="ma-4"
                    border="top"
                    color="blue"
                    dense
                    type="info"
                  >Aún no te has registrado en ninguna convocatoria</v-alert>
              </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
           class="ma-4"
            text
            color="indigo accent-4"
          >
            Consultar convocatorias
          </v-btn>
        </v-card-actions>
      </v-card>

</v-container>
</template>

<script type="text/javascript">

  import {axios} from "axios";

   export default {
    data: () => ({
          participaciones:[]
    }),

    created () {
      this.initialize()
    },

    methods: {

     initialize () {

      let token = localStorage.getItem('token');
         
      let config = {
                   headers: { Authorization: `Bearer ${token}` }
                  };

      this.axios.get("/api/participaciones/",           
                   config
                  )
                .then(response => {
                   console.log(response);
                   //console.log(response.headers.authorization);
                   //actualizamos la vista
                     this.participaciones=response.data;   
                  })
                .catch(error => {
                  this.errorMessage = error.message;
                  console.error("There was an error!", error);
                });  

       },

       verParticipacion(participacion){
        console.log(participacion)
          this.$router.push('/aspirantes/participacion/'+participacion.id)
       }
    }

  }
</script>
<style type="text/css">
  .fix {
    overflow-wrap: anywhere;
    word-wrap: break-word;
    word-break: normal;
    hyphens: auto;
}
</style>