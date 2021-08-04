<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/zapbot.png')" class="my-3" contain height="200" />
        <h1 class="text-h1 font-weight-bold mb-3">ZapBOT</h1>
        <p>Um poderoso BOT de Discord</p>
      </v-col>
    </v-row>
    <v-row class="text-justify">
      <v-col class="mb-5 box" cols="12" lg="9">
        <h2 class="headline font-weight-bold mb-3">É de graça?</h2>
        <p>Sim. Totalmente de graça. Você pode adicionar o BOT gratuitamente na sua guilda clicando <a target="_blank" :href="urlBotAdd">aqui</a>.</p>
        <p>Existe um sistema de moedas que são pegar a cada hora e que são utilizadas para serem gastas na loja ou doadas para guildas para que elas se tornem premium.</p>
      </v-col>
      <v-col class="mb-5" cols="12" lg="9" offset-lg="3">
        <h2 class="headline font-weight-bold mb-3">Sua sua guilda para um novo patamar!</h2>
        <p>As guildas podem ter mais recursos ao invés de serem usadas apenas para conversa. Membros necessitam de entreterimento e moderação, ou até mesmo, diversão. Agilize a moderação, tenha estatísticas e divirta-se na sua guilda com as diversas funções existentes.</p>
      </v-col>
      <v-col cols="12">
        <v-alert border="left" color="blue" class="text-h4 text-center white--text">Deixe a sua guilda como nunca antes vista!</v-alert>
      </v-col>
      <v-col class="mb-5" cols="12" lg="9">
        <h2 class="headline font-weight-bold mb-3">Moderação</h2>
        <p>
          Defina cargos automáticos ou por reação para que os membros coloquem seus cargos automaticamente. Defina cargos por nível ao atingir um nível específico de pontos o membro ganhará o cargo automaticamente. Tenha anúncios de entrada personalizados e com mais opções que o anúncio padrão do Discord. Coloque o apelido que você quiser no BOT dentro da sua guilda. Defina sorteios para serem
          executados automaticamente no tempo definido. Tenha canais de texto onde somente a última mensagem enviada é mantida no mesmo. Tenha respostas gravadas para que sejam enviadas mais rapidamente nos canais. Defina um canal de texto para que seja anunciado todos os dias os aniversariantes da guilda.
        </p>
      </v-col>
      <v-col class="mb-5" cols="12" lg="9" offset-lg="3">
        <h2 class="headline font-weight-bold mb-3">Estatísticas</h2>
        <p>Tenha estatísticas das entradas e saídas e das mensagens e minutos dos canais da guilda com gráficos em tempo real. Gráficos bem desenhados para que você saiba quais canais são mais utilizados, gráficos para saber se tem muita gente entrando e saindo da sua guilda.</p>
      </v-col>
      <v-col class="mb-5" cols="12" lg="9">
        <h2 class="headline font-weight-bold mb-3">Diversão</h2>
        <p>
          Tenha seu aniversário anunciado nas guildas. Tenha suas mensagens reagidas pelo BOT. Sistema pontuação dentro da guilda para que os mais ativos sejam destacados. Envie mensagens destacadas na guilda. Configure seu perfil para que ele seja único. Jogue dados e moedas nos canais para ver sua sorte. Sistema de rifas e raspadinhas para ganhar muitas moedas. Recomende usuários e seja o mais
          ativo para ser o mais recomendado.
        </p>
      </v-col>
      <v-col class="mb-5" cols="12" lg="9" offset-lg="3">
        <h2 class="headline font-weight-bold mb-3">Influência digital</h2>
        <p>Para você que é um influenciador digital, tenha seus vídeos anunciados toda vez que um vídeo novo é liberado no seu canal do YouTube.</p>
      </v-col>
      <v-col cols="12">
        <v-alert border="left" color="blue" class="text-h4 text-center white--text">Adicione o BOT a sua guilda agora mesmo para ter o melhor!</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    urlBotAdd() {
      return process.env.VUE_APP_URL_BOT_ADD;
    },
  },
};
</script>