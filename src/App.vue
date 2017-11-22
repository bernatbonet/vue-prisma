<template>
  <v-app>
    <v-toolbar dark>
      <v-toolbar-title>Title</v-toolbar-title>
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
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>Prisma © {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
</script>

<style>
</style>
