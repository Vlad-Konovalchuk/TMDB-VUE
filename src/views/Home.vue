<template>
  <div>
    <app-toolbar></app-toolbar>
    <app-footer></app-footer>
  </div>
</template>


<script>
import AppFooter from './AppFooter.vue';
import AppToolbar from './AppToolbar.vue';
import FilmsList from './FilmsList.vue';
import getFilms from '../getting.js';
export default {
  components: {
    AppFooter,
    AppToolbar,
    FilmsList
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
