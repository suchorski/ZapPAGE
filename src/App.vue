<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn class="text-h4" text to="/">ZapBOT</v-btn>
      </div>
      <v-btn class="hidden-sm-and-down" text target="_blank" :href="urlBotAdd">Adicionar</v-btn>
      <v-btn class="hidden-sm-and-down" text to="/suporte">Suporte</v-btn>
      <v-btn class="hidden-sm-and-down" text to="/comandos">Comandos</v-btn>
      <v-btn class="hidden-sm-and-down" text to="/blog">Blog</v-btn>
      <v-btn v-if="isLogged" class="hidden-sm-and-down" text to="/moedas">Pegar moedas</v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="!isLogged" class="hidden-sm-and-down" :href="urlPageLogin" text>
        <span class="mr-2">Entrar</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn v-else class="hidden-sm-and-down" text @click="logout">
        <span class="mr-2">Sair</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="d-md-none" text v-bind="attrs" v-on="on">Acesso</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-btn text target="_blank" :href="urlBotAdd">Adicionar BOT</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text to="/suporte">Suporte</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text to="/comandos">Comandos</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text to="/blog">Blog</v-btn>
          </v-list-item>
          <v-list-item v-if="isLogged">
            <v-btn text to="/moedas">Pegar moedas</v-btn>
          </v-list-item>
          <v-list-item v-if="!isLogged">
            <v-btn :href="urlPageLogin" text>
              <span class="mr-2">Entrar</span>
              <v-icon>mdi-login</v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item v-else>
            <v-btn text @click="logout">
              <span class="mr-2">Sair</span>
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLogged']),
    urlBotAdd() {
      return process.env.VUE_APP_URL_BOT_ADD;
    },
    urlPageLogin() {
      return process.env.VUE_APP_URL_PAGE_LOGIN;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
