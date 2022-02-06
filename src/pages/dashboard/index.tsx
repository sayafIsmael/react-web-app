import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarMain from "./../../components/NavbarMain"
import SearchbarAndFilter from "./../../components/SearchbarAndFilter"
import Experience from "./../../components/Experience"
import Category from "./../../components/Category"
import { getRecentExperiences, getCategories, getPopularExperiences } from "./../../helpers/api"

interface Experience {
        image: string;
        title: string;
        descriptiom?: string;
        users?: string;}

interface Category {
        image: string;
        title: string;
        background?: string;
}

export default () => {
    const history = useNavigate();
    const [recentExperiences, setRecentExperiences] = useState([])
    const [categories, setCategories] = useState([])
    const [popularExperiences, setPopularExperiences] = useState([])

    useEffect(() => {
        syncData()
    }, [])

    async function syncData() {
        const recentExp = await getRecentExperiences()
        const categories = await getCategories()
        const popularExp = await getPopularExperiences()

        setRecentExperiences(recentExp)
        setCategories(categories)
        setPopularExperiences(popularExp)
    }

    return (
        <>
            <NavbarMain />
            <div>
                <div className="mx-5">
                    <div>
                        <SearchbarAndFilter />
                    </div>

                    <div>
                        <p className="text-xl font-medium text-gray-600">Recent Experiences</p>
                        {recentExperiences.map((item: Experience, i) => <Experience key={i} image={item.image} title={item.title} users={item.users} descriptiom={item.descriptiom} />)}
                    </div>

                    <div>
                        <div className="flex items-center justify-between mt-5">
                            <p className="text-xl font-medium text-gray-600">Popular Categories</p>
                            <p className="text-primary font-medium text-md cursor-pointer text-right relative left-2"> See All<span className="ml-3"><i className="fas fa-chevron-right"></i></span></p>
                        </div>
                        <div className="my-5 grid grid-cols-2 gap-4">
                            {categories.map((item: Category, i) => <Category key={i} image={item.image} title={item.title} background={item.background} />)}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mt-5">
                            <p className="text-xl font-medium text-gray-600">Popular Experiences</p>
                            <p className="text-primary font-medium text-md cursor-pointer text-right relative left-2"> See All<span className="ml-3"><i className="fas fa-chevron-right"></i></span></p>
                        </div>
                        {popularExperiences.map((item: Experience, i) => <Experience key={i} image={item.image} title={item.title} users={item.users} descriptiom={item.descriptiom} />)}
                    </div>

                </div>
            </div>
        </>
    )
};