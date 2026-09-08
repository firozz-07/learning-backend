const homes = require('../data/data');
const connectDB = require("../config/mongoDb");
const { ObjectId } = require("mongodb");

exports.addbnb=(req,res,next)=>{
res.render('host');
};

exports.favourites = (req, res, next) => {

    const houseId = new ObjectId(req.params.id);

    connectDB()
        .then(db => {
            return db.collection("favourites").insertOne({
                homeId: houseId
            });
        })
        .then(() => {
            console.log("Added to favourites");
            res.redirect("/rent");
        })
        .catch(error => {
            console.log(error);
            res.status(500).send("Error adding favourite");
        });
};

exports.Getfav = (req, res, next) => {
    connectDB()
        .then(db => {
            return db.collection("favourites").find({}).toArray();
        })
        .then(favourites => {

            const homeIds = favourites.map(fav => fav.homeId);

            return connectDB()
                .then(db => {
                    return db.collection("homes")
                        .find({
                            _id: { $in: homeIds }
                        })
                        .toArray();
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
    connectDB()
        .then(db => {
            return db.collection("homes").find({}).toArray();
        })
        .then(homes => {
            res.render("myHomes", { homes });
        })
        .catch(error => {
            console.log(error);
            res.status(500).send("Error fetching homes");
        });
};

exports.rents=(req,res,next)=>{
  connectDB()
  .then(db=>{
    return db.collection("homes").find({}).toArray();
  })
  .then(homes=>{
res.render('rent',{homes});

  })
}
exports.submits=async(req,res,next)=>{
  try {
        const db = await connectDB();

        const home = {
            housename: req.body.housename,
            price: Number(req.body.price),
            location: req.body.location,
            image: req.body.image,
            description: req.body.description
        };

        await db.collection("homes").insertOne(home);

        console.log("Home saved to MongoDB");

        res.render("submit");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error saving home");
    }
}
