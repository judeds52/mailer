require('dotenv').config();
const bp=require('body-parser')
const express = require("express");
const db = require('../db/db_con');
const router = express.Router();
const nodemailer=require('nodemailer');

let transporter=nodemailer.createTransport({

    service: 'gmail',
    auth:{
        user: 'starforce.cs@gmail.com',
        pass: 'jdjd5252'
        
    }
});

router.route('/').get((req,res)=>{
    db.query('select name from medicine').then(result=>{
        console.log(result.rows);
        res.send(result.rows)

    })

})
var qtn,num;
router.route('/add').put((req,res)=>{
    qtn= req.body.medList;
    console.log(req.body)

    db.query(`Update medicine set qtn=qtn+1 where name='${qtn}' `).then(resq=>{

        db.query(`select qtn from medicine where name='${qtn}'`).then(result=>{
            console.log(result.rows)
             console.log(num)
            res.send(result.rows)
            // db.query('update medicine set qtn=')
         }).catch(err =>{
            console.log(err.message)
            // res.status(httpCodes.BadRequest).json(err.message);
        })
    }).catch(err =>{
        console.log(err.message)
        // res.status(httpCodes.BadRequest).json(err.message);
    })
    // db.query('update medicine set qtn=')
})

router.route('/remove').put((req,res)=>{
    qtn=req.body.medList;
    db.query(`update medicine set qtn=qtn-1 where name ='${qtn}'`).then(result=>{
        db.query(`select qtn from medicine where name= '${qtn}'`).then(result1=>{
            console.log(result1.rows);
            res.send(result1.rows)
            
        })

    })
})
router.route('/email').post((req,res)=>{
    qtn=req.body.medList;
    mail=req.body.email;
    console.log(mail)
    let mailOptions={
        from: 'starforce.cs@gmail.com',
        to: `${mail}`,
        subject: 'Medicine Stock',
        text: `There is no medicine ${qtn} left in stock`
    };
    transporter.sendMail(mailOptions,(err,data)=>{
        if(err){
            console.log('error',err)
        }else{
            console.log('Email sent')
            res.send('email sent')
        }
    });
    

})
router.route('/show').put((req,res)=>{
    qtn=req.body.medList;
    db.query(`select qtn from medicine where name= '${qtn}'`).then(result1=>{
        console.log(result1.rows);
        res.send(result1.rows)
        
    })

})

module.exports=router;