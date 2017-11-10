<template>
  <md-layout md-tag="form" novalidate @submit.stop.prevent="submit" md-align="center">
    <md-layout md-tag="md-card" md-column md-flex="30"  md-flex-medium="40" md-flex-small="60" md-flex-xsmall="90" class="md-primary">
      <md-card-header>
        <!--<div class="md-title">Login</div>-->
        <md-avatar class="md-avatar-icon md-large md-warn">
          <img src="../assets/logo.png" alt="People">
        </md-avatar>
        <p v-if="error" class="error">Bad login information</p>
      </md-card-header>
      <md-card-content>
        <md-input-container>
          <md-icon>person</md-icon>
          <label>Username</label>
          <md-input username required v-model="username" />
        </md-input-container>

        <md-input-container md-has-password>
          <md-icon>lock</md-icon>
          <label>Password</label>
          <md-input type="password" required v-model="password" />
        </md-input-container>
      </md-card-content>

      <md-card-actions>
        <md-button v-show="!loading" type="submit">Login</md-button>
      </md-card-actions>
    </md-layout>
  </md-layout>
</template>

<script>
  import auth from '../auth'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        error: false
      }
    },
    methods: {
      login () {
        auth.login(this.username, this.password, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.replace(this.$route.query.redirect || '/')
          }
        })
      }
    }
  }
</script>

<style>
  .error {
    color: red
  }
</style>

