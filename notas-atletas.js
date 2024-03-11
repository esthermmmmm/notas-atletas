// Função para calcular a média das notas sem considerar a maior e menor nota
function calcularMedia(notas) {
    // Ordena as notas em ordem crescente
    notas = notas.sort((a, b) => a - b);

    // Elimina a maior e a menor nota
    let notasComputadas = notas.slice(1, 4);

    // Calcula a média das notas restantes
    let media = notasComputadas.reduce((acc, nota) => acc + nota, 0) / notasComputadas.length;

    return media;
}

// Função principal para processar os atletas
function processarAtletas(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let atleta = atletas[i];
        let nome = atleta.nome;
        let notas = atleta.notas;

        // Calcula a média das notas sem considerar a maior e menor nota
        let media = calcularMedia(notas);

        // Exibe os resultados para o usuário
        console.log(`Atleta: ${nome}`);
        console.log(`Notas Obtidas: ${notas}`);
        console.log(`Média Válida: ${media.toFixed(2)}`);
        console.log("\n");
    }
}

// Entrada de dados
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// Chama a função principal para processar os atletas
processarAtletas(atletas);
