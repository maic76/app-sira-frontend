<template>
  <v-app>

    <v-main>

    <v-tabs v-model="tab" centered>
       
        <v-tab>Login</v-tab> 
         <v-tab>Registro</v-tab>             
            <v-tab-item>
               <LoginForm></LoginForm>
            </v-tab-item>
            <v-tab-item>
               <RegistroForm></RegistroForm>
            </v-tab-item>
     </v-tabs>
    

    </v-main>
  </v-app>
</template>

<script>

import LoginForm from './components/LoginForm';
import RegistroForm from './components/RegistroForm';

export default {
  name: 'App',

   components: {
     LoginForm,
     RegistroForm
  },

  data: () => ({
     tab: null
  }),
};
</script>
