<template>
  <div>
    <div class="netflix">
      <img src="./assets/netfl.svg" alt="" class="netflix">
    </div>
    <app-toolbar></app-toolbar>
    <app-footer></app-footer>
    <div v-for="(film,key) in filmList" v-bind:key="film.index">{{film.title}}</div>
  </div>
</template>


<script>
import AppFooter from './views/AppFooter.vue';
import AppToolbar from './views/AppToolbar.vue';
import axios from 'axios'
import getFilms from './getting.js';

export default {
  data(){
    return{
      filmList:[],
      configs:{},
      posters:[],
      baseUrl:'https://api.themoviedb.org/3/',
      key:'2ddb0c35446d893960d59afe57fcaeb6'
    }
  },
  components: {
    AppFooter,
    AppToolbar
  },
methods:{
   getfilms(){
      axios.get(`${this.baseUrl}movie/top_rated?api_key=${this.key}&language=en-US&page=1 `)
         .then(res=>{
            this.filmList=res.data.results;
            })
         .catch(error=>console.log(error))
   },
   async getConfig(){
      try{
     const res= await axios.get(`${this.baseUrl}configuration?api_key=${this.key}`)
      this.configs=res.data.images
      }
      catch(e){
         console.log(e)
         }
   },
   async getPictures(){
      await console.log(this.filmList)
      await this.getConfig();
      // await axios.get(`${this.filmList.backdrop_path.map(item=>this.baseUrl+this.configs.poster_sizes[2]+item)}`)
   }
},

mounted(){
   this.getfilms();
   this.getPictures();
}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lag="scss">
.netflix{
  height: 50px;
}
</style>
