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
                   <p class="font-weight-bold mb-0">Fecha Inicio:</p>
                    <p class="font-weight-regular">{{fechaInicio}}</p>
                    <p class="font-weight-bold mb-0">Fecha Examen:</p>
                    <p class="font-weight-regular">{{fechaExamen}}</p>
                
            </v-col>
             <v-col
                    cols="6"
                    sm="6"
                    md="6"
                  >
                
                   <p class="font-weight-bold mb-0">Fecha Término:</p>
                    <p class="font-weight-regular">{{fechaTermino}}</p>
                    <p class="font-weight-bold mb-0">Hora Exámen:</p>
                    <p class="font-weight-regular">5:00 pm</p>
             
            </v-col>
            
          </div>
          </v-container>
         
         <v-data-table

			    :headers="headers"
			    :items="aspirantes"
			    class="elevation-1 "
			  >
			    <template v-slot:item.entregados="{ item }">
			      <v-chip
			        :color="getColor(total,item.entregados)"
			        dark
			       >
			          {{item.entregados}} de {{total}}
			      </v-chip>
			    </template>

              <template v-slot:item.actions="{ item }">
                  <v-icon
                    color="teal"
                    class="mr-2"
                    @click="verParticipacion(item)"
                  >
                    mdi-eye
                  </v-icon>
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
			   tituloConv: 'Participantes de la Convocatoria Test 2021',
		      tituloProg: 'Programa de MCA',
		      fechaInicio: '20/02/2021',
		      fechaTermino:'24/03/2021',
		      fechaExamen:'28/03/2021',
		      logo:'http://www.lania.mx/wp-content/uploads/2020/05/thumbnail-1.png',
		      total: 5,
		      //entregados: 2,

	   headers: [
         {
            text: 'Aspirante ',
            align: 'start',
            sortable: false,
            value: 'name',
           class: ' white--text  indigo darken-2'
          },
          { text: 'Escuela Procedencia', value: 'escuela', class: 'indigo darken-2 white--text' },
          { text: 'Doc. Entregados', value: 'entregados', class: 'indigo darken-2 white--text' },
          { text: 'Ver documentos', value: 'actions', class: 'indigo darken-2 white--text' }
        ],

        aspirantes : [
        		{
              id: 1,
        			name: 'Juan Pérez Reyes',
        			escuela: 'Universidad de Xalapa',
        			entregados: 3
        			
        		},
        		{
              id: 2,
        			name: 'Raúl Díaz Sánchez',
              escuela: 'Universidad Veracruzana',
              entregados: 2
        		},{
              id: 3,
        			name: 'Mariana Rivas Portilla',
              escuela: 'Universidad Veracruzana',
              entregados: 5
        		}
        ],

		}),

	 methods: {
	      getColor (total,entregados) {
	        if (total>entregados) return 'red'
	        else return 'green'
	       },

       verParticipacion(item){
          console.log(item);
       }
    	},
	}
</script>