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
            className="w-11/12 h-5/6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.photo} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <button onClick={() => openDetail(props.photo, props.dsc)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;