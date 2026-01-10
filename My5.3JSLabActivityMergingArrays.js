// 5.3/Part 3: Merge Arrays
/*Spread operator being used to merge two arrays. Easy 
and efficient way.

The spread operator (...) provides a clean and concise 
way to merge multiple arrays into a single array.*/
const favoriteBaseballTeams = ["Yankees", "Mets", "Dodgers", "Giants", "Red Sox", "Cubs"];
const favoriteFootballTeams = ["Patriots", "Giants", "Jets", "Eagles", "Steelers", "Cowboys"];

const favoriteTeams = [...favoriteBaseballTeams, ...favoriteFootballTeams];
//console.log(`Favorite Baseball Teams: ${favoriteBaseballTeams}`);
//console.log(`Favorite Football Teams: ${favoriteFootballTeams}`);
//console.log(`Favorite Teams: ${favoriteTeams}`);
console.log("Favorite Baseball Teams:", favoriteBaseballTeams);
console.log("Favorite Football Teams:", favoriteFootballTeams);
console.log("Favorite Teams:", favoriteTeams);

/*Output:
Favorite Baseball Teams: [ 'Yankees', 'Mets', 'Dodgers', 'Giants', 'Red Sox', 'Cubs' ]
Favorite Football Teams: [ 'Patriots', 'Giants', 'Jets', 'Eagles', 'Steelers', 'Cowboys' ]
Favorite Teams: [
  'Yankees',  'Mets',
  'Dodgers',  'Giants',
  'Red Sox',  'Cubs',
  'Patriots', 'Giants',
  'Jets',     'Eagles',
  'Steelers', 'Cowboys'
]*/