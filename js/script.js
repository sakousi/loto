let sommede = 1;
let random = [];
let lrandom = [];

let pactol = parseInt(Math.random() * (1000000 - 1) + 1)
document.getElementById('monney').innerHTML = pactol

function loto(string, luck) {
random = [];
    if (string.length !== 0) {
        let array = string.split(' ')
        if (array.length === 5) {
            for (let i = 0; i < array.length; i++) {
                random.push(parseInt(Math.random() * (49 - 1) + 1).toString());
            }
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                let j = random.indexOf(element);
                if (j != -1)
                    sommede += 0.05;

                if (j == index)
                    sommede += 0.1;
            }
        }else{
            console.log('les chifres saisis ne sont pas correctes')
        }
    }
    if(luck.length !== 0){
        let larray = string.split(' ')
        if(larray.length === 2){
           for (let i = 0; i <= 5; i++) {
                lrandom.push(Math.random() * (10 - 1) + 1).toString();
            }
            for (let k = 0; k < larray.length; k++) {
                const element = larray[k];
                let bla = lrandom.indexOf(element);
                if (bla != -1)
                    sommede += 0.125;
                if (bla == k)
                    sommede += 0.25;
            }
        }
    }
    let prize = pactol * sommede
    document.getElementById('prize').innerHTML = parseInt(prize)
}