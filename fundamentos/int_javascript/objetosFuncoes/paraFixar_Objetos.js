/* Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
    let name = 'Marta';
    let lastName = 'Silva';
    let age = 34;
    let medals = { golden: 2, silver: 3 };*/


let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

// Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

let fullName = (player.name + ' ' + player.lastName);

console.log(' ');
console.log('A jogadora ' + fullName + ' ' + 'tem ' + player.age + ' anos de idade.');



// Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];


// Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

/* Essa forma comentada é uma forma mais curta de resolver, mas a minha resolução foi a que não está comentada:
console.log('A jogadora ' + fullName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');*/

let cont = 0;

for (let index = 0; index < player.bestInTheWorld.length; index += 1) {
    cont += 1;    
}
console.log(' ');
console.log('A jogadora ' + fullName + ' foi eleita a melhor do mundo por ' + cont + ' vezes.');


// Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

console.log(' ');
console.log('A jogadora possui ' + player.medals['golden'] + ' meldalhas de ouro e ' + player.medals['silver'] + ' medalhas de prata.');