<template>
	<v-main>
		<v-card width="500" class="mx-auto mt-9" elevation="17">
			<v-img			      
         		  contain
          		  height="200"
			      :src="require('../assets/logo-lania.jpg')"
			    ></v-img>
			<v-card-title >Registro</v-card-title>
			<v-card-text>
				<v-form ref="form" v-model="valid" lazy-validation  >		  

				    <v-text-field
				      v-model="email"
				  
				      label="Dirección de Correo:"
				      required
				    ></v-text-field>
				      <v-text-field
				      v-model="nombre"
				 
				      label="Dirección de Correo:"
				      required
				    ></v-text-field>
				   
					
				</v-form>
				
			</v-card-text>
			<v-card-actions>
   					 <v-btn 
   					 :disabled="!valid"
					      color="indigo darken-2"
					      class="mx-auto"
					     			    
					      >Registrar</v-btn>
				</v-card-actions>
		</v-card>
	</v-main>
</template>

<script type="text/javascript">

 export default {
 
	   data: () => ({
		      valid: true,
		    	nombre: '',		      
		      	email: '',		      
		      checkbox: false,
		    }),

		    methods: {
		    
		    },
 }



</script>