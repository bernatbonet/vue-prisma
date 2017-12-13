<template>
  <v-layout>
    <v-flex>
      <v-card>

        <v-card-title primary-title>
          <div>
            <div class="headline grey--text">{{ $t('usercard.title') }}</div>
          </div>
        </v-card-title>

        <v-form v-model="valid" >

          <v-text-field
            :label="$t('usercard.labels.username')"
            v-model="user.username"
            prepend-icon="account_circle"
            required>
          </v-text-field>

          <v-text-field
            :label="$t('usercard.labels.email')"
            v-model="user.email"
            prepend-icon="email"
            required>
          </v-text-field>

          <v-text-field
            :label="$t('usercard.labels.firstName')"
            v-model="user.first_name">
          </v-text-field>

          <v-text-field
            :label="$t('usercard.labels.lastName')"
            v-model="user.last_name">
          </v-text-field>

          <v-layout>
            <v-checkbox
              :label="$t('usercard.labels.superUser')"
              v-model="user.is_superuser">
            </v-checkbox>
            <v-checkbox
              :label="$t('usercard.labels.active')"
              v-model="user.is_active">
            </v-checkbox>
            <v-checkbox
              :label="$t('usercard.labels.staff')"
              v-model="user.is_staff">
            </v-checkbox>
          </v-layout>
          <v-layout>
            <v-text-field
              :label="$t('usercard.labels.dateJoined')"
              :value="user.date_joined | dateFormat"
              prepend-icon="event"
              readonly>
            </v-text-field>
            <v-text-field
              :label="$t('usercard.labels.hourJoined')"
              :value="user.date_joined | timeFormat"
              prepend-icon="access_time"
              readonly>
            </v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              :label="$t('usercard.labels.lastLogin')"
              :value="user.last_login | dateFormat"
              prepend-icon="event"
              readonly>
            </v-text-field>
            <v-text-field
              :label="$t('usercard.labels.hourLogin')"
              :value="user.last_login | timeFormat"
              prepend-icon="access_time"
              readonly>
            </v-text-field>
          </v-layout>
          <v-layout>
            <v-spacer></v-spacer>
            <v-btn @click="change_password" v-show="user.id==10">{{ $t('usercard.buttons.change_password')}}</v-btn>
            <v-btn @click="save" :disabled="!valid">{{ $t('usercard.buttons.save')}}</v-btn>
            <v-btn @click="del" :disabled="!valid">{{ $t('usercard.buttons.delete')}}</v-btn>
            <v-btn @click="clear">{{ $t('usercard.buttons.cancel')}}</v-btn>
          </v-layout>
        </v-form>
      </v-card>
    </v-flex>
   </v-layout>
</template>

<script>
  import moment from 'moment'
  import UserService, { getHeader } from '@/services/UserService'
  moment.locale('es')

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
    filters: {
      capitalize: (value) => {
        if (!value) return ''
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      uppercase: (value) => {
        return value.toUpperCase()
      },
      dateFormat: (value) => {
        return moment(value).format('L')
      },
      timeFormat: (value) => {
        return moment(value).format('LTS')
      },
      euros: (value) => {
        return value.toFixed(2) + ' €'
      }
    },
    methods: {
      change_password () {

      },
      save () {
        UserService.setUser(getHeader(), '1/')
          .then((res) => {
            console.info(res)
          })
          .catch((err) => {
            console.error(err)
          })
      },
      del () {

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

