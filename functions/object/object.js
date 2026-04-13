let obj={
    name:"Gayatri",
    age:21,
    isEnrolled:true,
}
console.log(obj.name);
console.log(obj.age);
console.log(obj.isEnrolled);

obj.name="Gayatri S";
console.log(obj.name);


const obj={
    true:"yes",
    42:"answer",
};
console.log(obj[true]);



const user={
    "first-name":"Gayatri",
};

user["first-name"]

const Locations={
    city:"Saharanpur",
    coordinates:{
        lat:23.2,
        lng:77.4,
    },
};
Locations.coordinates.lat;


//Destructure the key "first-name" as a variable called first-name
const user={
    "first-name":"Gayatri",
};
let {"first-name":firstName}=user;
console.log(firstName);

// use object.entries() to print all the key-value pairs as:
// title: javaScript
// duraton: 4 weeks
const course={
    title:"javascript",
    duration:"4 weeks",

};
Object.entries(course).forEach(function(val){
    console.log(val[0]+":"+val[1]);
});


 // Use a variable to dynamically assign a property 
 const key="role";
 let obj={
    name:"Gayatri",
    [key]:"admin",
 }


