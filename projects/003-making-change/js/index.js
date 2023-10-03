let coins = [200, 100, 25, 10, 5, 1];

let cash = 742;

let coinsValue = [];

let coinsName = ['toonie,', 'loonie,', 'quarter,', 'dime,', 'nickel,', 'penny.'];

function checkout (cash, coins) {
    
    for ( let i=0; i<coins.length; i++) {
    if (coins[i] < cash) {
        let division = Math.trunc(cash/coins[i]);
        coinsValue.push(division);
        cash=cash%coins[i];
    } else {
        coinsValue.push(0);
    }
}
}

checkout(cash, coins);


function message (){
    let output = cash + 'cents = ';
    for (let n=0; n<coinsValue.length; n++) {
        output += coinsValue[n] + ' ' + coinsName[n];
    }

    console.log(output)
    }

message();
