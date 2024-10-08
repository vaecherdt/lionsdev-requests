const dados = [
    { id: 1, pergunta: "o que é variável", resposta: "Um espaço de memória para armazenar valores." },
    { id: 2, pergunta: "o que é função", resposta: "Um bloco de código que realiza uma tarefa específica." },
    { id: 3, pergunta: "o que é array", resposta: "Uma lista ordenada de elementos." }
];

function processarRequisicao(requisicao) {
    const { acao, pergunta, resposta } = requisicao;

    switch (acao) {
        case 'CONSULTAR':
            return dados.find(d => d.pergunta.toLowerCase() === pergunta.toLowerCase()) || { mensagem: "Pergunta não encontrada." };

        case 'LISTAR':
            return dados;

        case 'ADICIONAR':
            const novaPergunta = { id: dados.length + 1, pergunta, resposta };
            dados.push(novaPergunta);
            return { mensagem: "Pergunta adicionada com sucesso.", dado: novaPergunta };

        default:
            return { mensagem: "Ação inválida." };
    }
}

module.exports = { processarRequisicao };