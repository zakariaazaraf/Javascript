// function retuerned a promise
const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt('Enter a Number Between 1 - 6 : '));
        const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);

        if(isNaN(userNumber)){

            reject(new Error('Wrong Input Type '));

        }else{

            if(userNumber === randomNumber){
                resolve({
                    points: 2,
                    randomNumber
                });
            }else if(randomNumber === userNumber - 1 || randomNumber === userNumber + 1){
                resolve({
                    points: 1,
                    randomNumber
                });
            }else{
                resolve({
                    points: 0,
                    randomNumber
                });
            }

        }
    })
}

const continueGame = () => {
    return new Promise((resolve) => {

        if(window.confirm('Do You Want To Continue The Game?')){
            resolve(true)
        }else{
            resolve(false)
        }
    });
}

/* const handleGame = () => {

    enterNumber().then(result => {

        alert(`Random Num: ${result.randomNumber} You Got ${result.points}`);

        continueGame().then(result =>{
            if(result){
                handleGame();
            }else{
                alert('Game Ends, Bye !!')
            }
        })

    }).catch(error => window.alert(error));
} */

const handleGame = async () =>{
    try {

        const resultnterNumber = await enterNumber();
        alert(`Random Num: ${resultnterNumber.randomNumber} You Got ${resultnterNumber.points}`);

        const resultContinueGame = await continueGame();
        if(resultContinueGame){
            handleGame();
        }else{
            alert('Game Ends, Bye !!')
        }
    } catch (error) {
        alert(error)
    }
}


const start = ()=> {

    handleGame();

}

start();

