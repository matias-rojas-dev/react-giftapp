import React from 'react'

const GifGridItem = ({title,url}) => {
    const blank = '_blank';
    return (
        <div className='card animate__animated animate__fadeIn'>
            <p>{title}</p>
            <a href={url}  target={blank} >
                <img src={url} alt={title} />
            </a>
            
        </div>
    )
}

export default GifGridItem;