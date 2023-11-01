import React from "react";
import axios from 'axios';  

// const url = process.env.REACT_APP_API_PERSON;

const config = {
  headers: {
    'Content-Type': 'application/json',
  }
};

const dataCharacters = () => {
    return axios.get("http://localhost:3000/api/v1/characters", config)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Ocorreu um erro ao fazer a solicitação:', error);
        });

}

export default dataCharacters;