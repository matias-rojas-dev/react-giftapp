import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{category.toUpperCase()}</h3>
        <p className='animate__animated animate__flash'>{loading && 'Loading'}</p>
        <div className='card-grid animate__animated animate__delay-2s'>
            {
                images.map(img => (
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

