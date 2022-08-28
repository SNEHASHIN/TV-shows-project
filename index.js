//querySelectors
var q=""
var inputClass = document.querySelector('.inputClass');
var button = document.querySelector('.search');
var container = document.querySelector('.container1');
inputClass.addEventListener("change",()=>{
    q=inputClass.value
    console.log(q)

})
button.addEventListener('click',function(e){
    container.innerHTML =""

   
     fetch(`https://api.tvmaze.com/search/shows?q=${q}`)
    .then(response=>response.json()) 
     .then(data=>{
        const results=data.map(element=>element.show.name)
        Results(results);
     });
    

     function Results(results){
        const List = document.getElementById("resultsList");
        results.forEach(result => {
            const element = document.createElement("li");

            element.innerText = result;
            List.appendChild(element);
        });
     }

    
    })
