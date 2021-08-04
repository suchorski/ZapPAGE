<template>
  <v-card>
    <v-card-title
      >{{ preffix }}{{ command.command }} {{ command.args }}</v-card-title
    >
    <v-card-subtitle
      >Comandos alternativos:
      <span class="font-weight-bold">{{
        command.aliases.join(", ")
      }}</span></v-card-subtitle
    >
    <v-card-text>{{ command.help }}</v-card-text>
    <v-divider class="mx-4" v-if="hasSubcommands"></v-divider>
    <v-card-title v-if="hasSubcommands">Subcomandos</v-card-title>
    <v-card-actions v-if="hasSubcommands">
      <v-btn
        v-for="sc in command.subCommands"
        :key="sc.command"
        text
        @click="reveal(sc)"
        >{{ sc.command }}</v-btn
      >
    </v-card-actions>
    <v-expand-transition>
      <div v-if="show">
        <v-divider></v-divider>
        <command
          :command="sc"
          :preffix="`${preffix}${command.command} `"
        ></command>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "command",
  props: ["command", "preffix"],
  data() {
    return {
      show: false,
      sc: {},
    };
  },
  methods: {
    reveal(sc) {
      if (this.sc.command === sc.command) {
        this.show = !this.show;
      } else {
        this.show = true;
      }
      this.sc = sc;
    },
  },
  computed: {
    hasSubcommands() {
      return (
        this.command.command !== "ajuda" &&
        this.command.subCommands &&
        this.command.subCommands.length
      );
    },
  },
};
</script>