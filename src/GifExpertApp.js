import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp= () =>{
    const [anime, setAnime] = useState(["Pain"]);

    return(
        <div>
            <h2>Gif Expert App</h2>

            <AddCategory setsetAnime={ setAnime }/>

            <hr/>

            <ol>
                {
                    anime.map( cate => 
                    <GifGrid 
                        key= {cate}
                        categoria= {cate} /> )
                }  
            </ol>

        </div>
    )

}

export default GifExpertApp