import OptionFavoriteCat from "./OptionFavoriteCat"

function FavoriteCat(){
    const colors = new Map([
        ["cinza", "Cinza"],
        ["laranja", "Laranja"],
        ["preto", "Preto"],
        ["branco", "Branco"]
    ])
    return(
        <select>
            <option value={""} disabled selected>Escolha aqui</option>
            {
                Array.from(colors).map(([value, text]) => (
                    <OptionFavoriteCat value={value} text={text}/>
                ))
            }
        </select>
    )
}
export default FavoriteCat