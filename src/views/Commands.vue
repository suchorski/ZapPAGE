<template>
  <v-container>
    <v-row>
      <v-col class="mb-4 text-center">
        <h1 class="display-2 font-weight-bold mb-3">
          Lista de comandos do BOT
        </h1>
        <p class="subheading font-weight-regular">
          Lista de comandos disponíveis no BOT com as orientações de uso.
        </p>
      </v-col>
      <v-col cols="12">
        <v-row v-if="commands.length === 0">
          <v-col v-for="index in 4" :key="index" cols="12">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12" v-for="command in commands" :key="command.command">
            <command :command="command" :preffix="preffix"></command>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Command from "@/components/Command";

export default {
  components: { Command },
  mounted() {
    fetch(`${process.env.VUE_APP_URL_API}/commands`)
      .then((response) => response.json())
      .then((data) => {
        this.preffix = data.preffix;
        this.commands = data.commands.sort((a, b) =>
          a.command.localeCompare(b.command)
        );
      });
  },
  data() {
    return {
      preffix: "",
      commands: [],
    };
  },
};
</script>
