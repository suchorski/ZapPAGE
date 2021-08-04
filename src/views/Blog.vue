<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="12" lg="4">
        <v-card>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-subtitle>{{ post.date | moment('DD/MM/YYYY à\\s HH:mm') }}</v-card-subtitle>
          <v-card-text>{{ post.description }}</v-card-text>
          <v-card-actions>
            <v-btn text :to="`/postagem/${post.id}`">Ler postagem</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import entries from '@/blog/entries.json';

export default {
  data() {
    return {
      posts: entries
        .map((p) => ({
          id: p.id,
          date: new Date(p.date),
          title: p.title,
          description: p.description,
        }))
        .sort((l, r) => r.date.getTime() - l.date.getTime()),
    };
  },
};
</script>
