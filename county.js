const fetchCountry = async () =>{

    try{

        const fetchCountry = await fetch('https://restcountries.eu/rest/v2/alpha/col');

        const data = await fetchCountry.json();

        console.log(data);

    }catch(error){

        console.log(error);

    }
   
};


fetchCountry();