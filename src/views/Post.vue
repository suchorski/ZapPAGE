<template>
  <v-container>
    <v-row>
      <v-col class="mb-4 post" cols="12">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.post {
  font-family: Helvetica, Arial, Freesans, clean, sans-serif;
}

.post >>> h1,
.post >>> h2,
.post >>> h3,
.post >>> h4,
.post >>> h5,
.post >>> h6 {
  font-weight: bold;
}

.post >>> h1 {
  color: #000000;
  font-size: 28px;
}

.post >>> h2 {
  border-bottom: 1px solid #cccccc;
  color: #000000;
  font-size: 24px;
}

.post >>> h3 {
  font-size: 18px;
}

.post >>> h4 {
  font-size: 16px;
}

.post >>> h5 {
  font-size: 14px;
}

.post >>> h6 {
  color: #777777;
  background-color: inherit;
  font-size: 14px;
}

.post >>> hr {
  height: 0.2em;
  border: 0;
  color: #cccccc;
  background-color: #cccccc;
}

.post >>> img {
  max-width: 100%;
  margin: 0 auto;
}

.post >>> a,
.post >>> a:visited {
  color: #4183c4;
  background-color: inherit;
  text-decoration: none;
}

.post >>> a:hover {
  color: #3284d6;
}

.post >>> table {
  border-collapse: collapse;
  width: 100%;
}

.post >>> table,
.post >>> th,
.post >>> td {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 5px;
}

.post >>> tr:nth-child(even) {
  background-color: #f8f8f8;
}

.post >>> p,
.post >>> blockquote,
.post >>> ul,
.post >>> ol,
.post >>> dl,
.post >>> li,
.post >>> table,
.post >>> pre {
  margin: 15px 0;
}

.post >>> code,
.post >>> pre {
  border-radius: 3px;
  background-color: #f8f8f8;
  color: inherit;
}

.post >>> code {
  border: 1px solid #eaeaea;
  margin: 0 2px;
  padding: 0 5px;
}

.post >>> pre {
  border: 1px solid #cccccc;
  line-height: 1.25em;
  overflow: auto;
  padding: 6px 10px;
}

.post >>> pre > code {
  border: 0;
  margin: 0;
  padding: 0;
}
</style>