let sommede = 0;
let random = [];

function loto(string, luck) {
    if (string.length !== 0) {
        let array = string.split(' ');
        if (array.length == 5) {
            for (let i = 0; i <= 5; i++) {
                random.push(Math.random() * (50 - 1) + 1).toString();
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
        let larray = string.split(' ');
        if(larray.length == 5){
            
        }
    }
}