import React, { useEffect, useState } from "react";
import Header from "./Header";
import TemplateBg from "./TemplateBg";
import Card from "./Card";
import dataCharacters from "../services/PersonService";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const localData = localStorage.getItem('charactersData') ? JSON.parse(localStorage.getItem('charactersData')) : null;
            if (localData) {
              setData(localData);
            } else {
              const result = await dataCharacters(); // Aguarda o resultado da promessa
              setData(result); // Define os dados no estado
              localStorage.setItem('charactersData', JSON.stringify(result)); // Armazena os dados no localStorage
            }
          } catch (error) {
            console.error('Ocorreu um erro ao fazer a solicitação:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <>
            <Header />
            <TemplateBg
                component={
                    <div className="ml-4 mr-2 mt-20">
                        <div className="grid grid-cols-4 gap-4 mt-">
                            {data.map((person) => (
                                <div key={person.id}>
                                    <Card photo={person.img} name={person.characterName} dsc={person.roleDescription} />
                                </div>
                            ))}
                        </div>
                    </div>
                }
            />
        </>
    )
}

export default Home;