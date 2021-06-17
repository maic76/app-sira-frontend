<template>
  <v-data-table :headers="headers" :items="programas" sort-by="descripcion"  class="elevation-10" >
    <template v-slot:top>
      <v-toolbar flat color="indigo accent-3 white--text"  >
        <v-toolbar-title >Programas Educativos</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px" >
          <template v-slot:activator="{ on, attrs }">
            <v-btn  color="primary"  dark  class="mb-2" v-bind="attrs"  v-on="on" >
             Crear Nuevo
            </v-btn>
          </template>
          <v-card>
            <div class="indigo accent-3 text-center white--text">
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
          </div>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-textarea
                     outlined                   
                      v-model="editedItem.descripcion"
                      label="Descripcion"
                    ></v-textarea>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.clave"
                      label="Clave"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  <!--  <v-date-picker v-model="editedItem.vigencia"></v-date-picker> -->
                    <v-text-field
                      v-model="editedItem.vigencia"
                      label="Vigencia"
                    ></v-text-field> 
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.abreviatura"
                      label="Abreviatura"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary"  dark  class="mb-2"
               
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
               color="primary"  dark  class="mb-2"
                @click="save"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">¿Estas seguro que deseas eliminar ?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon
        color="teal"
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        color="red"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Nombre ',
          align: 'start',
          sortable: false,
          value: 'nombre',
          class: 'indigo accent-2 white--text text-center'
        },
        { text: 'Descripcion', value: 'descripcion', width:'300', class: 'indigo accent-2 white--text'},
        { text: 'Clave', value: 'clave', class: 'indigo accent-2 white--text' },
        { text: 'Vigencia', value: 'vigencia', class: 'indigo accent-2 white--text' },
        { text: 'Abreviatura', value: 'abreviatura', class: 'indigo accent-2 white--text' },
        { text: 'Acciones', value: 'actions', sortable: false, class: 'indigo accent-2 white--text' },
      ],
      programas: [],
      editedIndex: -1,
      editedItem: {
        nombre: '',
        descripcion: '',
        clave: '',
        vigencia: '',
        abreviatura: '',
      },
      defaultItem: {
        nombre: '',
        descripcion: '',
        clave: '',
        vigencia: '',
        abreviatura: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Programa Educativo' : 'Editar Programa Educativo'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.programas = [
          {
            nombre: 'Maestría en Computación Aplicada',
            descripcion: "Adquiere conocimientos avanzados en tecnologías emergentes: Ingeniería de Software, Sistemas Distribuidos, Bases de Datos, inteligencia artificial y TIC’s en la educación.",
            clave: 'MCA-2941',
            vigencia: 'Julio-2029',
            abreviatura: 'MCA',
          },
          {
            nombre: 'Maestría en Redes y Sistemas Integrados Presencial',
            descripcion: "Adquiere una visión integral y sólida en el uso de la tecnología para: la construcción y diseño de sistemas computacionales, el manejo de datos y la administración de redes." ,
            clave: 'MRYSI-020MEP',
            vigencia: 'Mayo-2028',
            abreviatura: 'MRYSI-P',
          },
          {
            nombre: 'Diplomado en Programacion Avanzada',
            descripcion: "En este diplomado se utilizará el lenguaje de programación JAVA y un framework MVC para el desarrollo de aplicaciones web interactivas y responsivas",
            clave: 'DPA-12001',
            vigencia: 'Mayo-2028',
            abreviatura: 'DPA',
          },
          {
            nombre: 'Maestría en Redes y Sistemas Integrados en Línea',
            descripcion: "Adquiere una visión integral y sólida en el uso de la tecnología para: la construcción y diseño de sistemas computacionales, el manejo de datos y la administración de redes desde la modalidad en Línea a través de las plataformas que te brinda LANIA" ,
            clave: 'MRYSI-L9310',
            vigencia: 'Agosto-2029',
            abreviatura: 'MRYSI-L',
          },
         
        ]
      },

      editItem (item) {
        this.editedIndex = this.programas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.programas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.programas.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        //TODO ....

         /* console.log("entrando a guardar programa educativo");
              this.axios.post("/api/progeducativos", {                  
                    nombre: this.editedItem.nombre,                   
                    password: this.password 
                  })
                .then(response => {
                   console.log(response);
                   console.log(response.headers.authorization);
                    localStorage.setItem('token',response.headers.authorization.replace('Bearer ','')); 
                    this.$router.push('/home');               
                  })
                .catch(error => {
                  this.errorMessage = error.message;
                  console.error("There was an error!", error);
                });             
*/
        if (this.editedIndex > -1) {
          Object.assign(this.programas[this.editedIndex], this.editedItem)
        } else {
          this.programas.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

