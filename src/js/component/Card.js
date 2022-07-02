import React from "react";
import image2 from "../../img/image2.jpg";


export const Cards = () => {
    return (
        <div className="card m-4" style={{width: "18rem"}}>
            <img src={image2} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};
