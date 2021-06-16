<template>
  <v-app>
    <v-main>
      <!--  <button @click="showAlert">Hello world</button> -->
    	 <v-parallax
    dark
    contain
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >	
	  
       <router-view/>
   </v-parallax>
    </v-main>
  </v-app>
</template>

<script>



export default {
  name: 'App',

  
  data: () => ({
    
  }),
    methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  },
};
</script>
