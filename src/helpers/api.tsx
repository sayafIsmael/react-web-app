import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/recent-experiences").reply(200, [
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
]);

mock.onGet("/categories").reply(200, [
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
]);

mock.onGet("/popular-experiences").reply(200, [
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
]);


const getRecentExperiences = () => {
    return axios.get("/recent-experiences").then(function (response: any) {
        return response.data;
    });
}


const getCategories = () => {
    return axios.get("/categories").then(function (response: any) {
        return response.data;
    });
}

const getPopularExperiences = () => {
    return axios.get("/popular-experiences").then(function (response: any) {
        return response.data;
    });
}

export { getRecentExperiences, getCategories, getPopularExperiences }