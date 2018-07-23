<template>
  <div>
    <div class="netflix">
      <img src="./assets/netfl.svg" alt="" class="netflix">
    </div>
    <app-toolbar></app-toolbar>
    <div class="main-content">
       <div class="catalog">
        <div v-for="film in filmList" :key="film.id" class="card-item">
          <div class="card">
            <h1 class="card__title">{{film.title}}</h1>
            <div class="image"><img :src="imageUrl+film.backdrop_path"/></div>
            <p class="card__subtitle">
              <img src="./assets/calendar.svg" alt="calendar icon" class="icon">
              : {{film.release_date}}</p>
            <p class="card__subtitle">
              <img src="./assets/rating.svg" alt="rating icon" class="icon">
              : {{film.vote_average}}</p>
            <p class="card__overview">{{film.overview}}</p>
            <button type='buttom' class="btn">More...</button>
          </div>
        </div>
      </div>
      <div class="search">
        <h3 class="search__title">Search films</h3>
       <input type="search" 
          class="search__input" 
          placeholder="Enter name of films" 
          tabindex="0" 
          v-model="searchQuery"
          @keyup.enter="search"
        >
      </div>
    </div>
  
    <app-footer></app-footer>
  </div>
</template>


<script>
import AppFooter from './views/AppFooter.vue';
import AppToolbar from './views/AppToolbar.vue';
import axios from 'axios'

export default {
  data(){
    return{
      filmList:[],
      configs:{},
      posters:[],
      baseUrl:'https://api.themoviedb.org/3/',
      key:'2ddb0c35446d893960d59afe57fcaeb6',
      imageUrl: 'https://image.tmdb.org/t/p/w1280',
      searchQuery:''
    }
  },
  components: {
    AppFooter,
    AppToolbar
  },
methods:{
  async getfilms(){
     try{
       const result = await axios.get(`${this.baseUrl}movie/top_rated?api_key=${this.key}&language=en-US&page=1 `);
       this.filmList =  result.data.results;
       const resp= await axios.get(`${this.baseUrl}configuration?api_key=${this.key}`)
       this.configs=  resp.data.images;
      } 
    catch(error){
      console.log(error)
    }
  },
  search(){
    axios.get(`${this.baseUrl}search/movie?api_key=${this.key}&query=${this.searchQuery}`)
      .then(response=>console.log(response.data))
  }
},

mounted(){
     this.getfilms();
   
}
}
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Chela+One|Open+Sans|Roboto');
// resets
a{
  text-decoration: none;
}
ul,li{}
body{
  width: 100%;
  height: 100%;
}
.netflix{
  height: 50px;
}
.main-content{
  display: flex;
}
.image{
  max-width: 100%;
}
.image img{
  max-width: 100%;
  border-radius: 5px;
}
.icon{
  height: 10%;
  width:10%;
  vertical-align: middle
}
.catalog{
  display:flex;
  flex-wrap: wrap;
  margin: 0 1.5rem;
  justify-content: space-around;
  max-width: 80%;
}
.card-item{
  max-width: 37%;
  flex-basis: 37%;
  margin: 0.7rem;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, .3);
  font-family: 'Open Sans', sans-serif;  border-radius:10px;
  padding: 1rem;

}
.search{
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, .3);
  flex-basis: 40%;
  padding-top: 0.8rem;
  background-color: #a2f1cd;
  &__title{
    font-size: 1.5rem;
    margin: 1rem;
    padding: 0;
  }
  &__input{
    border: 1px solid transparent;
    box-shadow: 0 0 5px 0px #000;
    margin: 1rem;
    padding: 0.5rem;
    border-radius: 10px;
    outline: none;
    transition: box-shadow 0.5s;
    &:hover,
    &:focus{
      box-shadow: 0px 0px 20px 8px #223c6ca1;
    }
  }
}
.card{
 &__overview{
   font-size: 1.2rem;
   &::before{
     content:'';
     display: block;
     height: 2px;
     width:100%;
     box-shadow:-1px 0px 9px 1px #212121;
     background-color: #000;
   }
 }
 &__title{
  font-family: 'Roboto', sans-serif;
  text-align: center;
 }
 &__subtitle{
  //  font-size: 1.2rem;
   font-weight: bold;
 }
 .btn{
   background-color: rgba(255, 255, 255, 0.816);
    &::after{
    content: '';
    display: block;
    height: 2px;
    width: 0;
    background-color: rgb(50, 123, 74);
    transition: width 0.5s;
    }
    &:hover::after{
      width:100%;
    }

 }

}
</style>
