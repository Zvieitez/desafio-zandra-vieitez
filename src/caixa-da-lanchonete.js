class CaixaDaLanchonete {

    constructor(){
        this.totalDaCompra = 0
        this.mensagemDeErro = ""
        this.tabelaItens = [
            {item: 'cafe', preco: 3, itemPrincipal: true, itemExtra: false},
            {item: 'chantily', preco: 1.50, itemPrincipal: false, itemExtra: true},
            {item: 'suco', preco: 6.20, itemPrincipal: true, itemExtra: false},
            {item: 'sanduiche', preco: 6.50, itemPrincipal: true, itemExtra: false},
            {item: 'queijo', preco: 2, itemPrincipal: false, itemExtra: true},
            {item: 'salgado', preco: 7.25, itemPrincipal: true, itemExtra: false},
            {item: 'combo1', preco: 9.50, itemPrincipal: true, itemExtra: false},
            {item: 'combo2', preco: 7.50, itemPrincipal: true, itemExtra: false},
        ]
    }

    pagamentoDebito(pedidos){
        let resultoDaOperacao = 0
        pedidos.map(itens => {
            const [opcao, quantidade] = itens.split(",")
            const precoDoItem = this.tabelaItens.find((item) => item.item === opcao)
            resultoDaOperacao = resultoDaOperacao + (precoDoItem.preco * Number(quantidade))            
        }) 
        return resultoDaOperacao.toFixed(2)
    }

    pagamentoDinheiro(pedidos){
        let resultadoDoPedido = 0
        let valorComDesconto = 0
        pedidos.map(itens => {
            const [opcao, quantidade] = itens.split(",")
            const precoDoItem = this.tabelaItens.find((item) => item.item === opcao)
            resultadoDoPedido = resultadoDoPedido + (precoDoItem.preco * Number(quantidade))
        }) 
        valorComDesconto = resultadoDoPedido - (resultadoDoPedido * 5)/100
        console.log(valorComDesconto)
        return valorComDesconto.toFixed(2)
    }

    pagamentoCredito(pedidos){
        let resultadoDoPedido = 0
        let valorComAcrescimo = 0
        pedidos.map(itens => {
            const [opcao, quantidade] = itens.split(",")
            const precoDoItem = this.tabelaItens.find((item) => item.item === opcao)
            resultadoDoPedido = resultadoDoPedido + (precoDoItem.preco * Number(quantidade))
        }) 
        valorComAcrescimo = resultadoDoPedido + (resultadoDoPedido * 3)/100
        console.log(valorComAcrescimo)
        return valorComAcrescimo.toFixed(2)
    }

    calcularValorDaCompra(metodoDePagamento, pedido) {
        // validando metodo de pagamento utilizando o array.includes()
        // - Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"
        if (!['debito', 'credito', 'dinheiro'].includes(metodoDePagamento)) {
            return 'Forma de pagamento inválida!';
        }

        // - Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
        if(!pedido){
            console.log('Não há itens no carrinho de compra!')
            return 'Quantidade inválida!'
        }

        // - Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
        // if(pedido.length == 0){
        //     console.log('Não há itens no carrinho de compra!')
        //     return 'Não há itens no carrinho de compra!'
            
        // }

        pedido.forEach(item => {
            const [opcao, quantidade] = item.split(",")

            if(!this.mensagemDeErro){
                if(Number(quantidade) === 0){
                    this.mensagemDeErro = 'Quantidade inválida!'
                }

                if(!opcao){
                    this.mensagemDeErro = 'Não há itens no carrinho de compra!'
                }

            }
        });

        pedido.map(itens => {
            
            
        }) 

        if(metodoDePagamento === 'debito'){
            this.totalDaCompra = this.pagamentoDebito(pedido)
            console.log('Resultado: '+this.totalDaCompra)
            return R$ ${this.totalDaCompra.replace(".", ",")}
        }
if(metodoDePagamento === 'dinheiro'){
            this.totalDaCompra = this.pagamentoDinheiro(pedido)
            console.log('Resultado: '+this.totalDaCompra)
            return R$ ${this.totalDaCompra.replace(".", ",")}
        }     

        if(metodoDePagamento === 'credito'){
            this.totalDaCompra = this.pagamentoCredito(pedido)
            console.log('Resultado: '+this.totalDaCompra)
            return R$ ${this.totalDaCompra.replace(".", ",")}
        }    
        return this.mensagemDeErro

    }

}

export { CaixaDaLanchonete };

const test = new CaixaDaLanchonete()
    .calcularValorDaCompra('credito', ['cafe,1'])