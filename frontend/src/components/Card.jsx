import React from 'react';
import {  useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate();

    const openDetail = (urlImage, dsc) => {
        navigate("/detail-characters", { state: { urlImage: {urlImage}, dscPerson: {dsc} } } );
    }

    return (
        <>
            <div key={props.key} 
            className="w-11/12 h-5/6 max-h-full shadow-2xl max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.photo} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                </div>
            </div>
            
        </>
    )
};

export default Card;