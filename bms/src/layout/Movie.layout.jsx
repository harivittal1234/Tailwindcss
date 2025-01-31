import React, { Component } from 'react'
import MovieNavbar from '../Components/Navbar/MovieNavbar.Component'

const MovieLayoutHoc =
(Component) =>
({...props}) => {
    return (
        <div>
            <MovieNavbar />
            <Component {...props} />
            <div>Footer</div>
        </div>
    )
}

export default MovieLayoutHoc