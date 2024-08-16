const person = {

    firstName: "Mithun",
    
    lastName: "s",
    
    age: 20,
    
    };
    
    function ageInDays (personobject, callback) {
    
     const fullName = `${personobject.firstName} ${personobject.lastName}`; 
     const ageInDays= personobject.age *365;
      callback(fullName, ageInDays);
    
    }
    
    function logResult(fullName, ageInDays){
        console.log(
            `full name is ${fullName} age is ${ageInDays}`
        )

    }
     
    ageInDays(person,logResult)