const dicPaises = [];
const medalhas = ['ouro', 'prata', 'bronze'];
let nome = '';
let numMedalhas = 0;

function registrarMedalhas() {

    while (nome.toUpperCase() !== 'SAIR') {
        nome = prompt('Digite o nome do país [ou SAIR para encerrar]: ');
        
        if (nome.toUpperCase() === 'SAIR') break;

        numMedalhas = 0;
        for (const tipoMedalha of medalhas) {
            const inputMedalha = parseInt(prompt(`Digite o número de medalhas de ${tipoMedalha}: `));
            numMedalhas += inputMedalha;
        }

        dicPaises.push({
            nome: nome,
            medalhas: numMedalhas
        });
    }

    console.log('\n = Ranking de medalhas: =');
    for (const x of dicPaises) {
        console.log(`${x.nome}: ${x.medalhas} medalhas`);
    }
}

registrarMedalhas()