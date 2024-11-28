function FavoriteCatImage(props){
    if(!props.color){
        return null
    }

    let imagem, nome;
    switch(props.color){
        case "cinza":
            imagem = "/catColors/cinza.png"
            nome = "Onomatopéia"
            break
        case "laranja":
            imagem = "/catColors/laranja.png"
            nome = "Sertanejo"
            break
        case "preto":
            imagem = "/catColors/preto.png"
            nome = "Paulo Antônio"
            break
        case "branco":
            imagem = "/catColors/branco.png"
            nome = "Dona Carolina Josepha Leopoldina d'Áustria"
            break
    }

    return (
        <div>
            <img src={imagem} style={{width: "15em"}}/>
            <p>Hah, aqui está {nome} para te acompanhar nessa página!</p>
        </div>
    )
}

export default FavoriteCatImage