const homes = require("../data/data");
const Home = require("../models/home");
const Favourite = require("../models/favourite");
const mongoose=require('mongoose');
exports.addbnb=(req,res,next)=>{
res.render('host');
};

exports.favourites = (req, res, next) => {

  const houseId = req.params.id;

  const favourite = new Favourite({
    homeId: houseId
  });

  favourite
    .save()
    .then(() => {
      console.log("Added to favourites");
      res.redirect("/rent");
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Error adding favourite");
    });
};
exports.removeFavourite = async (req, res) => {
  try {
    const homeId = req.params.id;

    await Favourite.findOneAndDelete({
      homeId: homeId
    });

    res.redirect('/rent');
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to remove favourite");
  }
};

exports.Getfav = (req, res, next) => {
  Favourite.find({})
    .then(favourites => {

      const homeIds = favourites.map(fav => fav.homeId);

      return Home.find({
        _id: { $in: homeIds }
      });
    })
    .then(favHome => {
      res.render("favourites", { favHome });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Error fetching favourites");
    });
};


exports.myBooking=(req,res,next)=>{
res.render('myBookings');
}

exports.myHome = (req, res, next) => {
   Home.find({})
        .then(homes => {
            res.render("myHomes", { homes });
        })
        .catch(error => {
            console.log(error);
            res.status(500).send("Error fetching homes");
        });
};

exports.rents = (req, res, next) => {

  Home.find({})
    .then(homes => {
      res.render("rent", { homes });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Error fetching homes");
    });

};
exports.submits = async (req, res, next) => {
  try {

    const home = new Home({
      housename: req.body.housename,
      price: Number(req.body.price),
      location: req.body.location,
      image: req.body.image,
      description: req.body.description
    });

    await home.save();

    console.log("Home saved to MongoDB");

    res.render("submit");

  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving home");
  }
};
