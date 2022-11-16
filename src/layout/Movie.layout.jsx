import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MovieLayoutHoc =
    (Component) =>
        ({ ...props }) => {
            return (
                <div>
                    <MovieNavbar />
                    <Component {...props} />
                    <div>Footer</div>
                </div>
            );
        };

export default MovieLayoutHoc;


// import React from 'react'

// const MovieLayoutHOC = () => {
//     return <div>MovieLayoutHOC</div>

// }

// export default MovieLayoutHOC;
