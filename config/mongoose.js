const mongoose = require('mongoose');
const dbURL = "mongodb+srv://userName:password@cluster0.ovmjb.mongodb.net/demo-challenge?retryWrites=true&w=majority";
mongoose.connect(dbURL)
    .then((result) => { 
       
        console.log('connected')
    })
    .catch((err) => {console.log(err)
    });