<template>
  <div>
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container>

      <v-layout row wrap >
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile width="80" height="80" class="mt-n12">
                <v-sheet color="green"  width="80" height="80" elevation="15">
                  <v-icon dark large>mdi-account-group</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Aspirantes registrados</div>
                <v-list-item-title class="headline mb-1 text-right">25</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2" >mdi-pencil</v-icon>
              <div class="overline">Iyad</div>
            </v-card-actions>
          </v-card>
        </v-flex>
            <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile width="80" height="80" class="mt-n12">
                <v-sheet color="green"  width="80" height="80" elevation="15">
                  <v-icon dark large>mdi-account-group</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Convocatorias Activas</div>
                <v-list-item-title class="headline mb-1 text-right">6</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2" >mdi-pencil</v-icon>
              <div class="overline">Iyad</div>
            </v-card-actions>
          </v-card>
        </v-flex>
            <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile width="80" height="80" class="mt-n12">
                <v-sheet color="green"  width="80" height="80" elevation="15">
                  <v-icon dark large>mdi-account-group</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Programas Educativos</div>
                <v-list-item-title class="headline mb-1 text-right">5</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2" >mdi-pencil</v-icon>
              <div class="overline">Iyad</div>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>    
  </div>
</template>