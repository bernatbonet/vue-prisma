<template>
  <v-app>
    <!--<v-navigation-drawer app>Drawer</v-navigation-drawer>-->
    <v-toolbar dark>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item.text">
        <v-btn flat>{{ item.text }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
</script>

<style>

</style>
