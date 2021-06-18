import React from 'react';
import Category from '../Category/Category';

import Computer from './../../img/category-computer.jpg';
import Beauty from './../../img/category-beauty.jpg';
import Fit from './../../img/category-fit.jpg';
import TV from './../../img/category-tv.jpg';
import Bed from './../../img/category-bed.jpg';
import Shop from './../../img/category-shop.jpg';
import Music from './../../img/category-music.jpg';
import Basics from './../../img/category-amazone-basics.jpg';

import './Categories.css';
import { ListItemAvatar } from '@material-ui/core';

function Categories() {
    let catalog = [{
        title: "Computers & Accessories",
        photo: Computer,
        link: "electronics"
    }, {
        title: "Get fit at home",
        photo: Fit,
        link: ""
    }, {
        title: "Beauty picks",
        photo: Beauty,
        link: "jewelery"
    }, {
        title: "Create with strip lights",
        photo: Music,
        link: ""
    }, {
        title: "Find your ideal TV",
        photo: TV
    }, {
        title: "Amazon Basics",
        photo: Basics,
        link: ""
    }, {
        title: "Explore home bedding",
        photo: Bed,
        link: ""
    }, {
        title: "Shop top categories",
        photo: Shop,
        link: "clothing"
    }];
    return (
        <div className="categories">
            {
                catalog.map((data, index) => <Category
                    key={index}
                    title={data.title}
                    photo={data.photo}
                    link={"/products" + "/" + data.link}
                />)
            }
        </div>
    )
}

export default Categories
