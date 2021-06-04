<template>
	<v-main>
		<v-card width="500" class="mx-auto mt-9" elevation="17">
			<v-img			      
         		  contain
          		  height="200"
			      :src="require('../assets/logo-lania.jpg')"
			    ></v-img>
			<v-card-title >Ingresar</v-card-title>
			<v-card-text>
				<v-form ref="form" v-model="valid" lazy-validation  >		  

				    <v-text-field
				      v-model="email"
				      :rules="emailRules"
				      label="Dirección de Correo:"
				      required
				    ></v-text-field>
				     <v-text-field
				      v-model="password"
				      :counter="6"
				      :rules="passwordRules"
				      label="Contraseña:"
				       type="password"
				      required
				    ></v-text-field>
					
				</v-form>
				
			</v-card-text>
			<v-card-actions>
   					 <v-btn 
   					 :disabled="!valid"
					      color="indigo darken-2"
					      class="mx-auto"
					      @click="validate"					    
					      >Ingresar</v-btn>
				</v-card-actions>
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
		      checkbox: false,
		    }),

		    methods: {
		      validate () {
		        this.$refs.form.validate()
		      },
		      reset () {
		        this.$refs.form.reset()
		      },
		      resetValidation () {
		        this.$refs.form.resetValidation()
		      },
		    },
 }



</script>