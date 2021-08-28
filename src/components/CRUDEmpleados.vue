<template>
  <v-data-table :headers="headers" :items="empleados" sort-by="descripcion"  class="elevation-10" :header-props="headerProps">
   
    <template v-slot:top>
      <v-toolbar flat color="indigo darken-2 white--text"  >
        <v-toolbar-title class="text-h5">Usuarios Lania</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px" >
          <template v-slot:activator="{ on, attrs }">
            <v-btn  color="indigo accent-3"  dark  class="mb-2" v-bind="attrs"  v-on="on" >
             Crear Nuevo
            </v-btn>
          </template>
          <v-card>
            <div class="indigo darken-2 text-center white--text">
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
                    <v-text-field
                      v-model="editedItem.apellido"
                      label="Apellido"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field v-model="editedItem.email" :rules="emailRules" label="Correo" required></v-text-field>
                  </v-col>
                   <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                    
                        <v-text-field v-model="editedItem.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="Debe tener por lo menos 6 caracteres" counter @click:append="show1 = !show1"></v-text-field>
                   

                    </v-col>
                  <!-- <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  
                    <v-text-field
                      v-model="editedItem.vigencia"
                      label="Vigencia"
                    ></v-text-field> 
                  </v-col> -->
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.clave"
                      label="Clave de Empleado"
                    ></v-text-field>
                  </v-col>

                 <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >

                   <v-select
                        :items="roles"
                         v-model="editedItem.rol"
                         item-text="rolText"
                         item-value="rol"
                        label="Rol"
                        dense
                        solo
                      ></v-select>         

                  </v-col> 

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="indigo darken-2"  dark  class="mb-2"
               
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
               color="indigo darken-2"  dark  class="mb-2"
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
        Reiniciar
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>

import jwt_decode from "jwt-decode";

  import {axios} from "axios";

  export default {

    data: () => ({

      dialog: false,
      dialogDelete: false,
       headerProps: {
        sortByText: "Ordenar por"
      },
      headers: [
        {text: 'No.', value:'id', class:'indigo lighten-1 white--text text-center'},
        { text: 'Nombre ', align: 'start', sortable: false, value: 'nombre', class: 'indigo lighten-1 white--text text-center'},
        { text: 'Apellido', value: 'apellido', width:'300', class: 'indigo lighten-1 white--text'},
        { text: 'Email', value: 'email', class: 'indigo lighten-1 white--text' },
        { text: 'Clave', value: 'clave', class: 'indigo lighten-1 white--text' },
        { text: 'Rol', value: 'rol', class: 'indigo lighten-1 white--text' },
        { text: 'Acciones', value: 'actions', sortable: false, class: 'indigo lighten-1 white--text' },
      ],
      menu: false,
      empleados: [],
      emailRules: [
            v => !!v || "Requerido",
            v => /.+@.+\..+/.test(v) || "Debe ingresar un correo válido"
          ],
      show1: false,
      rules: {
            required: value => !!value || "Requerido",
            min: v => (v && v.length >= 6) || "Min 6 caracteres"
          },
      editedIndex: -1,
      editedItem: {
        id:'',
        nombre: '',
        apellido: '',
        email: '',
        password:'',      
        clave: '',
        rol: '',
      },
      defaultItem: {
        id:'',
        nombre: '',
        apellido: '',
        email: '',   
        password:'',       
        clave: '',
        rol: '',
      },

      roles: [{ rolText:'SEGUIMIENTO', rol:'SEGUIMIENTO'}, { rolText:'ADMINISTRADOR', rol:'ADMIN'}]
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Editar Usuario'
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

     let token = localStorage.getItem('token');
     let decoded = jwt_decode(token);
     console.log(decoded)
         
     let config = {
                    headers: { Authorization: `Bearer ${token}` }
                  };

     /* this.axios.get("/api/peducativos",           
                   config
                  )
                .then(response => {
                   console.log(response);
                   console.log(response.headers.authorization);
                   //actualizamos la vista
                     this.programas=response.data;   
                  })
                .catch(error => {
                  this.errorMessage = error.message;
                  console.error("There was an error!", error);
                });                   */

      },

      editItem (item) {
        //this.editedIndex = this.programas.indexOf(item)
       /* console.log(item);
         this.editedIndex = this.programas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true*/

        this.editedIndex = this.programas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        /*this.editedIndex = this.programas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true*/
        this.editedIndex = item.id
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
       // this.programas.splice(this.editedIndex, 1)
           let token = localStorage.getItem('token');

           let bodyParams = { 
                   
                  };

           let config = {
                       headers: { Authorization: `Bearer ${token}` }
                     };

      /*    let indice = this.editedIndex;
             this.axios.delete("/api/peducativos/"+this.editedIndex,                  
                           config
                          )
                        .then(response => {
                           console.log(response);
                           //onsole.log(response.headers.authorization);
                              //actualizamos la vista
                           console.log("programa eliminado ->"+response);                              
                              this.programas = this.programas.filter(p => p.id != indice)
                              this.closeDelete()
                          })
                        .catch(error => {
                          this.errorMessage = error.message;
                          console.error("There was an error!", error);
                        });     */
      
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
           let token = localStorage.getItem('token');

         /*  let bodyParams = { 
                    nombre: this.editedItem.nombre,                   
                    descripcion: this.editedItem.descripcion,
                    clave: this.editedItem.clave,
                    vigencia: this.editedItem.vigencia,
                    abreviatura: this.editedItem.abreviatura 
                  };*/

           let config = {
                       headers: { Authorization: `Bearer ${token}` }
                     };

             if (this.editedIndex > -1) {  //si es update

                        console.log("EL id que se actualizara en BD será > " +this.editedItem.id)
                        console.log("El indice de la tabla actualizar es >"+ this.editedIndex)
                        let indice = this.editedIndex;
                     /*   this.axios.put("/api/peducativos/"+this.editedItem.id,                  
                           bodyParams,
                           config
                          )
                        .then(response => {
                           console.log(response);
                           //onsole.log(response.headers.authorization);
                              //actualizamos la vista
                              console.log("programa editado ->"+response.data);                              
                              Object.assign(this.programas[indice], response.data);
                          })
                        .catch(error => {
                          this.errorMessage = error.message;
                          console.error("There was an error!", error);
                        });     
                        */
                }
             else {  //si es nuevo

                console.log("entrando a guardar nuevo usuario");
                console.log("el token es "+localStorage.getItem('token'));        
                

                      /*this.axios.post("/api/peducativos",                  
                           bodyParams,
                           config
                          )
                        .then(response => {
                           console.log(response);
                           //onsole.log(response.headers.authorization);
                              //actualizamos la vista
                              console.log("programa editado ->"+response.data);
                               this.programas.push(response.data)      
                          })
                        .catch(error => {
                          this.errorMessage = error.message;
                          console.error("There was an error!", error);
                        });     */                               
                }                              
           this.close()              
      },
    },
  }
</script>

