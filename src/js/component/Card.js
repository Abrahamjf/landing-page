import React from "react";
import image2 from "../../img/image2.jpg";
import PropTypes from "prop-types";


const orders = [1,2,3,4];

export const Cards = ({...props}) => {
    return (
        <div className= "card-group">
            {orders.map((order,index) => {
                return( <div key={index} className="card m-4">
                            <img className="card-img-top" src={props.imgUrl= "https://picsum.photos/200/300?random"} alt="Imagen" /> 
                            <div className="card-body">
                                <h5 className="card-tittle">{props.tittle ="Card Title"}</h5>
                                <p className="card-text">{props.description ="Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>)
            })}
        </div>);
};

Cards.propTypes = {
    imgUrl: PropTypes.any,
    description: PropTypes.string,
    tittle: PropTypes.string,
};
