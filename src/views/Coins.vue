<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Pegue aqui suas moedas!</h1>
        <p class="subheading font-weight-regular">
          Moedas para serem gastas na loja de itens do BOT
        </p>
      </v-col>
      <v-col v-if="isLogged" class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Como adquirir?</h2>
        <v-row justify="center" class="mb-6"
          >Basta responder o captcha abaixo.</v-row
        >
        <v-row justify="center" class="mb-6">
          <vue-hcaptcha :sitekey="hcaptchaKey" @verify="getCoins"></vue-hcaptcha
        ></v-row>
        <v-row v-if="coins" justify="center">
          <p v-if="coins.status">Você ganhou {{ coins.coins }} moedas.</p>
          <p v-else>{{ coins.message }}</p>
        </v-row>
      </v-col>
      <v-col v-else class="mb-5" cols="12"
        >Você precisa estar logado para pegar moedas.</v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import VueHcaptcha from "@hcaptcha/vue-hcaptcha";

export default {
  components: { VueHcaptcha },
  data() {
    return {
      coins: {},
    };
  },
  computed: {
    ...mapGetters(["isLogged", "getToken"]),
    hcaptchaKey() {
      return process.env.VUE_APP_HCAPTCHA_KEY;
    },
  },
  methods: {
    getCoins(token) {
      fetch(`${process.env.VUE_APP_URL_API}/coins/${this.getToken}/${token}`, {
        rejectUnauthorized: false,
      })
        .then((response) => response.json())
        .then((data) => {
          this.coins = data;
        });
    },
  },
};
</script>
