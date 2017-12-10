<template>
  <v-card>
    <v-form v-model="valid">
      <v-text-field
        label="Username"
        v-model="username"
        :counter="10"
        required>
      </v-text-field>
      <v-text-field
        label="Email"
        v-model="email"
        :rules="emailRules"
        required>
      </v-text-field>
      <v-text-field
        label="First Name"
        v-model="firstName">
      </v-text-field>
      <v-text-field
        label="Last Name"
        v-model="lastName">
      </v-text-field>
      <v-checkbox
        label="Is superuser ?"
        v-model="superUser">
      </v-checkbox>
      <v-checkbox
        label="Is active ?"
        v-model="active">
      </v-checkbox>
      <v-checkbox
        label="Is staff ?"
        v-model="staff">
      </v-checkbox>
      <v-btn @click="submit" :disabled="!valid">Enviar</v-btn>
      <v-btn @click="clear">Clear</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    username: null,
    email: null,
    emailRules: [
      (v) => !!v || 'E-mail is required'
      // (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    firstName: null,
    lastName: null,
    superUser: false,
    active: true,
    staff: true
  }),
  methods: {
    submit () {
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>

</style>

