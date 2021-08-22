<template>
 <v-card
          class="mx-auto"
         
        >
          <div class="d-flex flex-no-wrap justify-space-between indigo darken-4"  >
            <div>
              <v-card-title
                    class="text-h5 fix white--text "
                   
                    >{{tituloProg}} </v-card-title>  
                    <v-card-subtitle class="font-weight-regular white--text">{{tituloConv}}</v-card-subtitle>
                     <v-card-subtitle class="font-weight-regular white--text">
                        <v-chip
                            :color="getColorStatus(total,entregados)"
                            dark
                           >
                              Entregados: {{entregados}} de {{total}}
                          </v-chip>
                     </v-card-subtitle>
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
			    :items="requisitosPart"
			    class="elevation-1 "
			  >
			    <template v-slot:item.entregado="{ item }">
			      <v-chip
			        :color="getColor(item.entregado)"
			        dark
			       >
			           <span v-if="item.entregado">SI</span>
                 <span v-else>NO</span>
			      </v-chip>
			    </template>

			        <template v-slot:item.id="{ item }">
				
              <v-file-input
                show-size
                label="Archivo PDF"
                @change="onFileSelected(item,$event)"
              ></v-file-input>
            
               <v-icon
                    color="teal"
                    class="mr-2"
                    v-if="seleccionado==item.id"
                  @click="onUpload(item.id,$event,idParticipacion)"
                >
                    mdi-upload
                </v-icon>     
				     
				    </template>

 		 </v-data-table>

          <v-divider></v-divider>           
               
         <v-card-actions class="text-center" >
              <v-spacer></v-spacer>
              <div >
              <v-btn color="green"  dark  class="mb-2 "
               
                @click=""
              >
                Declinar participación
              </v-btn>
               <v-btn color="green"  dark  class="mb-2 "
               
                @click="$router.go(-1)"
              >
                Regresar
              </v-btn>
            </div>
            </v-card-actions>
        </v-card>
</template>
<script type="text/javascript">
	
	export default {
		data : () => ({
			   tituloConv: '',
		      tituloProg: '',
		      fechaInicio: '',
		      fechaTermino:'',
		      fechaExamen:'28/03/2021',
		      logo:'',
		      total: 5,
		      entregados: 2,
          idParticipacion: '',

	   headers: [
          {
            text: 'Requisito ',
            align: 'start',
            sortable: false,
            value: 'requisitoConvocatoria.requisito.nombre',
           class: ' white--text  indigo darken-2'
          },
          { text: 'Original/copia', value: 'requisitoConvocatoria.original', class: 'indigo darken-2 white--text' },
          { text: 'Cantidad', value: 'requisitoConvocatoria.cantidad', class: 'indigo darken-2 white--text' },
         // { text: 'Indispensable', value: 'requisitoConvocatoria.indispensable', class: 'indigo darken-2 white--text' },
          { text: 'Entregado', value: 'entregado', class: 'indigo darken-2 white--text' },
          { text: 'Subir archivo', value: 'id', sortable: false, class: 'indigo darken-2 white--text' }, //enviando el ID de PArticipacion Req Conv
        ],

        requisitosPart : [ ],

        selectedFile: null,
        seleccionado: null,

		}),

    created () {
      this.initialize()
    },

	 methods: {
    

     initialize () {
      console.log("entrando a initialize");

      let token = localStorage.getItem('token');
         
      let config = {
                   headers: { Authorization: `Bearer ${token}` }
                  };

      this.axios.get(`/api/participaciones/${this.$route.params.id}`,           
                   config
                  )
                .then(response => {
                   console.log(response);
                   //console.log(response.headers.authorization);
                   //actualizamos la vista
                     this.requisitosPart=response.data.participacion.participacionRequisitosConvocatoria
                     this.tituloProg=response.data.participacion.convocatoria.programaEducativo.nombre
                     this.tituloConv=response.data.participacion.convocatoria.nombre
                     this.fechaInicio=response.data.participacion.convocatoria.fechaInicio
                     this.fechaTermino=response.data.participacion.convocatoria.fechaTermino
                     this.logo=response.data.participacion.convocatoria.programaEducativo.src
                     this.total=response.data.total
                     this.entregados=response.data.entregados
                     this.idParticipacion = response.data.participacion.id

                  })
                .catch(error => {
                  this.errorMessage = error.message;
                  console.error("There was an error!", error);
                });  

       },

       onFileSelected(item,file){
         
          if(file){
             console.log(file)
            console.log(file.name)
             this.selectedFile = file;
            this.seleccionado = item.id        
          }else{
            this.seleccionado = null
          }
         
          //this.fileSelected = true;
       },

       selected(item){
          this.seleccionado = item.id
       },

       onUpload(idPrc,event,idParticipcion){
          console.log("subir archivo"+ this.selectedFile.name)
          const fd = new FormData();
          fd.append('file', this.selectedFile, this.selectedFile.name)
          let token = localStorage.getItem('token');
         
          let config = {
                   headers: { Authorization: `Bearer ${token}` }
                  };

          this.axios.put('/api/participaciones/'+ idParticipcion + '/prc/' +idPrc,
                           fd,                            
                          config,
                          {
                              onUploadProgress: uploadEvent =>{
                                  console.log("Progreso de Subida: " + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%' )
                              }
                           },
                         ).then(response => {
                                 console.log(response);
                                 this.total= response.data.total
                                 this.entregados = response.data.entregados
                                 //console.log(response.headers.authorization);
                                 //actualizamos la vista                 

                                })
                              .catch(error => {
                                this.errorMessage = error.message;
                                console.error("There was an error!", error);
                              });  

       },


	      getColor (entregado) {
	        if (!entregado) return 'red'
	        else if (entregado) return 'green'
	       },

        getColorStatus (total,entregados) {
          if (total>entregados) return 'red'
          else return 'green'
         },
    	},
	}
</script>