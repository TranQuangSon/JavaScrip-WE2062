
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
        'Never',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimich',
        'Goretzka',
        'Conan',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanjz',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fiePlayers] = players1;
console.log(gk, fiePlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//6
const printGoals = function(...players) {
    console.log(players);
    console.log(`${players.length} Goals were scored`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');