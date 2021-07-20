  <template>
  <v-container>
    <v-col
            v-for="(convocatoria, i) in convocatorias"
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
        <div class="subtitle-1">Programa Educativo</div>
          <p class="text-h5 white--text fix">
            Nombre de la convocatoria 2021
          </p>
         
      </v-card-title>
        <v-card-text class="mt-2">
              <v-row>
                  <v-col
                        cols="5"
                        sm="5"
                        md="5"

                      >
                       <p class="font-weight-bold mb-0">Entregado:</p>                
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
                       <p class="font-weight-bold mb-0">Fecha Límite:</p>
                       <v-chip  text-color="white"
                         
                         color="primary"
                          class="ma-1"
                      >29 de Julio 2021</v-chip>                
                </v-col>
              </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="indigo accent-4"
          >
            Ver detalle
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-col>
</v-container>
</template>
<script type="text/javascript">
   export default {
    data: () => ({
          convocatorias:[{},{}]
    })

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