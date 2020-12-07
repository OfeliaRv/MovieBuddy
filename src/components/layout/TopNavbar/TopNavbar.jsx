import React, { useEffect, useState } from 'react';
import '../../../assets/styles/css/style.css';
import { Link } from "react-router-dom";
import Genre from '../../Genre';

const API_key = "your api key";
const genres_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_key + "&language=en-US";

function TopNavbar() {

    const [genres, setGenres] = useState([]);
    useEffect(() => {
        fetch(genres_API)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setGenres(data.genres);
            });
    }, []);

    return (
        <nav id="top-navbar">
        <Link to="/">
            <div id="top-logo">
                <h3>Movie</h3>
                <h3>Buddy</h3>
            </div>
            </Link>
            <div id="top-navbar-list-container">
                <ul id="top-navbar-list">
                    <li className="list-item">
                        <Link to="featured"><a href="">Featured</a></Link>
                    </li>
                    <li className="list-item">
                        <Link to="new_movies"><a href="">New Movies</a></Link>
                    </li>
                    <li className="list-item">
                        <Link to="coming_soon"><a href="">Coming Soon</a></Link>
                    </li>
                    <li className="list-item hoverable">
                        <a href="">Top 100<i className="material-icons">keyboard_arrow_down</i></a>
                        <div className="select-nav" style={{ display: "none" }}>
                            <ul className="select-nav-list">
                                <li className="select-nav-list-item"><a id="this_month">This month</a></li>
                                <li className="select-nav-list-item"><a id="this_year">This year</a></li>
                                <li className="select-nav-list-item"><a id="of_all_time">Of all time</a></li>
                                <li className="select-nav-list-item"><a id="by_genres">By genres <i className="material-icons" style={{ transform: "rotate(-90deg)" }}>keyboard_arrow_down</i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="list-item hoverable">
                        <a href="">Genres<i className="material-icons">keyboard_arrow_down</i></a>
                        <div className="select-nav" style={{ display: "none" }}>
                            <ul className="select-nav-list">
                                {genres.length > 0 && genres.map((genre) => <Genre key={genre.id} data={genre} />)}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default TopNavbar;