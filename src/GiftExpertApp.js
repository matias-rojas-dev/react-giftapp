import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);


    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr></hr>
            <ol>
            {
                categories.map(item => (
                    <GifGrid key={item} category={item} />
                ))
            }
            </ol>

        </div>  
    )
}

export default GiftExpertApp;