let produtos = []
let ultimoId = 0;

function createProduto() {
    if(produtos.length < 3) {
        ultimoId += 1;
        let id = ultimoId;
        let produto = document.getElementById("produto").value
        let preco = document.getElementById("preco").value
        let qtde = document.getElementById("qtde").value
        let produ = {id: id, produto: produto, preco: preco, qtde: qtde}
        produtos.push(produ)
        console.log(produtos)
    }
    else {
        document.getElementById("cadastrarPeca").disabled = true
        document.getElementById("msg").innerText = "Cheio!"
    }
}

function readProdutos() {
    for (i = 0; i < produtos.length; i++) {
        document.getElementById("pecasCadastradas").innerHTML += `<p>Id do Produto:${produtos[i].id} - Nome Produto:${produtos[i].produto} - Preço do Produto:${produtos[i].preco} - Quantidade no estoque:${produtos[i].qtde}</p>`
    }
}


function sort() {
    produtos.sort( (a, b) => a.preco - b.preco)
    console.log(produtos)
}


function reverse() {
    produtos.reverse()
}


// function indexOf() {
//     let produto = produtos.indexOf()
//     console.log(produto)
// }


function pop() {
    produtos.pop()
}

function shift() {
    produtos.shift()
}





// let index = array.indexOf(25);
// console.log(index);                    8


// array.includes(valorProcurado, índiceInicial)                  9


// let encontrado = array.find(num => num > 20);
// console.log(encontrado);      10


// array.findIndex(callback(element[, index[, array]])[, thisArg])     11



// string.split(delimitador, limite)                               14

// array.join(delimitador)                                         15























