import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
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

const experiences = [
    {
        "id": 1,
        "image": "images/exchange-icon.svg",
        "title": "Exchanges"
    },
    {
        "id": 2,
        "image": "images/games-icon.svg",
        "title": "Games",
    },
    {
        "id": 3,
        "image": "images/marketplace-icon.svg",
        "title": "Marketplaces"
    },
    {
        "id": 4,
        "image": "images/defi-icon.svg",
        "title": "Defi"
    },
    {
        "id": 5,
        "image": "images/collectibles-icon.svg",
        "title": "Collectibles"
    },
    {
        "id": 6,
        "image": "images/utilities-icon.svg",
        "title": "Utilities"
    }

]


export default () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [allitems, setAllitems] = useState(false);
    const [selected, setSelected] = useState([]);

    function selectAll(e) {
        if (e.target.checked) {
            setAllitems(true)
            let items = []
            experiences.map(item => items.push(item.id))
            setSelected(items)
        } else {
            setAllitems(false)
            setSelected([])
        }
    }

    function selectfilter(e, item) {
        setAllitems(false)
        console.log("selected: ", selected)
        console.log("e.target: ", e.target.checked)
        if (e.target.checked) {
            let items = [...selected]
            items.push(item.id)
            setSelected(items)
        } else {
            let items = [...selected]
            items = items.filter(filter => filter != item.id);
            setSelected(items)
        }
    }

    return (
        <>
            <div className="my-3">
                <div className="flex items-center">
                    <div className="relative mb-3 w-5/6 flex flex-wrap items-stretch h-10">
                        <span className="absolute z-10 py-3 pl-3 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                            <i className="fas fa-search"></i>
                        </span>
                        <input type="text" className="relative py-1 px-2 pl-10 w-full bg-gray-primary rounded shadow outline-none text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                            placeholder="Search experiences" />
                    </div>
                    <img className="px-5 mb-3 cursor-pointer" src="images/filter-icon.svg" onClick={() => setIsOpen(!modalIsOpen)} />
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel=""
                className="mx-auto bg-white mt-16 rounded-lg"
            >
                <div className="p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div class="flex-none w-14">
                                <p className="mb-2 font-medium text-xl">Filter</p>
                            </div>
                            <div class="shrink font-medium text-center">
                                <p className="bg-primary text-white w-6 h-6 rounded-full text-center" >{selected.length}</p>
                            </div>
                        </div>
                        <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
                            <i class="fas fa-times text-gray-500"></i>
                        </div>
                    </div>
                    <label className="flex my-4 items-center cursor-pointer" htmlFor="allexp">
                        <div class="flex-none w-9">
                            <input className="bg-primary rounded" type="checkbox" id="allexp" name="allexp" value="" checked={allitems}
                                onChange={(e) => selectAll(e)} />
                        </div>
                        <div class="shrink w-64 font-medium text-">
                            <p className="cursor-pointer" htmlFor="allexp"> All Experiences </p>
                        </div>
                    </label>

                    {experiences.map((item, i) => <label key={i} className="flex my-4 items-center cursor-pointer" htmlFor={`allexp${item.id}`}>
                        {/* <label className="cursor-pointer" htmlFor={`allexp${item.id}`}> */}
                            <div class="flex-none w-9">
                                <input className="bg-primary rounded" type="checkbox" id={`allexp${item.id}`} name={`allexp${item.id}`} value={item.id}
                                    checked={allitems || selected.includes(item.id)}
                                    onChange={e => selectfilter(e, item)}
                                />
                            </div>
                            <div class="flex-none w-14">
                                <img src={item.image} />
                            </div>
                            <div class="shrink w-64 font-medium text-">
                                <p className="cursor-pointer">{item.title}</p>
                            </div>
                        {/* </label> */}
                    </label>)}
                </div>
            </Modal>
        </>
    )
};