
// function myself(){
//     document. getElementsByTagName("p")
//     var par =document.getElementsByTagName("p");
//  var textInMiddleParagraph = par[1].style.color="red"
// }
// myself()
// var t= document.getElementById("table9");
// var cell = t.getElementsByTagName("td") 
// for (var i =0; i <cells. length;i++) {
//     cells.[i] 
// }



//  class ImageController {
//     constructor(imgElement) {
//         this._imgElement = imgElement;
//     }

//     // Getter for image src
//     get imageSrc() {
//         return this._imgElement.src;
//     }

//     // Setter for image src
//     set imageSrc(newSrc) {
//         this._imgElement.src = newSrc;
//     }
// }

// Get Element//

// var numOfItems = document.getItemById("p1").attributes.length
// console. log(document.getElementById);

// var fruits = document.getElementById("collect").
// children;
// console.log(fruits[3].textContent); // This will give "Mango"
// // object class 37//
// const person = {
//     firstName: "john",
//     lastName:"Doe",
//     age: 50,
//     eyeColor:"blue",

// };
// document,getElementById("demo").innerHtml =
// person.firstName + person.lastName+"is" .age + person.age + "yearold.";
// // assignment make 10 objects for any items//
// //class40//
// var plan1 = {
//      name: "Basic",
//      price: 3.99,
//      space: 100,
//      transfer: 1000,
//      pages: 10
//      };
//      var plan1 = new plan1("Basic", 3.99, 100,1000, 10);
//      var plan2= new plan2("Premium" , 5.99, 500, 5000, 50);
//      var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);

//      function Plan(name, price, space, transfer, pages) {
//          this.name = name;
//          this.price = price;
//          this.space = space;
//          this.transfer = transfer;
//          this.pages = pages;
//          }
//          var car1=  new Car("corolla","black");
//          var car2= new Car("yaris","white");
//          var car3= car3("aulto", "silver")

//          function Plan(name,color) {
//              this.name = "corolla";
//              this.color ="black";
//             console.log(car);
            
//          }
//          //make five vannila function//
    //Browser Control//
// var currentSite = window.location.hostname;
//  var currentPath = "http://" + currentSite + "";
// window.location.href = destination;
//          window.location.assign("https://www.netflix.com/NotFound?prev=https%3A%2F%2Fwww.netflix.com%2FC%2FUsers%2FHP%2FDesktop%2Fhtml%2Fjawa%2520clasa%252034%2Findex.html%3Flocale%3Den-PK#%20netflix");
//          window.location.reload();
        //aik page bunana hay ussme window location.reload() laga dY OR uss mai aik loop lugana hy //
    //     var monkeyWindow = window.open();
    //     var windowContent = "<h1>Capuchin monkey</h1><img src= 'assets/darkbg.jpg'><p>The word capuchin derives from group of friars<br> named the Order of Friars Minor Capuchin who wear<br>brownrobes with large hoods covering their heads.</p>";
    //    monkeyWindow.document.write(windowContent);

       function checkForLastName() {
        if (document.getElementById("lastNameField").value.length ===0 ) {
        alert("Please enter your last name");
        }
        return false;
        }
        function checkForLastName() {
            if (document.getElementById("lastNameField").value.length ===5) {
            alert("Please enter your last name");
            targetField.focus();
            targetField.style.background ="blue"

            }
             targetField.style.background ="red";
             return false;
            }
            function checkForSelection() {
                 if (document.getElementById("states").selectedIndex === 0) {
                 alert("Please select a state.");
                return false;
                 }
                 }
                 function validateRadios() {
                     var radios = document.getElementsByName("r1");
                     for (var i = 0; i < radios.length; i++) {
                     if (radios[i].checked) {
                     return true;
                     }
                     }
                     alert("Please check one.");
                     return false;
                 }
                     
                    