<template>
  <md-layout md-tag="form" novalidate @submit.stop.prevent="submit" md-align="center">
    <md-layout md-tag="md-card" md-column md-flex="30" md-flex-medium="40" md-flex-small="60" md-flex-xsmall="90" class="md-primary">
      <!--<md-card-header>
        <div class="md-title">Vue-Prisma Login Form</div>
      </md-card-header>-->

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
  export default {

  }
</script>

<style>

</style>

