<template>
	<v-main>
		<v-card class="px-4">			
			<v-card-title >Registro</v-card-title>
			<v-card-text>
				<v-form ref="form" v-model="valid" lazy-validation  >
				 <v-row>
                    	 <v-col cols="12" sm="6" md="6">
                         	<v-text-field v-model="nombre" :rules="[rules.required]" label="Nombre" maxlength="20" required></v-text-field>
                         </v-col>
                          <v-col cols="12" sm="6" md="6">
                         	<v-text-field v-model="apellidos" :rules="[rules.required]" label="Apellidos" maxlength="60" required></v-text-field>
                         </v-col>
                          <v-col cols="12" sm="6" md="6">
                         	<v-text-field v-model="escuela" :rules="[rules.required]" label="Escuela de procedencia:" maxlength="40" required></v-text-field>
                         </v-col>
                          <v-col cols="12" sm="6" md="6">
                         	<v-text-field v-model="nowhatsapp" :rules="[rules.required]" label="No. de whatsapp" maxlength="10" required></v-text-field>
                         </v-col>
                         <v-col cols="12">
                           <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                         </v-col>
                         <v-col cols="12">
                          	<v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="Debe tener por lo menos 6 caracteres" counter @click:append="show1 = !show1"></v-text-field>
                         </v-col>
                         <v-col cols="12">
                          	<v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                        	</v-col>
                         <v-spacer></v-spacer>
                         <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                             <v-btn x-large block :disabled="!valid" color="success" @click="validate">Registrar</v-btn>
                         </v-col>					 
				</v-row>	
				</v-form>
				
			</v-card-text>
		</v-card>
	</v-main>
</template>

<script type="text/javascript">

 export default {
 
	   data: () => ({
		      	valid: true,
		    	nombre: "",		      
		        apellidos:"", 
		      	checkbox: false,
		      	email: "",
		      	nowhatsapp: "",
		      	escuela: "",
			    password: "",
			    verify: "",			   	   
			    emailRules: [
			      v => !!v || "Requerido",
			      v => /.+@.+\..+/.test(v) || "Debe ingresar un correo válido"
			    ],
			    show1: false,
			    rules: {
			      required: value => !!value || "Requerido",
			      min: v => (v && v.length >= 6) || "Min 6 caracteres"
    			}
		    }),
	   computed: {
		   		passwordMatch() {
		      		return () => this.password === this.verify || "La contraseña debe coincidir";
    			}
  			},
	   methods: {
				validate() {
			      if (this.$refs.form.validate()) {
			        // submit form to server/API here...
			         console.log("entrando a registrar");
			      }
			    },
			    reset() {
			      this.$refs.form.reset();
			    },
			    resetValidation() {
			      this.$refs.form.resetValidation();
			    }
		    },
 }



</script>