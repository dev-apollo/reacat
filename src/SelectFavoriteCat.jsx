import { useState } from "react"
import OptionFavoriteCat from "./OptionFavoriteCat"
import FavoriteCatImage from "./FavoriteCatImage"
import "./SelectFavoriteCat.css"

function SelectFavoriteCat(){
    const [selectedColor, setSelectedColor] = useState("")
    const colors = new Map([
        ["cinza", "Cinza"],
        ["laranja", "Laranja"],
        ["preto", "Preto"],
        ["branco", "Branco"]
    ])
    
    const handleChange = (event) => {
        setSelectedColor(event.target.value)
    }

    return(
        <div>
            <select onChange={handleChange} value={selectedColor}>
                <option value={""} disabled>Escolha aqui</option>
                {
                    Array.from(colors).map(([value, text]) => (
                        <OptionFavoriteCat key={value} value={value} text={text}/>
                    ))
                }
            </select>
            <br/>
            <FavoriteCatImage color={selectedColor}/>
        </div>
    )
}
export default SelectFavoriteCat