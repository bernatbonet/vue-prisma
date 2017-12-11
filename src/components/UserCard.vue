<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline grey--text">{{ $t('usercard.title')}}</div>
          </div>
        </v-card-title>
        <v-form v-model="valid">
          <v-text-field
            label="$t('usercard.username.label')"
            v-model="username"
            :counter="10"
            prepend-icon="account_circle"
            required>
          </v-text-field>
          <v-text-field
            label="Email"
            v-model="email"
            :rules="emailRules"
            prepend-icon="email"
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
          <v-flex>
            <v-menu>
              <v-text-field
                slot="activator"
                label="Fecha de alta"
                v-model="dateJoined"
                prepend-icon="event"
                readonly>
              </v-text-field>
              <v-date-picker
                v-model="dateJoined">
                <template slot-scope="{ guardar, cancelar }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="guardarFechaAlta">Guardar</v-btn>
                    <v-btn flat color="primary" @click="cancelarFechaAlta">Cancelar</v-btn>
                  </v-card-actions>
                </template>
              </v-date-picker>
            </v-menu>
            <v-menu>
              <v-text-field
                slot="activator"
                label="Hora de alta"
                v-model="hourJoined"
                prepend-icon="access_time"
                readonly>
              </v-text-field>
              <v-time-picker
                v-model="hourJoined">
                <template slot-scope="{ guardar, cancelar }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="guardarFechaAlta">Guardar</v-btn>
                    <v-btn flat color="primary" @click="cancelarFechaAlta">Cancelar</v-btn>
                  </v-card-actions>
                </template>
              </v-time-picker>
            </v-menu>
          </v-flex>
          <v-flex>
            <v-menu>
              <v-text-field
                slot="activator"
                label="Fecha útlimo ingreso"
                v-model="lastLogin"
                prepend-icon="event"
                readonly>
              </v-text-field>
              <v-date-picker
                v-model="lastLogin"
                readonly>
                <template slot-scope="{ guardar, cancelar }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="guardarFechaAlta">Guardar</v-btn>
                    <v-btn flat color="primary" @click="cancelarFechaAlta">Cancelar</v-btn>
                  </v-card-actions>
                </template>
              </v-date-picker>
            </v-menu>
            <v-menu>
              <v-text-field
                slot="activator"
                label="Hora de útlimo ingreso"
                v-model="hourLastLogin"
                prepend-icon="access_time"
                readonly>
              </v-text-field>
              <v-time-picker
                v-model="hourLastLogin"
                readonly>
                <template slot-scope="{ guardar, cancelar }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="guardarFechaAlta">Guardar</v-btn>
                    <v-btn flat color="primary" @click="cancelarFechaAlta">Cancelar</v-btn>
                  </v-card-actions>
                </template>
              </v-time-picker>
            </v-menu>
          </v-flex>
          <v-btn @click="submit" :disabled="!valid">Guardar</v-btn>
          <v-btn @click="clear">Cancel</v-btn>
        </v-form>
      </v-card>
    </v-flex>
   </v-layout>
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
      staff: true,
      dateJoined: null,
      hourJoined: null,
      lastLogin: null,
      hourLastLogin: null
    }),
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

