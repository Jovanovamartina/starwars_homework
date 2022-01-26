






const btnPeople = document.getElementById("btnPeople");
const btnShips = document.getElementById("btnShips");
const result = document.getElementById("result");
const loader = document.getElementById("loader");

//const btnNext = document.getElementById("btnNext");
//const btnPrev = document.getElementById("btnPrev");

let urlPeople = "https://swapi.dev/api/people/?page=1";
let urlShips = "https://swapi.dev/api/starships/?page=1";
//peope first
function getData(url){

    $.ajax({
        url: url,
        success: function(data){
            btnNext.style.display="block"
            btnPrev.style.display="block"
    
            console.log("The request is scucessful", data);
            displayPeople(data.results);

        },
        error: function(error){
            console.log(error);
        }
    })
}
btnPeople.addEventListener("click", function(){
    getData(urlPeople);  
})



function displayPeople(allPeople){
    if(allPeople != null){
        result.innerHTML = '';
        result.innerHTML = `
        <div class="row different">
            <div class="col-md-3">Name</div>
            <div class="col-md-2">Height</div>
            <div class="col-md-2">Mass</div>
            <div class="col-md-2">Gender</div>
            <div class="col-md-2">Birth Year</div>
            <div class="col-md-1">Films</div>
        </div>`;

        for(let person of allPeople){
            result.innerHTML +=`
            <div class="row">
                <div class="col-md-3">${person.name}</div>
                <div class="col-md-2">${person.height}</div>
                <div class="col-md-2">${person.mass}</div>
                <div class="col-md-2">${person.gender}</div>
                <div class="col-md-2">${person.birth_year}</div>
                <div class="col-md-1">${person.films.length}</div>
            </div>`;
        }
    } else {
        result.innerHTML = `<h2 id="notification"> Please Wait unitl data is loaded!</h2>`
    }
}


// ships first

function getShipsData(url){

    $.ajax({
        url: url,
        success: function(dataShips){
            console.log("The request is scucessful", dataShips);
            displayShips(dataShips.results);
            btnNext.style.display="block"
            btnPrev.style.display="block"
        },
        error:function(someError){
            console.log(someError);
        }
    })
}


btnShips.addEventListener("click" ,function(){
    getShipsData(urlShips);

})

function displayShips(allShips){
    if(allShips != null){
        result.innerHTML = '';
        result.innerHTML = `
        <div class="row different">
        <div class="col-md-3">Name</div>
        <div class="col-md-2">model</div>
        <div class="col-md-2">manufacturer</div>
        <div class="col-md-2">cost</div>
        <div class="col-md-2">people capacity</div>
        <div class="col-md-1">clas</div>
    </div>`;

    for(let ship of allShips){
        result.innerHTML +=`
        <div class="row">
            <div class="col-md-3">${ship.name}</div>
            <div class="col-md-2">${ship.model}</div>
            <div class="col-md-2">${ship.manufacturer}</div>
            <div class="col-md-2">${ship.cost_in_credits}</div>
            <div class="col-md-2">${ship.passengers}</div>
            <div class="col-md-1">${ship.starship_class}</div>
        </div>`;
    }
} else {
    result.innerHTML = `<h2 id="notification"> Please Wait unitl data is loaded!</h2>`
}
}
// next people

const btnNext = document.getElementById("btnNext");

let urlPeopleSecond= "https://swapi.dev/api/people/?page=2";

function getNext(url){
    $.ajax({
        url:url,
        success: function(dataTwo){
            console.log("the request is succesful",dataTwo);
            displaySecondListPeople(dataTwo.results);
            btnNext.style.display="block"
            btnPrev.style.display="block"
        },
        error:function(errorTwo){
            console.log(errorTwo);
        }
    })
}
btnNext.addEventListener("click",function(){
    getNext(urlPeopleSecond);
})

function displaySecondListPeople(secondList){
    if(secondList != null){
        result.innerHTML="";
        result.innerHTML=`
        <div class="row different">
        <div class="col-md-3">Name</div>
        <div class="col-md-2">Height</div>
        <div class="col-md-2">Mass</div>
        <div class="col-md-2">Gender</div>
        <div class="col-md-2">Birth Year</div>
        <div class="col-md-1">Films</div>
    </div>`;  

    for(let secondPerson of secondList){
        result.innerHTML+=`
        <div class="row">
        <div class="col-md-3">${secondPerson.name}</div>
        <div class="col-md-2">${secondPerson.height}</div>
        <div class="col-md-2">${secondPerson.mass}</div>
        <div class="col-md-2">${secondPerson.gender}</div>
        <div class="col-md-2">${secondPerson.birth_year}</div>
        <div class="col-md-1">${secondPerson.films.length}</div>
    </div>`; 
    }
}
else{
        result.innerHTML =`<h2 id="notification"> Please Wait unitl data is loaded!</h2>`
}

} 

//peope prev
const btnPrev = document.getElementById("btnPrev");


btnPrev.addEventListener("click",function(){
    getData(urlPeople);
})

//next ships
 


//let urlShipsSecond =

function getNextShips(url){
    $.ajax({
        url: "https://swapi.dev/api/starships/?page=2",
        success:function(dataShipsTwo){
            console.log("the request is succeful" ,dataShipsTwo);
            displaySecondListShips(dataShipsTwo.results);
            btnNext.style.display="block"
            btnPrev.style.display="block"
            
        },
        
        error:function(errorThree){
            console.log(errorThree);
        }
    })
}

btnNext.addEventListener("click",function(){
    getNextShips(urlShipsSecond );
})
function displaySecondListShips(secondListShip){
    if(secondListShip != null){
        result.innerHTML="";
        result.innerHTML=`
        <div class="row different">
        <div class="col-md-3">Name</div>
        <div class="col-md-2">model</div>
        <div class="col-md-2">manufacturer</div>
        <div class="col-md-2">cost</div>
        <div class="col-md-2">people capacity</div>
        <div class="col-md-1">clas</div>
    </div>`;
    
    for(let secondShip of secondListShip){
        result.innerHTML +=`
        <div class="row">
            <div class="col-md-3">${secondShip.name}</div>
            <div class="col-md-2">${secondShip.model}</div>
            <div class="col-md-2">${secondShip.manufacturer}</div>
            <div class="col-md-2">${secondShip.cost_in_credits}</div>
            <div class="col-md-2">${secondShip.passengers}</div>
            <div class="col-md-1">${secondShip.starship_class}</div>
        </div>`;
    }
 } else{
        result.innerHTML=  `<h2 id="notification"> Please Wait unitl data is loaded!</h2>`
    }
}



