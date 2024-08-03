import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import About from './about';
import WeatherProject from './weather/weather-project';
import MovieList from './movie/movie-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import Unfinished from './unfinished-project';



function App() {
    return (
      <div className="app">
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<WeatherProject />} />
                <Route path="/movie" element={<MovieList />} />
                <Route path="/unfinished" element={<Unfinished />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
