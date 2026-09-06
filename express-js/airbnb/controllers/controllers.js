const homes = require('../data/data');

exports.addbnb=(req,res,next)=>{
res.render('host');
};

exports.favourites=(req,res)=>{
  const houseId=Number(req.params.id);
  if(!favourite.includes(houseId)){
    favourite.push(houseId);
  }
}

exports.Getfav=(req,res,next)=>{
const favHome=homes.filter(home=>
  favourite.includes(home.id)
);
res.render('favourites',{favHome});
}

exports.myBooking=(req,res,next)=>{
res.render('myBookings');
}
exports.myHome=(req,res,next)=>{
res.render('myHomes',{homes});
}

exports.rents=(req,res,next)=>{
res.render('rent',{homes});
}
exports.submits=(req,res,next)=>{
  const home = {
        housename: req.body.housename,
        price: req.body.price,
        location:req.body.location,
        theme:req.body.theme,
        id:Math.random()
    };
  homes.push(home);
res.render('submit')
}
