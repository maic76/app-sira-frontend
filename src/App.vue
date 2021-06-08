<template>
  <v-app>
    <v-main>
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
};
</script>
