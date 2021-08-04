<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="3" offset-lg="1">
        <v-img :src="require('../assets/zapbot.png')" class="my-3" contain height="200" />
      </v-col>
      <v-col cols="12" lg="7">
        <h1 class="font-weight-bold mb-3 text-center">Ajuda e Suporte</h1>
        <p class="text-justify">Precisa de ajuda com o BOT? Gostaria de saber as novidades? O BOT está instável? Gostaria apenas de bater um papo?</p>
        <p>Entre na minha guilda de suporte. Lá temos todo tipo de pessoal especializado e atencioso para dar apoio aos problemas que tiver ocorrendo com o BOT. Tire suas dúvidas, veja as novidades ou então venha só para tomar um café e bater um papo com o pessoal!</p>
        <p>Aguardo você lá!</p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <h2>Guilda de Suporte</h2>
      </v-col>
      <v-col cols="12" lg="6" offset-lg="3">
        <iframe :src="urlGuildInvite" width="100%" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    urlGuildInvite() {
      return `https://discord.com/widget?id=${process.env.VUE_APP_GUILD_ID}&theme=dark`;
    },
  },
};
</script>