const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/movies', function (req, res) { 
      let myFavouriteMovies = ["Forest Gump","Notebook","Loveyou Forever","Iron-Man","Iterstellar","World War-z","Avengers-Endgame","Imagine me and you"];
    res.send( myFavouriteMovies)
});
router.get('/movies/:indexNumber', function (req, res) { 
    const FavWebSeries = ["Dark","Stranger Things","Sweet-Tooth","Black Mirror","Maid","Loki"]
     const i = req.params.indexNumber 
     if(i < FavWebSeries.length){
         res.send(FavWebSeries[i])

     }
       else{
           res.send("There's an error")
       }
});
router.get('/flims', function(req, res) {
    [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
});

router.get('/arry', function(req , res){
    const n = [1,2,3,4,5,7,8,9]
    let arr = 
  res.send(arr) 
});



let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {
    //LOGIC WILL COME HERE
    for (let i = 0; i < players.length; i++) {
        console.log(req.body.name === players[i].name);
        if(req.body.name === players[i].name){
            res.send({msg: "This player is already exist"})
            break;
        } else {
            players.push(req.body);
            break;
        }
        
    }
        res.send(  { data: players , status: true }  )
 });






module.exports = router;
// adding this comment for no reason
