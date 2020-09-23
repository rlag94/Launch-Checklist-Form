// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {
      let missionTarget = document.getElementById("missionTarget")
      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[2].name}</li>
         <li>Diameter: ${json[2].diameter}</li>
         <li>Star: ${json[2].star}</li>
         <li>Distance from Earth: ${json[2].distance}</li>
         <li>Number of Moons: ${json[2].moons}</li>
      </ol>
      <img src="${json[2].image}">
      `
   });
});

let form = document.querySelector("form")
form.addEventListener("submit", function(event) {
   let pilotName = document.getElementById("pilotName")
   let copilotName = document.getElementById("copilotName")
   let cargoMass = document.getElementById("cargoMass")
   let fuelLevel = document.getElementById("fuelLevel")
   if (pilotName.value === "" || copilotName.value === ""
      || cargoMass === "" || fuelLevel === "") {
         alert("You must submit entries!")
         event.preventDefault();
      } else if 
         (!isNaN(pilotName.value) || !isNaN(copilotName.value) 
         || isNaN(fuelLevel.value) || isNaN(cargoMass.value)
         ) {
            alert("You must submit valid entries dummie!")
            event.preventDefault();
         } else {
            event.preventDefault();
            let faultyItems = document.getElementById("faultyItems") 
            let pilotStatus = document.getElementById("pilotStatus")
            let copilotStatus = document.getElementById("copilotStatus")
            faultyItems.style.visibility = "visible"
            pilotStatus.innerHTML = `${pilotName.value} ready.`
            copilotStatus.innerHTML = `${copilotName.value} ready.`
            if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
               let fuelStatus = document.getElementById("fuelStatus")
               fuelStatus.innerHTML = "There is not enough fuel for the journey."
               let cargoStatus = document.getElementById("cargoStatus")
               cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
               let launchStatus = document.getElementById("launchStatus")
               launchStatus.innerHTML = "Shuttle NOT ready for launch."
               launchStatus.style.color = "red"; 
               } else if (cargoMass.value > 10000 && fuelLevel.value >10000) {
                  let cargoStatus = document.getElementById("cargoStatus")
                  cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
                  let fuelStatus = document.getElementById("fuelStatus")
                  let launchStatus = document.getElementById("launchStatus")
                  launchStatus.innerHTML = "Shuttle NOT ready for launch."
                  launchStatus.style.color = "red";
               } else if (cargoMass.value < 10000 && fuelLevel.value < 10000) {
                  let fuelStatus = document.getElementById("fuelStatus")
                  fuelStatus.innerHTML = "There is not enough fuel for the journey."
                  let cargoStatus = document.getElementById("cargoStatus")
                  let launchStatus = document.getElementById("launchStatus")
                  launchStatus.innerHTML = "Shuttle NOT ready for launch."
                  launchStatus.style.color = "red";
               } else {
                  let launchStatus = document.getElementById("launchStatus")
                  launchStatus.innerHTML = "Shuttle is ready for launch!"
                  launchStatus.style.color = "green";
               }
         
         }
   })