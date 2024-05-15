var request =  new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    // here the conversion of string to objects
     var res = JSON.parse(request.response)
 console.log(res)    

//a. Get all the countries from Asia continent /region using Filter method
 var data= res.filter((ele)=>ele.region == "Asia")
 console.log(data)

 //b.Get all the countries with a population of less than 2 lakhs using Filter method

 var data= res.filter((ele)=>ele.population <200000)
 console.log(data)

 //c.Print the following details name, capital, flag, using forEach method
 res.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   })


 //d.Print the total population of countries using reduce method

 
     var total = res.reduce((acc,curr) =>{
         return acc+curr.population;
     } ,0);
 
     console.log(total);
 
//e.Print the country that uses US dollars as currency.

var currency = res.filter((element) => {
    for(let key in element.currencies)
    {
       if(element.currencies[key].code === "USD")
       {
           return element;
       }
   }
}  
)
       console.log(currency);

}
