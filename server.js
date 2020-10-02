const express= require('express');
const app= express();
const path = require('path');

require('dotenv').config();
const db= require('./backend/db/db_con');
const port=process.env.PORT || 5600;
const cors =require('cors');
const bodyParser=require('body-parser')

app.use(express.json());
app.use(bodyParser.json());


// app.use(express.static(__dirname + '/dist/charts'));
// // app.listen(process.env.PORT || 8080);

// app.get('/*', function(req,res){
//     res.sendFile(path.join(__dirname + '/dist/charts/index.html'));
// })

// console.log('console listening');





app.use(cors());
// const spec=require('./models/spec')
// const actions=require('./models/clinic');
// const update=require('./models/delete');
const meds=require('./backend/models/medicine');
// app.use('/',actions);
// app.use('/spec',spec);
// app.use('/update',update);
app.use('/meds',meds);
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
  });
