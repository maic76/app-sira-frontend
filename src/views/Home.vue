<template >
<div id="inspire">
	<v-navigation-drawer v-model="drawer" app >
       <v-list-item color="indigo">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            SIRA
          </v-list-item-title>
          <v-list-item-subtitle>
            Aspirante
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo accent-4">
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> <span class="white--text">SIRA</span></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <CRUDProgEducativos/>
    </v-main>
</div>
    

</template>

<script>
   import CRUDProgEducativos from '@/components/CRUDProgEducativos'
 export default {
  components: {
      CRUDProgEducativos
    },
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Convocatorias', icon: 'mdi-image' },
          { title: 'Programas Educativos', icon: 'mdi-help-box' },
        ],
        right: null,
        drawer:null
      }
    },
  }
</script>