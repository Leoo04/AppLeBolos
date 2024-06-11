import caixa_doces2 from '../../assets/caixa_doces2.png'
import caixa_salgados from '../../assets/caixa_salgados.png'
import BoloNinho from '../../assets/Ninho.png'
import BoloChoco from '../../assets/BoloChoco.png'

const cardapio = {
    titulo: {
        ti: "Cardapio",
    },  
    bolos: {
        lista: [
            {
                nome: "Bolo de ninho com morango",
                preco: "75,00",
                imagem: BoloNinho,
            },
            {
                nome: "Bolo de chocolate com morango",
                preco: "75,00",
                imagem: BoloChoco,
            },
            {
                nome: "Caixa de salgados",
                preco: "45,00",
                imagem: caixa_salgados,
            },
            {
            nome: "Caixa de doces",
                preco: "80,00",
                imagem: caixa_doces2,
            },
        ]
    },
} 

export default cardapio;