const express = require('express');
const router = express.Router();
const {format} = require("date-fns/format")



const messages = [
  {
    text:"Hey There",
    user:"Amando",
    added: format(new Date(), "do/MMM/yyyy")
  },{
    text:"I just meowed",
    user:"Kitty",
    added: format(new Date(), "do/MMM/yyyy")
  }
]

function sendNew(){
  res.redirect("/new")
}

router.get('/', function(req, res, next) { //? Do i loop here or in index.pug (i think in index.pug)
  res.render('index', { messages:messages,  sendNew:sendNew});
});

router.post("/new", function(req,res,next){ //I think this should send the inside of author and message and then a new date thats formated
    const messageText= req.body.message;
    const messageUser= req.body.author;
    const messageDate = format(new Date, "do/MMM/yyyy")
    messages.push({text:messageText, user:messageUser, added:messageDate})
    res.redirect("/")
})

module.exports = router;
