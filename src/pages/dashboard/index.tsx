import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import NavbarMain from "./../../components/NavbarMain"
import SearchbarAndFilter from "./../../components/SearchbarAndFilter"
import Experience from "./../../components/Experience"
import Category from "./../../components/Category"

const recentExperiences = [
    {
        "image": "images/placeholder-1.svg",
        "title": "Defi Swap",
        "descriptiom": "Swap your digital assets",
        "users": "+200"
    },
    {
        "image": "images/placeholder-2.svg",
        "title": "Docu sign",
        "descriptiom": "Sign smart contracts seamlessly",
        "users": "+200"
    }
]

const categories = [
    {
        "image": "images/exchange-icon.svg",
        "title": "Exchanges",
        "background": "#EAEFFF"
    },
    {
        "image": "images/games-icon.svg",
        "title": "Games",
        "background": "#F5F5F5"
    },
    {
        "image": "images/marketplace-icon.svg",
        "title": "Marketplaces",
        "background": "#E2F9F3"
    },
    {
        "image": "images/defi-icon.svg",
        "title": "Defi",
        "background": "#FFF3EC"
    },
    {
        "image": "images/collectibles-icon.svg",
        "title": "Collectibles",
        "background": "#EAEFFF"
    },
    {
        "image": "images/utilities-icon.svg",
        "title": "Utilities",
        "background": "#F0EBFF"
    }
]

const popularExperiences = [
    {
        "image": "images/logo-docu-sign-2.svg",
        "title": "Defi Swap",
        "descriptiom": "Sign smart contracts seamlessly",
        "users": "+1k"
    },
    {
        "image": "images/logo-docu-sign-2.svg",
        "title": "Docu sign",
        "descriptiom": "Sign smart contracts seamlessly",
        "users": "+1k"
    },
    {
        "image": "images/logo-docu-sign-2.svg",
        "title": "Docu sign",
        "descriptiom": "Sign smart contracts seamlessly",
        "users": "+1k"
    }
]

export default () => {
    const history = useNavigate();


    return (
        <>
            <NavbarMain />
            <div>
                <div className="mx-5">
                    {/* <ul>
          {isLoading && <div>is loading...</div>}
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul> */}
                    <div>
                        <SearchbarAndFilter />
                    </div>

                    <div>
                        <p className="text-xl font-medium text-gray-600">Recent Experiences</p>
                        {recentExperiences.map((item, i) => <Experience key={i} image={item.image} title={item.title} users={item.users} descriptiom={item.descriptiom} />)}
                    </div>

                    <div>
                        <div className="flex items-center justify-between mt-5">
                            <p className="text-xl font-medium text-gray-600">Popular Categories</p>
                            <p className="text-primary font-medium text-md cursor-pointer text-right relative left-2"> See All<span className="ml-3"><i className="fas fa-chevron-right"></i></span></p>
                        </div>
                        <div className="my-5 grid grid-cols-2 gap-4">
                            {categories.map((item, i) => <Category key={i} image={item.image} title={item.title} background={item.background} />)}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mt-5">
                            <p className="text-xl font-medium text-gray-600">Popular Experiences</p>
                            <p className="text-primary font-medium text-md cursor-pointer text-right relative left-2"> See All<span className="ml-3"><i className="fas fa-chevron-right"></i></span></p>
                        </div>
                        {popularExperiences.map((item, i) => <Experience key={i} image={item.image} title={item.title} users={item.users} descriptiom={item.descriptiom} />)}
                    </div>

                </div>
            </div>
        </>
    )
};