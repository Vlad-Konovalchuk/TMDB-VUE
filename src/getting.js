import axios from 'axios'

export default async function getFilms (a){
    try{
        await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2ddb0c35446d893960d59afe57fcaeb6&language=en-US&page=1')
            .then(res=>{
                return a=res.data.results;
                console.log(a)
                })
            // .catch(error=>console.log(err))
        }
    catch(e){
        console.log(e);
    }
}