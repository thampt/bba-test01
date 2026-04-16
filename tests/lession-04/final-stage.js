function findPairsDivisibleBy17() {
    let countpairsDivisible = 0;
    let pairsDivisibleArr = [];
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        for (let j = i; j <= 100; j++) { //j start từ i tránh trùng cặp.
            if ((i + j) % 17 === 0) { 
                sum = i + j;
                countpairsDivisible++;
                pairsDivisibleArr.push({ i, j, sum });
            }
        }
    }
    console.log(`tổng số: ${countpairsDivisible} cặp`);
    for (let item of pairsDivisibleArr) {
        console.log(`(${item.i}, ${item.j}) = ${item.sum}`);
    }
}

findPairsDivisibleBy17();