// Our Array is un seprate file that why we are using require to get data from json file here.
        let jsonData=require('./arrayJsn.json');
        var studentJson = jsonData.Full;
        class Student{
            constructor(id, firstName, lastName){
                let newObj = {
                    ID:id, 
                    FirstName: firstName, 
                    LastName: lastName
                }
                studentJson.push(newObj);
            }
            // This is parmeterised function for inserting vlaues at end of Array.
            insert(Id,firstName,lastName,city,state,gender){
                let object={
                    ID:Id,
                    FirstName:firstName,
                    LastName:lastName,
                    City:city,
                    State:state,
                    Gender:gender
                }
                studentJson.push(object);
            }
            update(currentID,id,firstName,lastName,city,state,gender){
                // this is used to find id which is present in Array and we want change data of that id.
                let object=studentJson.find(x=>x.ID== currentID)
                // here we are simply assigning values to Array
                object.FirstName=firstName;
                object.LastName=lastName;
                object.City=city;
                object.State=state;
                object.Gender=gender;
           
            }
            printAllData(){
                for (const obj of studentJson) {
                    console.log(obj);
                }
            }
        }
        // simply we are creating object of Student class.
        let std = new Student();
        // calling functions of class through object of class.
        std.insert('55','Muhammad','Abdullah','Lahore','Punjab','Male');
        std.printAllData();
        std.update(1,100,"Danial","Khan","lahore","Punjab","Male");
        std.printAllData();