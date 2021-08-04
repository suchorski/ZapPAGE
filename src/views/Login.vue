<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Realizando login no Discord...
        </h1>
        <p class="subheading font-weight-regular">
          {{ loginAndGetMessage }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    loginAndGetMessage() {
      const regex = /access_token=([a-z0-9]+)/i;
      const match = window.location.hash.match(regex);
      if (match) {
        this.$store.dispatch("login", match[1]);
        return "Login realizado com sucesso!";
      } else {
        return "Erro ao realizar o login.";
      }
    },
  },
};
</script>
