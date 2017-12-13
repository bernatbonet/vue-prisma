<template>
  <v-app>

    <v-navigation-drawer v-if="$store.getters['login/isAuthenticated']" fixed clipped app v-model="drawer">
      <v-list>
        <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
          <v-list-tile slot="item" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click="">
            <v-list-tile-action>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar v-if="$store.getters['login/isAuthenticated']" color="blue darken-3" dark app clipped-left fixed>
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Prisma</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-flex align-center" style="margin-left: auto">
        <!--<v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>-->
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
      </div>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer v-if="1==2" dense class="pa-3" color="blue darken-3">
      <v-spacer></v-spacer>
      <div class="white--text">Prisma © {{ new Date().getFullYear() }}</div>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        {
          icon: 'settings',
          title: 'Configuration',
          items: [
            {icon: 'list', title: 'Modules', url: ''},
            {icon: 'contacts', title: 'Roles', url: ''},
            {icon: 'account_circle', title: 'Users', url: ''}
          ]
        }
      ]
    })
  }
</script>

<style>
</style>
