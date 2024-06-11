import caixa_doces2 from '../../assets/caixa_doces2.png'
import caixa_salgados from '../../assets/caixa_salgados.png'
import BoloChoco from '../../assets/BoloChoco.png'
import BoloNinho from '../../assets/Ninho.png'
import Logo from '../../assets/logo.png';


const produto = {
    topo: {
        titulo: "",
    },
    detalhes: {
      nome: "Kit festa",
      logo: Logo,
      detalhes: "Um kit festa confeitado com muito carinho para deixar sua festa mais bonita!",
      preco: "R$ 255,00",
      botao: "Adicionar na Lista de Desejos",
  },
    itens: {
        titulo: "Itens do Kit",
        lista: [
          {
            nome: "1x caixa com 100 salgados",
            imagem: caixa_salgados,
          },
          {
            nome: "1x caixa com 100 doces",
            imagem: caixa_doces2,
          },
          {
            nome: "1x Bolo de Ninho",
            imagem: BoloNinho,
          },
          {
            nome: "1x Bolo de Chocolate com morango",
            imagem: BoloChoco,
          },
        ]
    }
}

export default produto;