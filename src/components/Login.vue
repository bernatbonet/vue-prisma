<template>
   <v-container>
    <v-layout row>
      <!--<v-flex xs12 sm4 offset-sm4>-->
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <v-toolbar color="blue">
            <v-spacer></v-spacer>
            <v-toolbar-title class="white--text">Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onLogin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="username"
                      label="Username"
                      id="username"
                      v-model="username"
                      type="text"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Sign in</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import auth from '@/services/auth'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      onLogin () {
        auth.login(this.username, this.password, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.replace(this.$route.query.redirect || '/')
          }
        })
        console.info('login')
      }
    }
  }
</script>

<style></style>

