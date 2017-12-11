<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline grey--text">{{ $t('usercard.title') }}</div>
          </div>
        </v-card-title>
        <v-form v-model="valid">
          <v-text-field
            v-bind:label="$t('usercard.labels.username')"
            v-model="user.username"
            prepend-icon="account_circle"
            required>
          </v-text-field>
          <v-text-field
            v-bind:label="$t('usercard.labels.email')"
            v-model="user.email"
            prepend-icon="email"
            required>
          </v-text-field>
          <v-text-field
            v-bind:label="$t('usercard.labels.firstName')"
            v-model="user.first_name">
          </v-text-field>
          <v-text-field
            v-bind:label="$t('usercard.labels.lastName')"
            v-model="user.last_name">
          </v-text-field>
          <v-checkbox
            v-bind:label="$t('usercard.labels.superUser')"
            v-model="user.is_superuser">
          </v-checkbox>
          <v-checkbox
            v-bind:label="$t('usercard.labels.active')"
            v-model="user.is_active">
          </v-checkbox>
          <v-checkbox
            v-bind:label="$t('usercard.labels.staff')"
            v-model="user.is_staff">
          </v-checkbox>
          <v-flex>
            <v-menu>
              <v-text-field
                slot="activator"
                v-bind:label="$t('usercard.labels.dateJoined')"
                v-model="user.date_joined"
                prepend-icon="event"
                readonly>
              </v-text-field>
              <v-date-picker
                v-model="user.date_joined">
                <template slot-scope="{ cancelar }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="">{{ $t('usercard.buttons.dateJoined.cancel')}}</v-btn>
                  </v-card-actions>
                </template>
              </v-date-picker>
            </v-menu>
            <v-menu>
              <v-text-field
                slot="activator"
                v-bind:label="$t('usercard.labels.hourJoined')"
                v-model="user.date_joined"
                prepend-icon="access_time"
                readonly>
              </v-text-field>
              <v-time-picker
                v-model="user.date_joined">
                <template slot-scope="{ cancelar }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="">{{ $t('usercard.buttons.hourJoined.cancel')}}</v-btn>
                  </v-card-actions>
                </template>
              </v-time-picker>
            </v-menu>
          </v-flex>
          <v-flex>
            <v-menu>
              <v-text-field
                slot="activator"
                v-bind:label="$t('usercard.labels.lastLogin')"
                v-model="user.last_login"
                prepend-icon="event"
                readonly>
              </v-text-field>
              <v-date-picker
                v-model="user.last_login"
                readonly>
                <template slot-scope="{ cancelar }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="">{{ $t('usercard.buttons.lastLogin.cancel')}}</v-btn>
                  </v-card-actions>
                </template>
              </v-date-picker>
            </v-menu>
            <v-menu>
              <v-text-field
                slot="activator"
                v-bind:label="$t('usercard.labels.hourLogin')"
                v-model="user.last_login"
                prepend-icon="access_time"
                readonly>
              </v-text-field>
              <v-time-picker
                v-model="user.last_login"
                readonly>
                <template slot-scope="{ cancelar }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="">{{ $t('usercard.buttons.hourJoined.cancel')}}</v-btn>
                  </v-card-actions>
                </template>
              </v-time-picker>
            </v-menu>
          </v-flex>
          <v-btn @click="">{{ $t('usercard.buttons.change_password')}}</v-btn>
          <v-btn @click="save" :disabled="!valid">{{ $t('usercard.buttons.save')}}</v-btn>
          <v-btn @click="clear">{{ $t('usercard.buttons.cancel')}}</v-btn>
        </v-form>
      </v-card>
    </v-flex>
   </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        valid: false,
        e1: true
      }
    },
    computed: {
      user () {
        return this.$store.getters['login/getUser']
      }
    },
    methods: {
      formatDate (date) {
        if (date) {
          const [day, month, year] = date.split('/')
          return `${day}/${month}/${year}`
        } else {
          return null
        }
      },
      parseDate (date) {
        if (!date) {
          return null
        }

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      guardarFechaAlta () {
        return null
      },
      cancelarFechaAlta () {
        return null
      },
      submit () {
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>
  .card {
    padding: 2%
  }
</style>

