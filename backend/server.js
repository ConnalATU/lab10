const express = require('express')
const app = express()
const port = 4000


const bodyParser = require('body-parser'); //imported and installed body parser
const cors = require('cors'); //installed cors 
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Adding mongoose to project
const mongoose = require('mongoose');
//const { UseageItem } = require('../src/components/UseageItem');
//const { responsivePropType } = require('react-bootstrap/esm/createUtilityClasses');

main().catch(err => console.log(err));

async function main() {

    await mongoose.connect('mongodb+srv://connal:test123@cluster0.afzhdiu.mongodb.net/?retryWrites=true&w=majority');
    // await mongoose.connect('mongodb://connal:test123@localhost:27017/test');
}

const useagechema = new mongoose.Schema({
    company: String,
    date: String,
    useage: String


});

const useageModel = mongoose.model('useage', useagechema);

const companychema = new mongoose.Schema({
    test: String,
    test1: String,
    
    description: String
},{
timestamps: true,

});

const companyModel = mongoose.model('company', companychema);




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())





app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get("/api/useage/:key", async (req, res) => {
//     const {key, page, limit} = req.query
//     let result = await useageModel.find({
//         "$or":[
//             {
//                 company: {$regex: key}
//             },
//             {
//                 date: {$regex: key}
//             }
    
//         ]
//     });
//     res.json(result);
//     })

    // app.get("/api/useage/:key", async (req, res) => {

    //     const key = req.params
    // console.log("update" + req.params.key);

    // companyModel.find({
    //     "$or":[
    //         { 
    //             company: {$regex: key}
    //         },
    //         {   
    //             date: {$regex: key}
    //         }
    //     ]
        
    
    
    // (req.params.key, { new: true }, (error, data) => {
    //     res.send(data);
    //     console.log("update" + error);


//     })
//     const data = res;
//     res.send(data);
// })


app.get('/api/useageb', async (req, res) => {


    try{
        const {key, page, limit} = req.query
       // const skip = (page = 1) * limit
        const search = key ? {
            "$or": [
                {company: {$regex: key, $options: "$i"}},
                {date: {$regex: key, $options: "$i"}},
                {useage: {$regex: key, $options: "$i"}}


            ]
            
        } : {}
        const data = await useageModel.find(search)
        //.populate("useage").skip(skip).limit(limit)
        console.log(data)
        res.json
        
            ({data})
    }  catch(error) {
        console.log(error)
    }  


})





// displaying json with get
app.get('/api/useage',  (req, res) => {

    // try{
    //     const {key, page, limit} = req.query
    //     const skip = (page = 1) * limit
    //     const search = key ? {
    //         "$or": [
    //             {company: {$regex: key, $options: "$i"}},
    //             {description: {$regex: key, $options: "$i"}},
    //             {test1: {$regex: key, $options: "$i"}},
    //             {useage: {$regex: key, $options: "$i"}},


    //         ]
            
    //     } : {}
    //     const data = await companyModel.find(search)
    //     .populate("useage").skip(skip).limit(limit)
    //     console.log(data)
    //     res.json({
    //         data
    // })
    // }  catch(error) {
    //     console.log(error)
    // }  

    // try{
    //     const {key, page, limit} = req.query
    //     const skip = (page = 1) * limit
    //     const search = key ? {
    //         "$or": [
    //             {company: {$regex: key, $options: "$i"}},
    //             {description: {$regex: key, $options: "$i"}},
    //         ]
            
    //     } : {}
    //     const data = await useageModel.find(search)
    //     .populate("useage").skip(skip).limit(limit)
        
    //     res.json({
    //         data
    // })
    // }  catch(error) {
    //     console.log(error)
    // }       
    // const useage = [
    //     {
    //         "title": "Learn Git in a Month of Lunches",
    //         "isbn": "1617292419",
    //         "pageCount": 0,
    //         "thumbnailUrl":
    //             "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.useage-thumb-images/umali.jpg",
    //         "status": "MEAP",
    //         "authors": ["Rick Umali"],
    //         "categories": []
    //     },
    //     {
    //         "title": "MongoDB in Action, Second Edition",
    //         "isbn": "1617291609",
    //         "pageCount": 0,
    //         "thumbnailUrl":
    //             "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.useage-thumb-images/banker2.jpg",
    //         "status": "MEAP",
    //         "authors": [
    //             "Kyle Banker",
    //             "Peter Bakkum",
    //             "Tim Hawkins",
    //             "Shaun Verch",
    //             "Douglas Garrett"
    //         ],
    //         "categories": []
    //     },
    //     {
    //         "title": "Getting MEAN with Mongo, Express, Angular, and Node",
    //         "isbn": "1617292036",
    //         "pageCount": 0,
    //         "thumbnailUrl":
    //             "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.useage-thumb-images/sholmes.jpg",
    //         "status": "MEAP",
    //         "authors": ["Simon Holmes"],
    //         "categories": []
    //     }
    // ];

    //call back function to retrive data and log to the console
    useageModel.find((err, data) => {
        console.log(data);
        res.json(data)
    })
})

    //searching data base fro useage by id
    app.get('/api/useage/:id', (req, res) => {
        console.log(req.params.id);
        useageModel.findById(req.params.id, (err, data) => {
            res.json(data);
        })
    })
    
    // app.get('/api/useage/:key', (req, res) => {
    //     res.json("seach done")
    //     })



        // app.get("/api/useage/:key",async (req,res)=>{
        //     let data = await useageModel.find(
        //         {
        //             "$or":[
        //                 {company:{$regex:req.params.key}},
        //                 {date:{$regex:req.params.key}}
        //             ]
        //         }
        //     )
        //     res.json(data);
        
        // })
    
     //searching data base fro useage by id
    //  app.get('/api/useage/', async (req, res) => {
    //     try{
    //         const {key, page, limit} = req.query
    //         const skip = (page = 1) * limit
    //         const search = key ? {
    //             "$or": [
    //                 {company: {$regex: key, $options: "$i"}},
    //                 {description: {$regex: key, $options: "$i"}},
    //             ]
                
    //         } : {}
    //         const data = await useageModel.find(search)
    //         .populate("useage").skip(skip).limit(limit)
    //         console.log(data)
    //         res.json({
    //             data
    //     })
    //     }  catch(error) {
    //         console.log(error)
    //     }       
/// LAST ONE
    app.get('/api/useage', async (req, res) => {


    try{
        const {key, page, limit} = req.query
       // const skip = (page = 1) * limit
        const search = key ? {
            "$or": [
                {company: {$regex: key, $options: "$i"}},
                {date: {$regex: key, $options: "$i"}},
                {useage: {$regex: key, $options: "$i"}}


            ]
            
        } : {}
        const data = await useageModel.find(search)
        //.populate("useage").skip(skip).limit(limit)
        console.log(data)
        res.json
        
            ({data})
    }  catch(error) {
        console.log(error)
    }  


})







//getting information from the form and logging to the console using post method

app.post('/api/useage/', (req, res) => {
    useageModel.create({
        company: req.body.company,
        date: req.body.date,
        useage: req.body.useage
    }).then()
    console.log(req.body);
})

//creating put to update useage updates and outputs to console 
app.put('/api/useage/:id', (req, res) => {
    console.log("update" + req.params.id);
    useageModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, data) => {
        res.send(data);
    })
})


app.delete('/api/useage/:id',(req, res) => {
    console.log("Deleteing: "+req.params.id);

    useageModel.deleteOne({_id:req.params.id}, (error, data)=>{
    res.send(data);
    })


})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)


})
