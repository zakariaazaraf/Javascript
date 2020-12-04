// Declaring a function that test the concept of Promise

const myBirthday = isMyLoveOkay => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(isMyLoveOkay){
                resolve(`It'll prapare tow cakes fro us !!!`);
            }else{
                reject(`sorry for that, i will refond you !!`);
            }
        }, 2000)
    })
}

myBirthday(true).then(result =>{

    console.log(result);

}).catch(error =>{

    console.log(error);

}).finally(() =>{
    
    console.log(`Here we go let us celelbrate the party to gather !!`);

});