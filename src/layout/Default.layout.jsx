import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";


const DefaultLayoutHoc =
    (Component) =>
        ({ ...props }) => {
            return (
                <div>
                    <Navbar />
                    <Component {...props} />
                    <div>Footer</div>
                </div>
            );
        };

export default DefaultLayoutHoc;



// const DefaultLayoutHoc = () => {
//     return <div>DefaultLayoutHoc </div>


// }

// export default DefaultLayoutHoc;