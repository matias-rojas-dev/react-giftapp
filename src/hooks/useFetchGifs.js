import { useEffect, useState } from "react";
import { getGifs } from '../utils/getGifs';

export const useFetchGifs = (category) => {


    const [state, setState] = useState({
        data: [],
        loading: true,
    });


    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false,
                })
            })
    }, [category]);

    // el [] es para poder usar el componente cuando sea renderizao por primera vez
    // hace semejanza con el componentDidMount


    return state;
}