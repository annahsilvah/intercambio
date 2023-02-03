var lista = JSON.parse(localStorage.getItem("lista")) || []; // Retorna os itens já cadastados caso existam. Se não retorna um array vazio
// percorre os elementos cadatrados e mostra eles na tela 
lista.forEach(function (_a, index) {
    var Nome = _a.Nome, idade = _a.idade, Cpf = _a.Cpf, RG = _a.RG, Passaporte = _a.Passaporte, Curso = _a.Curso, Nivelescolar = _a.Nivelescolar, Destino = _a.Destino;
    html(index, Nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino);
});
// @ts-ignore
$("#cpf").mask("000.000.000-00");
// obtem os valores dos elementos 
function adicionar(event) {
    event.preventDefault(); // Previne de atualizar a página
    var nome = document.getElementById("nome").value;
    var idade = Number(document.getElementById("idade").value);
    var Cpf = document.getElementById("cpf").value;
    var RG = document.getElementById("RG").value;
    var Passaporte = document.getElementById("Passaporte").value;
    var Curso = document.getElementById("Curso").value;
    var Nivelescolar = document.getElementById("Nivel Escolar").value;
    var Destino = document.getElementById("Destino").value;
    // já tem no html required="true" que verifica se tem algum campo vazio e já manda uma mensagem para preencher 
    // chama as duas funções html e intercamcio 
    intercambio(nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino);
    html(lista.length, nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino); // lista.length indentificar o indice do element para que seja removido posteriormente 
    document.getElementById("nome").value = ""; // limpa o campo
    document.getElementById("idade").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("RG").value = "";
    document.getElementById("Passaporte").value = "";
    document.getElementById("Curso").value = "";
    document.getElementById("Nivel Escolar").value = "";
    document.getElementById("Destino").value = "";
}
// adicionando no array e salvando no localStorage = sistema do navegador 
function intercambio(Nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino) {
    lista.push({ Nome: Nome, idade: idade, Cpf: Cpf, RG: RG, Passaporte: Passaporte, Curso: Curso, Nivelescolar: Nivelescolar, Destino: Destino });
    localStorage.setItem("lista", JSON.stringify(lista));
}
//adicionar no html = mostrar na tela 
function html(index, Nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino) {
    document.getElementById("Cadastro intercambio").innerHTML += " <!-- adciona mais um elemento -->\n        <tr>\n            <th>".concat(Nome, "</th>\n            <th>").concat(idade, "</th>\n            <th>").concat(Cpf, "</th>\n            <th>").concat(RG, "</th>\n            <th>").concat(Passaporte, "</th>\n            <th>").concat(Curso, "</th>\n            <th>").concat(Nivelescolar, "</th>\n            <th>").concat(Destino, "</th>\n            <th><button onclick=\"remover(").concat(index, ")\">Remover</button></th>\n        </tr>\n    ");
    // concatena e adiciona o elemento do cadastro intercambio
}
// remove o elemento escolhido pelo id e mantem o restante 
function remover(index) {
    lista.splice(index, 1); //localiza o index para remover
    localStorage.setItem("lista", JSON.stringify(lista)); // retirar do localstorage
    document.getElementById("Cadastro intercambio").innerHTML = ""; // limpa o html
    lista.forEach(function (_a, index) {
        var Nome = _a.Nome, idade = _a.idade, Cpf = _a.Cpf, RG = _a.RG, Passaporte = _a.Passaporte, Curso = _a.Curso, Nivelescolar = _a.Nivelescolar, Destino = _a.Destino;
        html(index, Nome, idade, Cpf, RG, Passaporte, Curso, Nivelescolar, Destino); // mostra todos os elementos exceto o que foi retirado
    });
}
