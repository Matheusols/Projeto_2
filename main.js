const form = document.getElementById('form-telefone');
const nomeForm = [];
const telefoneForm = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();

});

function adicionarLinha(){

    const inputNome = document.getElementById('nome-agenda');
    const inputTelefone = document.getElementById('telefone-agenda');

    if(nomeForm.includes(inputNome.value)){
        alert(`O nome ${inputNome.value} já existe na lista`);

    }else if(telefoneForm.includes(inputTelefone.value)) {
        alert(`O Telefone (${inputTelefone.value}) ja existe na lista`)

    }else{

    nomeForm.push(inputNome.value);
    telefoneForm.push(inputTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;           
    }

    inputNome.value = '';
    inputTelefone.value = '';
    
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}