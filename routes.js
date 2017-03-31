var express = require('express'),
    router = express.Router(),

    shopsMock = {
        shops: [{
            id: 'macGuid',
            name: 'MacDonals',
            products: [{
                    id: 'bergerGuid',
                    name: 'Berger',
                    category: 'Type 1',
                    price: '60',
                    subproducts: [{
                            id: 'bbqGuid',
                            name: 'Bbq Deep',
                            price: '2'
                        },
                        {
                            id: 'saladGuid',
                            name: 'Salad',
                            price: '5'
                        }
                    ]
                }, {
                    id: 'pizzaGuid',
                    name: 'pizza',
                    category: 'Type 2',
                    price: '80',
                    subproducts: [{
                        id: 'saladGuid',
                        name: 'Salad',
                        price: '5'
                    }]
                }, {
                    id: 'pitaGuid',
                    name: 'Pita',
                    category: 'Type 3',
                    price: '25',
                    subproducts: [{
                        id: 'curryGuid',
                        name: 'Curry Deep',
                        price: '3'
                    }]
                },
                {
                    id: 'drumGuid',
                    name: 'Drum',
                    category: 'Type 4',
                    price: '35',
                    subproducts: [{
                        id: 'chilliGuid',
                        name: 'Chilli Deep',
                        price: '7'
                    }]
                }
            ],
            address: 'Vasagatan 24, Stockholm',
            location: {
                type: 'Point',
                coordinates: [59.3311583, 18.0597756]
            },
            phone: ['08-14 10 37'],
            type: 'Fast food',
            cvcNumber: 'cvcGuid',
            openingHours: [{
                    day: 'mon',
                    time: '07:00 -22:00'
                },
                {
                    day: 'tue',
                    time: '07:00 -22:00'
                },
                {
                    day: 'wed',
                    time: '07:00 -22:00'
                },
                {
                    day: 'thu',
                    time: '07:00 -22:00'
                },
                {
                    day: 'fri',
                    time: '07:00 -22:00'
                },
                {
                    day: 'sat',
                    time: '07:00 -22:00'
                },
                {
                    day: 'sun',
                    time: '07:00 -22:00'
                }
            ],
            notice: {
                message: 'This is a notice!',
                startDate: '2017-01-01',
                endDate: '2017-04-01'
            }
        }]
    }

router.use(function(req, res, next) {
    next();
});

router.get('/', function(req, res) {
    res.render('index');
    // res.status(404).send({"error": "invaild request, use api instaed"})
});

router.post('/', function(req, res) {
    res.status(404).send({
        'error': 'invaild request, use api instaed'
    });
});

router.post('/signin', function(req, res) {
    res.status(200).send({
        token: Math.floor(Math.random() * 1000)
    });
});

router.post('/signup', function(req, res) {
    res.status(200).send({
        token: Math.floor(Math.random() * 1000)
    });
});

router.get('/shops', function(req, res) {
    res.status(200).send(shopsMock.shops.find(s => s.id == 'macGuid'));
});

router.get('/shops/:shopId/products/:productId', function(req, res) {
    res.status(200)
        .send(shopsMock.shops
            .find(s => s.id == req.params.shopId)
            .products
            .find(p => p.id == req.params.productId));
});

module.exports = router;