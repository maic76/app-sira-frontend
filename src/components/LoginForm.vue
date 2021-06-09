<template>
	<v-main>
		<v-card class="px-4">			
			<v-card-title >Ingresar</v-card-title>
			<v-card-text>
				<v-form ref="loginForm" v-model="valid" lazy-validation  >		  
					 <v-row>
                        <v-col cols="12">
                        	 <v-text-field v-model="email" :rules="emailRules" label="Dirección de Correo:" required></v-text-field>
                        </v-col>
				   		 <v-col cols="12">
				   		 	<v-text-field v-model="password" :counter="6" :rules="passwordRules" label="Contraseña:" type="password" required></v-text-field> 
				   		 </v-col>
				   		 <v-spacer></v-spacer>
                         <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                             <v-btn x-large block :disabled="!valid" color="success" @click="validate"> Ingresar </v-btn>
                        </v-col>				    
					</v-row>	
				</v-form>				
			</v-card-text>
		<!-- 	<v-card-actions>
					<router-link to="/home">
						<v-btn 
   					 :disabled="!valid"
					      color="indigo darken-2"
					      class="mx-auto"
					      @click="validate"					    
					      >Ingresar</v-btn>
					</router-link>
   					 
				</v-card-actions> -->
		</v-card>
	</v-main>
</template>

<script type="text/javascript">

 export default {
 
	   data: () => ({
		      valid: true,
		      password: '',
		      passwordRules: [
		        v => !!v || 'La contraseña es requerida',
		        v => (v && v.length >= 6) || 'La contraseña debe tener al menos 6 caracteres',
		         v => /(?=.*[A-Z])/.test(v) || 'Debe tener al menos una mayúscula',
			    v => /(?=.*\d)/.test(v) || 'Debe tener al menos un número',
			   // v => /([!@$%])/.test(v) || 'Debe contener un caracter especial [!@#$%]'
			      ],
		      email: '',
		      emailRules: [
		        v => !!v || 'El correo es requerido',
		        v => /.+@.+\..+/.test(v) || 'Debe ingresar un correo válido',
		      ],		     
		    }),

		    methods: {
		      validate () {
		         if (this.$refs.loginForm.validate()) {
			        // submit form to server/API here...
			        console.log("entrando a validar login");
			      }
		      },
		      reset () {
		        this.$refs.loginForm.reset()
		      },
		      resetValidation () {
		        this.$refs.loginForm.resetValidation()
		      },
		    },
 }



</script>