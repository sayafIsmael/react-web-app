import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const customStyles = {
    content: {
        top: '12%',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        width: '80%',
        padding: 0,
        maxWidth: 295,
        outline: 'none'
    },
    overlay: {
        zIndex: 100,
        backgroundColor: 'rgba(70, 70, 70, 0.5)',
    }
};


const accounts = [
    {
        "id": 1,
        "avatar": "images/avatar-2.svg",
        "name": "johndoe.near",
        "amount": 0.34
    },
    {
        "id": 2,
        "avatar": "images/avatar-2.svg",
        "name": "mike.near",
        "amount": 0.12
    },
    {
        "id": 3,
        "avatar": "images/avatar-2.svg",
        "name": "john.near",
        "amount": 2.34
    }

]


export default () => {
    const history = useNavigate();

    const [modalIsOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState({
        "id": 2,
        "avatar": "images/avatar-2.svg",
        "name": "mike.near",
        "amount": 0.12
    });

    return (
        <>
            <div className="bg-white sticky top-0 bg-gray-primary h-16 border-b-2 border-gray flex items-center z-50">
                <i className="fas fa-arrow-left px-5 text-gray-500 cursor-pointer" onClick={() => history(-1)}></i>
                <img className="cursor-pointer" src="images/home-icon.svg" />
                <div className="w-8/12 flex bg-white mx-5 p-1 border-2 rounded-full items-center cursor-pointer" onClick={() => setIsOpen(!modalIsOpen)}>
                    <div className="border-solid border-2 border-black rounded-full" style={{ padding: 2 }}>
                        <img className="rounded-full  w-full h-full" src={selected.avatar} />
                    </div>
                    <p className="w-8/12 mx-2 text-sm">{selected.name}</p>
                    <i className="fas fa-caret-down text-gray-300 pr-3"></i>
                </div>
                <img className="cursor-pointer" src="images/notification-alert.svg" onClick={() => history("/notifications")}/>
                <img className="px-5 cursor-pointer" src="images/settings.svg" />
            </div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
                className="mx-auto bg-white mt-16 rounded-lg"
            >
                <div className="p-5">
                    <p className="text-gray-500 mb-2">My Accounts</p>

                    {accounts.map((item, i) => <div key={i} className="flex my-4 items-center cursor-pointer" onClick={() => {
                        setSelected(item)
                        setIsOpen(false)
                    }}>
                        <div className={`${selected.id === item.id && "border-solid border-2 border-black"} rounded-full`} style={{ padding: 2, height: 43 }}>
                            <img className="rounded-full  w-full h-full" src={item.avatar} />
                        </div>
                        <div className="mx-3 w-4/6">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-gray-600">{item.amount} NEAR</p>
                        </div>
                        {selected.id === item.id && <div>
                            <i className="fas fa-check text-gray-500"></i>
                        </div>}
                    </div>)}
                </div>
                <hr />
                <div className="p-5">
                    <div className="flex items-center cursor-pointer mb-4">
                        <img className="mr-5" src="images/create.svg" />
                        <p>Create Account</p>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <img className="mr-5" src="images/import.svg" />
                        <p>Import Account</p>
                    </div>

                </div>
            </Modal>
        </>
    )
};