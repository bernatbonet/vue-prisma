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
            // Save login
            // this.$store.getters['login/getUsername']
            this.$store.dispatch('login/setUsername', this.credentials.username)
            this.$store.dispatch('login/setToken', res.token)
            this.$store.dispatch('login/setTimeIn', new Date())
            window.sessionStorage.setItem('userToken', JSON.stringify(res.token))
            LoginService.getUser(getHeader(), '?username=' + this.credentials.username)
              .then((res) => {
                console.log(res[0])
                this.$store.dispatch('login/setId', res[0].id)
                this.$store.dispatch('login/setUsername', res[0].username)
                this.$store.dispatch('login/setPassword', res[0].password)
                this.$store.dispatch('login/setFirstName', res[0].first_name)
                this.$store.dispatch('login/setLastName', res[0].last_name)
                this.$store.dispatch('login/setEmail', res[0].email)
                this.$store.dispatch('login/setIsSuperuser', res[0].is_superuser)
                this.$store.dispatch('login/setIsActive', res[0].is_active)
                this.$store.dispatch('login/setIsStaff', res[0].is_staff)
                this.$store.dispatch('login/setDateJoined', res[0].date_joined)
                this.$store.dispatch('login/setLastLogin', res[0].last_login)
                // Route to user card
                this.$router.push('/user')
              })
              .catch(() => {
                console.error('Error recuperando datos usuario')
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

