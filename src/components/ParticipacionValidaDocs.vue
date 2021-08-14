<template>
 <v-card
          class="mx-auto"
         
        >
          <div class="d-flex flex-no-wrap justify-space-between indigo darken-4"  >
            <div>
              <v-card-title
                    class="text-h5 fix white--text "
                   
                    >{{tituloProg}}</v-card-title>  
                    <v-card-subtitle class="font-weight-regular white--text">{{tituloConv}}</v-card-subtitle>
            </div>
             <v-avatar
                  class="ma-3"
                  size="100"
                  tile
                >
                  <v-img contain :src=logo></v-img>
                </v-avatar>
          </div>
          <v-container>
            <div class="d-flex justify-space-around ">
              <v-col
                    cols="6"
                    sm="6"
                    md="6"
                  >                
                   <p class="font-weight-bold mb-0">Nombre del Aspirante:</p>
                    <p class="font-weight-regular">{{nombreAspirante}}</p>
                    <p class="font-weight-bold mb-0">Número de whatsapp:</p>
                    <p class="font-weight-regular">{{noWhatsapp}}</p>
                
            </v-col>
             <v-col
                    cols="6"
                    sm="6"
                    md="6"
                  >
                
                   <p class="font-weight-bold mb-0">Escuela de procedencia:</p>
                    <p class="font-weight-regular">{{escuela}}</p>
                    <p class="font-weight-bold mb-0">Hora Exámen:</p>
                    <p class="font-weight-regular">5:00 pm</p>
             
            </v-col>
            
          </div>
          </v-container>
         
         <v-data-table

			    :headers="headers"
			    :items="requisitosPart"
			    class="elevation-1 "
			  >
			    <template v-slot:item.entregado="{ item }">
			      <v-chip
			        :color="getColor(item.entregado)"
			        dark
			       >
			           <span v-if="item.entregado">Entregado</span>
                 <span v-else>Falta</span>
			      </v-chip>
			    </template>

			     <template v-slot:item.documento="{ item }">
                <v-icon v-if="item.entregado"
                    color="teal"
                    class="mr-2"
                    @click="verDocumento(item)"
                  >
                    mdi-eye
                  </v-icon>
                  <span v-else>No entregado</span>
            </template>
             <template v-slot:item.actions="{ item }">
                 
                  <v-btn
                        icon
                        :color="getColor(item)"
                        :disabled="!item.entregado"
                        @click="validarDocumento(item)"
                      >
              <v-icon>mdi-thumb-up</v-icon>
              <span v-if="item.validado">Ok</span>
                 <span v-else>Validar</span>
            </v-btn>
            </template>

 		 </v-data-table>

          <v-divider></v-divider>           
               
         <v-card-actions class="text-center" >
              <v-spacer></v-spacer>
              <div >
             
               <v-btn color="primary"  dark  class="mb-2 "
               
                @click="dialog=false"
              >
                Cerrar
              </v-btn>
            </div>
            </v-card-actions>
        </v-card>
</template>
<script type="text/javascript">
	
	export default {
		data : () => ({
			   tituloConv: 'Convocatoria de MRySI 2014',
		      tituloProg: 'Estatus de la participación del Aspirante',
		      nombreAspirante: 'Miguel Ángel Landa López',
		      escuela:'Universidad Veracruzana',
		      noWhatsapp:'2288470202',
		      logo:'http://www.lania.mx/wp-content/uploads/2020/05/thumbnail-1.png',
		      total: 5,
		      entregados: 2,

	   headers: [
          {
            text: 'Requisito ',
            align: 'start',
            sortable: false,
            value: 'name',
           class: ' white--text  indigo darken-2'
          },
          { text: 'Original/copia', value: 'original', class: 'indigo darken-2 white--text' },
          { text: 'Cantidad', value: 'cantidad', class: 'indigo darken-2 white--text' },
          { text: 'Indispensable', value: 'esIndispensable', class: 'indigo darken-2 white--text' },
          { text: 'Ver ', value: 'documento', class: 'indigo darken-2 white--text' },
          { text: 'Validar Doc', value: 'actions', sortable: false, class: 'indigo darken-2 white--text' },
        ],

        requisitosPart : [
        		{
        			name: 'Certificado de Licenciatura',
        			cantidad: 2,
        			original: 'ambos',
        			esIndispensable: true,
        			entregado: true,
              validado: true,
              documento: 'http://www.africau.edu/images/default/sample.pdf'
        		},
        		{
        			name: 'Título de Licenciatura',
        			cantidad: 1,
        			original: 'original',
        			esIndispensable: true,
        			entregado: true,
              validado: false,
              documento: 'http://www.africau.edu/images/default/sample.pdf'
        		},{

        			name: 'CURP',
        			cantidad: 1,
        			original: 'copia',
        			esIndispensable: true,
        			entregado: false,
              validado: false,
              documento: ''
        		}
        ],

		}),

	 methods: {
	      getColor (item) {
          console.log(item)
	        if (!item.validado) return 'red'
	        else return 'green'
	       },
       verDocumento(item){
        //let route = this.$router.resolve({ path: item.documento });
         window.open(item.documento);
       },
       validarDocumento(item){
        alert("aca se validará el documento "+item.documento)
       }
    	},
	}
</script>