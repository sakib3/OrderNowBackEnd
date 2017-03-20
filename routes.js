var express = require('express'),
    router = express.Router(),

    shopsMock = {
        "shops": [{
            "id": "macGuid",
            "name": "MacDonals",
            "products": [{
                "id": "bergerGuid",
                "name": "Berger",
                "category": "",
                "price": "123",
                "ingradients": [{
                    "id": "saltGuid",
                    "name": "Salt"
                }]
            }],
            "address": "Vasagatan 24, Stockholm",
            "location": {
                "type": "Point",
                "coordinates": [-73.856077, 40.848447]
            },
            "phone": ["08-14 10 37"],
            "type": "Fast food",
            "cvcNumber": "cvcGuid",
            "openingHours": {
                "sat": "07:00 -22:00",
                "sun": "07:00 -22:00",
                "mon": "07:00 -22:00",
                "tues": "07:00 -22:00",
                "wed": "07:00 -22:00",
                "thurs": "07:00 -22:00",
                "fri": "07:00 -22:00"
            },
            "Notice": "This is a notice!"
        }]
    };

router.use(function(req, res, next) {
    next();
});

router.get("/", function(req, res) {
    res.render('index');
    //res.status(404).send({"error": "invaild request, use api instaed"});
});

router.post("/", function(req, res) {
    res.status(404).send({ "error": "invaild request, use api instaed" });
});

router.get("/shops", function(req, res) {
    res.status(200).send(shopsMock);
});

module.exports = router;