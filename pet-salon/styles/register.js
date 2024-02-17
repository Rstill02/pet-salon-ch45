let salon={
    name:"Fabulous & Fancy Pets",
    phone:"000-000-0000",
    address:{
        street:"Rogerwood",
        number:"2212",
        zip:"22062"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            service:"Hair Trim",
            breed: "Poodle"
        }
        ,{
            name:"Scrappy",
            age:50,
            gender:"Male",
            service:"Petticure",
            breed: "Akita"
        }
        ,{
            name:"Speedy",
            age:70,
            gender:"Male",
            service:"Spa Day",
            breed: "Shih Tzu"
        } 
    ] //pets array
}

console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
console.log(salon.pets[2].name);
console.log(salon.pets.length);

//use a for loop to travel the array

let petID=0
//constructor
function Pet(n,a,g,s,b){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.service=s;
    this.breed=b;
    this.id=petID++;
}

function getEd(id){
    return document.getElementById(id);
}

function displayPetNames(){
    for(let i=0;i<salon.pets.length;i++){
document.getElementById('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
    }
    document.getElementById('totalPets').innerHTML=`Total=${salon.pets.length}`
}

function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to ${salon.name} which is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    `;
}
displayFooterInfo();

//get elements from HTML
let inputName= document.getElementById("txtName");
let inputAge= document.getElementById("txtAge");
let inputGender= document.getElementById("txtGender");
let inputService= document.getElementById("txtService");
let inputBreed= document.getElementById("txtBreed");

function register(){
    //1) getting value
    //2) create the newPet using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value);
    console.log(newPet);
    //3) push the newPet to the array
    salon.pets.push(newPet);
    //4) call display function
    displayPetNames();
    //5) clear the input
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
}

function init(){
    //creating predefined obj
    let pet1=new Pet("Scooby",60,"Male");
    let pet2=new Pet("Scrappy",50,"Male");
    let pet3=new Pet("Speedy",70,"Male");
    salon.pets.push(pet1,pet2,pet3)
    //executing fn
    displayPetNames();
    displayFooterInfo();
}
window.onload=init;// wait to render the HTML

console.log("outside");