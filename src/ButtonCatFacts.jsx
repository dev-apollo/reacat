import "./ButtonCatFacts.css"
import axios from "axios"
import { useState } from "react"

function ButtonCatFacts(){
    const [catFacts, setCatFacts] = useState([])

    const handleClick = async () => {
        try {
            const response = await axios.get("https://catfact.ninja/fact")
            setCatFacts((prevFacts) => [...prevFacts, response.data.fact])
        } catch(e) {
            console.error("Erro ao buscar um fato sobre gatos.")
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Gerar um fato!</button>
            <ul>
                {catFacts.map((fact, index) => (
                    <li key={index}>
                        {fact}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ButtonCatFacts