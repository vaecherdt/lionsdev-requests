const { processarRequisicao } = require('./server');

function solicitarConsulta(pergunta) {
    const requisicao = { acao: 'CONSULTAR', pergunta };
    const resposta = processarRequisicao(requisicao);
    console.log('Resposta:', resposta);
}

function solicitarListagem() {
    const requisicao = { acao: 'LISTAR' };
    const resposta = processarRequisicao(requisicao);
    console.log('Lista de Perguntas e Respostas:', resposta);
}

function solicitarAdicao(pergunta, resposta) {
    const requisicao = { acao: 'ADICIONAR', pergunta, resposta };
    const respostaServidor = processarRequisicao(requisicao);
    console.log('Resposta do Servidor:', respostaServidor);
}

// Exemplo de Uso
solicitarConsulta('o que é variável');
solicitarListagem();
solicitarAdicao('o que é objeto', 'Uma coleção de pares chave-valor.');
solicitarListagem();
