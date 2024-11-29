import SelectFavoriteCat from "./SelectFavoriteCat"
import ButtonCatFacts from "./ButtonCatFacts"

function MainContent(){
    return(
        <main>
            <h1>Meow!</h1>
            <p>
                    Bem-vindo ao ReaCAT, um repositório de bobagens em React, por <a href="https://github.com/dev-apollo" target="_blank">dev-apollo</a>, envolvendo gatinhos!<br/>
                    Antes de tudo... Poderia me dizer a sua cor favorita de gato?
            </p>
            <SelectFavoriteCat/>
            <p>Que tal aprender alguns fatos curiosos sobre gatos em inglês?</p>
            <ButtonCatFacts/>
        </main>
    )
}

export default MainContent
