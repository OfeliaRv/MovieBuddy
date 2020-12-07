import React, { useEffect, useState } from 'react';
import TopNavbar from '../components/layout/TopNavbar/TopNavbar';
import Movie from '../components/Movie/Movie';

const API_key = "your api key";
const featured_API = "https://api.themoviedb.org/3/movie/popular?api_key=" + API_key + "&language=en-US&page=1";
const search_API = "https://api.themoviedb.org/3/search/movie?api_key=" + API_key + "&language=en-US&query=";

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const useApi = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    }

    useEffect(() => {
        useApi(featured_API);
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        useApi(search_API + searchTerm);
        setSearchTerm('');
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="index">
            <TopNavbar />
            <div className="container">
                <form onSubmit={handleOnSubmit} id="searchbox-container">
                    <div id="searchbox">
                        <input type="text" placeholder="Search" value={searchTerm} onChange={handleOnChange} />
                    </div>
                    <div id="searchbutton">
                        <button type="submit" id="search"><i className="material-icons">search</i></button>
                    </div>
                </form>
                <div className="movies">
                    {movies.length > 0 ? movies.map((movie) => <Movie key={movie.id} data={movie} />) : <h1>I found nothing :(</h1>}
                </div>
            </div>
        </div>
    );
}

export default Home;