<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  // import auth from '@/services/auth'
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: { required }
    },
    name: 'login',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required'// ,
        // (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      /* emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ], */
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),
    methods: {
      login () {
        /* auth.login(this.username, this.password, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.replace(this.$route.query.redirect || '/')
          }
        }) */
        console.info('login')
      },
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          /* axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          }) */
          console.info('validated')
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>

</style>

