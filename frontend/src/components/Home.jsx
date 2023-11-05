import React, { useEffect, useState } from "react";
import Header from "./Header";
import TemplateBg from "./TemplateBg";
import Card from "./Card";
import Modal from "./Modal";
import dataCharacters from "../services/PersonService";

const Home = () => {
    const [data, setData] = useState([]);
    const [character, setCharacter] = useState({});
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const localData = localStorage.getItem('charactersData') ? JSON.parse(localStorage.getItem('charactersData')) : null;
                if (localData) {
                    setData(localData);
                } else {
                    const result = await dataCharacters();
                    setData(result);
                    localStorage.setItem('charactersData', JSON.stringify(result));
                }
            } catch (error) {
                console.error('Ocorreu um erro ao fazer a solicitação:', error);
            }
        };

        fetchData();
    }, []);
    function openModalDetail(person) {
        setOpenModal(true);
        setCharacter(person);
    }

    function closeModalDetail() {
        setOpenModal(false);
    }

    return (
        <>
            <Header />
            <TemplateBg
                component={
                    <div className="ml-4 mr-2">
                        <div className="grid grid-cols-4 gap-4 ">
                            {data.map((person) => (
                                <>
                                    <button key={person.id} onClick={() => openModalDetail(person)} className="h-5/6 mb-20 shadow-sm hover:scale-125 ease-in duration-300 ">
                                        <Card photo={person.img} name={person.characterName} dsc={person.roleDescription} />
                                    </button>
                                </>
                            ))}
                        </div>
                    </div>
                }
            />
            <Modal open={openModal} handleClose={closeModalDetail} person={character} />
        </>
    )
}

export default Home;