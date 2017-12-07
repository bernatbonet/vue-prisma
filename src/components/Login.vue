<template>
   <v-container>
    <v-layout row>
      <!--<v-flex xs12 sm4 offset-sm4>-->
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <v-toolbar dense color="blue darken-3">
            <v-toolbar-title class="white--text">Login</v-toolbar-title>
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
                      v-model="credentials.username"
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
                      v-model="credentials.password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <center>
                     <v-btn type="submit">Sign in</v-btn>
                    </center>
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
  import LoginService, { getHeader } from '@/services/LoginService'
  import CompanyService from '@/services/CompanyService'
  export default {
    data () {
      return {
        credentials: {
          username: null,
          password: null
        }
      }
    },
    computed: {
      getToken () {
        return this.$store.state.user.token
      }

    },
    methods: {
      onLogin () {
        LoginService.login(this.credentials)
          .then((res) => {
            /* this.$store.commit('setNombre', this.credentials.username)
            console.log(this.$store.getters.getNombre)
            console.log(this.$store.getters['login/getUsername'])
            this.$store.commit('login/setUsername', this.credentials.username)
            this.$store.commit('login/setToken', res.token) */
            this.$store.dispatch('login/setUsername', this.credentials.username)
            this.$store.dispatch('login/setToken', res.token)
            this.$store.dispatch('login/setTimeIn', new Date())
            window.sessionStorage.setItem('userToken', JSON.stringify(res.token))
            CompanyService.getCompanies(getHeader())
              .then((res) => {
                console.log(res)
              })
              .catch(() => {
                console.error('Error recuperando companias')
              })
          })
          .catch(() => {
            console.error('Error de validación')
          })
      }
    }
  }
</script>

<style></style>

