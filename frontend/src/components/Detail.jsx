import React from 'react';
import Header from './Header';
import TemplateBg from './TemplateBg';
import { useLocation } from 'react-router-dom';


const Detail = () => {
    let location = useLocation();
    return (
        <>
            <Header />
            <TemplateBg component={
                <div className='h-screen text-center'>
                    <div>
                        <img className="w-24 h-24 ml-60 mb-3 mt-44 rounded-full shadow-lg" 
                        src={location.state['urlImage'].urlImage} alt="Jon Snow" />
                    </div>
                    <div>
                        <span className='text-white'>{location.state['dscPerson'].dsc}</span>
                    </div>
                </div>
            } />
        </>
    )
}

export default Detail;