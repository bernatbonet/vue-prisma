<template>
  <v-app>
    <v-toolbar dense color="blue">
      <v-toolbar-title class="white--text">Prisma</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer dense class="pa-3" color="blue">
      <v-spacer></v-spacer>
      <div class="white--text">Prisma © {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
</script>

<style>
</style>
