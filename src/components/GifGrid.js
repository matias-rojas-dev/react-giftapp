import React, { useState, useEffect } from 'react'
import { getGifs } from '../utils/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs(category).then(
            imgs => setImages(imgs)
        )
    }, [category] );
    // el [] es para poder usar el componente cuando sea renderizao por primera vez
    // hace semejanza con el componentDidMount

    

    return (
        <>
        <h3>{category.toUpperCase()}</h3>
        <div className='card-grid'>
            {
                images.map( img  => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>
        </>
    )
}

export default GifGrid;