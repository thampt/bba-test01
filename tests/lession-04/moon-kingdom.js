// bai 1: tạo mảng mới và lọc phần tử theo điều kiện.
const characters = [
    {
        name: "anh",
        level: 30,
        health: 50
    },
    {
        name: "Ba0",
        level: 20,
        health: 1200
    },
    {
        name: "Chau",
        level: 10,
        health: 900
    }
]

function createCharacters(char) {
    return char.map(item => ({
        name: item.name.toUpperCase(),
        level: item.level * 2,
        health: item.health * 3
    }));
}
console.log("1. new array createCharacters: ", createCharacters(characters));

let possibleWinners = characters.filter(num => num.health > 1000);
console.log("1. Top possible winners: ", possibleWinners);

// bai 2
const players = [
    { Name: "Mario", Score: 1000 },
    { Name: "Luigi", Score: 900 },
    { Name: "Peach", Score: 850 },
    { Name: "Yoshi", Score: 8100 },
    { Name: "Phong", Score: 500 }
]
function printLeaderboard(playerArr) {
    return playerArr.sort((a, b) => b.Score - a.Score);
}

printLeaderboard(players).forEach((item, index) => {
    let medal = "";
    if (index === 0) {
        medal = "🥇";
    } else if (index === 1) {
        medal = "🥈";
    } else if (index === 2) {
        medal = "🥉";
    } else medal = "  ";

    console.log(medal, index + 1, item.Name, "-", item.Score, "pts");
})