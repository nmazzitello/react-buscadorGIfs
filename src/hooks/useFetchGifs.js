import {getGifs} from '../Helpers/getGifs'
import { useEffect, useState } from 'react';

export const useFetchGifs = (categoria) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    })

    useEffect( () =>{
        getGifs( categoria )  
            .then( imaima => {

                    setState({
                        data: imaima,
                        loading:false
                    }) 

            }) 
    },[categoria] );

    return state;
}