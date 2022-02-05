import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarMain from "./../../components/NavbarMain"



export default () => {
    const history = useNavigate();
    return (
        <>
            <NavbarMain />
            <div>
                <div className="my-4">
                    <p className="text-center text-xl">Notifications</p>
                </div>
                <hr />
                <div className="mx-5">

                    <div class="flex my-4 cursor-pointer">
                        <div class="flex-none w-2/12">
                            <img className="rounded-full  w-10 h-10" src={"images/avatar-2.svg"} />
                        </div>
                        <div class="flex-initial w-8/12">
                            <p><span className="text-primary">Cryptoking.near</span> request to sign the contract</p>
                            <p className="text-gray-400 text-sm">3 days ago</p>
                        </div>
                        <div class="flex-initial w-2/12 pl-1">

                        </div>
                    </div>

                    <div class="flex my-4 cursor-pointer">
                        <div class="flex-none w-2/12">
                            <img className="rounded-full  w-10 h-10" src={"images/avatar-2.svg"} />
                        </div>
                        <div class="flex-initial w-8/12">
                            <p><span className="text-primary">Cryptoking.near</span> made an offer for collectible <span className="text-primary">#72873</span></p>
                            <p className="text-gray-400 text-sm">5 days ago</p>
                        </div>
                        <div class="flex-initial w-2/12 pl-1">

                        </div>
                    </div>

                    <div class="flex my-4 cursor-pointer">
                        <div class="flex-none w-2/12">
                            <img className="rounded-full  w-10 h-10" src={"images/avatar-2.svg"} />
                        </div>
                        <div class="flex-initial w-8/12">
                            <p><span className="text-primary">maxwell.near</span> invited you to <span className="text-primary">docu sign</span></p>
                            <p className="text-gray-400 text-sm">7 days ago</p>
                        </div>
                        <div class="flex-initial w-2/12 pl-2">
                            <img className="rounded-md  w-11 h-11" src={"images/placeholder-2.svg"} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};