import FavoriteCat from "./FavoriteCat"

function MainContent(){
    return(
        <main>
            <h1>Meow!</h1>
                <p>
                    Bem-vindo ao ReaCAT, o repositório de aprendizado sobre React de <a href="https://github.com/dev-apollo" target="_blank">dev-apollo</a>... Com gatinhos!<br/>
                    Antes de tudo... Poderia me dizer a sua cor favorita de gato?
            </p>
            <FavoriteCat/>
        </main>
    )
}

export default MainContent
