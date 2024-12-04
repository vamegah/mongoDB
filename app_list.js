const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:RPEu5Dl8rwZ7z9r1AU9K892m@172.21.243.47:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })