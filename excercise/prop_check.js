
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
console.log(contacts.length)
console.log(contacts[0]["firstName"]);
console.log(contacts[0].hasOwnProperty("likes"));
if (contacts[0]["firstName"]=="Akira"){
    console.log("yes akira true");
    console.log(contacts[0]["likes"]);
}else {
    console.log("no akria false");

}

function lookUpProfile(firstName, prop){
// Only change code below this line
  for (var i = 0; i<contacts.length; i++){
    console.log("i value " + i);
        if (contacts[i].firstName==firstName){
            console.log(contacts[i].firstName);
            if (contacts[i].hasOwnProperty(prop)){
                console.log(contacts[i][prop]);
                return contacts[i][prop];
            }else{
                console.log("no such property")
              return "No such property";
            }
        }

    }
    console.log("no such contact")
    return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastname");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "number");
lookUpProfile("Akira", "address");
