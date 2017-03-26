var express = require('express'),
    router = express.Router(),

    shopsMock = {
        shops: [{
            id: "macGuid",
            name: "MacDonals",
            products: [{
                    id: "bergerGuid",
                    name: "Berger",
                    category: "Type 1",
                    price: "60",
                    ingradients: [{
                        id: "bbqGuid",
                        name: "Bbq Deep"
                    }]
                }, {
                    id: "pizzaGuid",
                    name: "pizza",
                    category: "Type 2",
                    price: "80",
                    ingradients: [{
                        id: "saladGuid",
                        name: "Salad"
                    }]
                }, {
                    id: "pitaGuid",
                    name: "Pita",
                    category: "Type 3",
                    price: "25",
                    ingradients: [{
                        id: "curryGuid",
                        name: "Curry Deep"
                    }]
                },
                {
                    id: "drumGuid",
                    name: "Drum",
                    category: "Type 4",
                    price: "35",
                    ingradients: [{
                        id: "chilliGuid",
                        name: "Chilli Deep"
                    }]
                }
            ],
            address: "Vasagatan 24, Stockholm",
            location: {
                type: "Point",
                coordinates: [59.3311583, 18.0597756]
            },
            phone: ["08-14 10 37"],
            type: "Fast food",
            cvcNumber: "cvcGuid",
            openingHours: [{
                    day: "mon",
                    time: "07:00 -22:00"
                },
                {
                    day: "tue",
                    time: "07:00 -22:00"
                },
                {
                    day: "wed",
                    time: "07:00 -22:00"
                },
                {
                    day: "thu",
                    time: "07:00 -22:00"
                },
                {
                    day: "fri",
                    time: "07:00 -22:00"
                },
                {
                    day: "sat",
                    time: "07:00 -22:00"
                },
                {
                    day: "sun",
                    time: "07:00 -22:00"
                },
            ],
            notice: "This is a notice!"
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
    res.status(404).send({
        "error": "invaild request, use api instaed"
    });
});

router.post("/signin", function(req, res) {
    res.status(200).send({
        token: Math.floor(Math.random() * 1000)
    });
});

router.post("/signup", function(req, res) {
    res.status(200).send({
        token: Math.floor(Math.random() * 1000)
    });
});

router.get("/shops", function(req, res) {
    res.status(200).send(shopsMock.shops.find(s => s.id == 'macGuid'));
});

module.exports = router;