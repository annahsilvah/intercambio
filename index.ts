// atribuindo os tipos
interface Intercambio{
    Nome:string;
    idade:number;
    Cpf:string;
    RG:string;
    Passaporte:string;
    Curso:string;
    Nivelescolar:string;
    Destino:string;
}

let lista: Intercambio[] = JSON.parse(localStorage.getItem("lista")!) || [] // Retorna os itens já cadastados caso existam. Se não retorna um array vazio

// percorre os elementos cadatrados e mostra eles na tela 
lista.forEach(function ({ Nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino }, index) {
    html(index, Nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino)
})

// @ts-ignore
$("#cpf").mask("000.000.000-00")

// obtem os valores dos elementos 
function adicionar(event: Event) {
    event.preventDefault() // Previne de atualizar a página
    const nome = (document.getElementById("nome") as HTMLInputElement).value
    const idade = Number((document.getElementById("idade")  as HTMLInputElement).value)
    const Cpf = (document.getElementById("cpf") as HTMLInputElement).value
    const RG = (document.getElementById("RG") as HTMLInputElement).value
    const Passaporte = (document.getElementById("Passaporte") as HTMLInputElement).value
    const Curso = (document.getElementById("Curso") as HTMLInputElement).value
    const Nivelescolar = (document.getElementById("Nivel Escolar") as HTMLInputElement).value
    const Destino = (document.getElementById("Destino") as HTMLInputElement).value

    // já tem no html required="true" que verifica se tem algum campo vazio e já manda uma mensagem para preencher 

    // chama as duas funções html e intercamcio 

    intercambio(nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino)
    html(lista.length, nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino);// lista.length indentificar o indice do element para que seja removido posteriormente 

    (document.getElementById("nome") as HTMLInputElement).value = "";// limpa o campo
    (document.getElementById("idade")  as HTMLInputElement).value = "";
    (document.getElementById("cpf") as HTMLInputElement).value = "";
    (document.getElementById("RG") as HTMLInputElement).value = "";
    (document.getElementById("Passaporte") as HTMLInputElement).value = "";
    (document.getElementById("Curso") as HTMLInputElement).value = "";
    (document.getElementById("Nivel Escolar") as HTMLInputElement).value = "";
    (document.getElementById("Destino") as HTMLInputElement).value = "";
}

// adicionando no array e salvando no localStorage = sistema do navegador 
function intercambio(Nome:string, idade:number, Cpf:string, RG:string, Passaporte:string, Curso:string, Nivelescolar:string, Destino:string){
    lista.push({ Nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino })
    localStorage.setItem("lista", JSON.stringify(lista))
}

//adicionar no html = mostrar na tela 
function html(index: number, Nome:string, idade:number, Cpf:string, RG:string, Passaporte:string, Curso:string, Nivelescolar:string, Destino:string) {
    document.getElementById("Cadastro intercambio")!.innerHTML += ` <!-- adciona mais um elemento -->
        <tr>
            <th>${Nome}</th>
            <th>${idade}</th>
            <th>${Cpf}</th>
            <th>${RG}</th>
            <th>${Passaporte}</th>
            <th>${Curso}</th>
            <th>${Nivelescolar}</th>
            <th>${Destino}</th>
            <th><button onclick="remover(${index})">Remover</button></th>
        </tr>
    `
    // concatena e adiciona o elemento do cadastro intercambio
}

// remove o elemento escolhido pelo id e mantem o restante 
function remover(index: number) {
    lista.splice(index, 1) //localiza o index para remover
    localStorage.setItem("lista", JSON.stringify(lista)) // retirar do localstorage
    document.getElementById("Cadastro intercambio")!.innerHTML = "" // limpa o html
    lista.forEach(function ({ Nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino }, index) {
        html(index, Nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino) // mostra todos os elementos exceto o que foi retirado
    })
}

