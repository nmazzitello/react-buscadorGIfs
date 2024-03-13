import { useState } from "react"
import PropTypes from "prop-types"

export const AddCategory= ( {setsetAnime} ) =>{

    const [inputValue, setInputValue]= useState("");

    const handleInputChange = ( e => {
        setInputValue( e.target.value );
    })

    const handleSubmit= (e) => {
        e.preventDefault();

        if(inputValue.trim() !== ""){
            setsetAnime( ele => [inputValue, ...ele])
            setInputValue("");
        }
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                />
        </form>
    )

}

AddCategory.propTypes = {
    setsetAnime: PropTypes.func.isRequired
}
