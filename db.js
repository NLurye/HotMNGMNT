let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/hotel";
let selectedRooms = [];
let validLogIn = [];
let validReservation = [];
let showEmp = [];
let employees = [];
let roomsList = [];
let showRoom = [];
let locations = [];
let popRoom = [];
let graphData1 = [];
let graphData2 = [];

let initHotelDB = function () {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        dbo.dropDatabase(function () { //Delete previous db <------delete
            let rooms = [
                //rooms 10-19: first floor,  100$ per night, 150$ per night if there are 4 beds in the room.
                //rooms 20-29: second floor, 200$ per night, 250$ per night if there are 4 beds in the room.
                //rooms 30-39: third floor,  300$ per night, 350$ per night if there are 4 beds in the room.
                //rooms 40-49: fourth floor, 400$ per night, 450$ per night if there are 4 beds in the room.
                //rooms 50-59: fifth floor,  500$ per night, 550$ per night if there are 4 beds in the room.
                //rooms with 4 beds: 11,14,18,23,29,36,44,53
                //100$ per night: rooms 10,12,13,15,16,17,19
                //150$ per night: rooms 11,14,18
                //200$ per night: rooms 20,21,22,24,25,26,27,28
                //250$ per night: rooms 23,29
                //300$ per night: rooms 30,31,32,33,34,35,37,38,39
                //350$ per night: room 36
                //400$ per night: rooms 40,41,42,43,45,46,47,48,49
                //450$ per night: room 44
                //500$ per night: rooms 50,51,52,54,55,56,57,58,59
                //550$ per night: room 53

                {
                    room: 10,
                    numOfBeds: 2,
                    price: 100,
                },
                {
                    room: 11,
                    numOfBeds: 4,
                    price: 150,
                },
                {
                    room: 12,
                    numOfBeds: 2,
                    price: 100,
                },
                {
                    room: 13,
                    numOfBeds: 2,
                    price: 100,
                },
                {
                    room: 14,
                    numOfBeds: 4,
                    price: 150,
                },
                {
                    room: 15,
                    numOfBeds: 2,
                    price: 100,
                },
                {
                    room: 16,
                    numOfBeds: 2,
                    price: 100,
                },
                {
                    room: 17,
                    numOfBeds: 2,
                    price: 100,
                },
                {
                    room: 18,
                    numOfBeds: 4,
                    price: 150,
                },
                {
                    room: 19,
                    numOfBeds: 2,
                    price: 100,
                },
                {
                    room: 20,
                    numOfBeds: 2,
                    price: 200,
                },
                {
                    room: 21,
                    numOfBeds: 2,
                    price: 200,
                },
                {
                    room: 22,
                    numOfBeds: 2,
                    price: 200,
                },
                {
                    room: 23,
                    numOfBeds: 4,
                    price: 250,
                },
                {
                    room: 24,
                    numOfBeds: 2,
                    price: 200,
                },
                {
                    room: 25,
                    numOfBeds: 2,
                    price: 200,
                },
                {
                    room: 26,
                    numOfBeds: 2,
                    price: 200,
                },
                {
                    room: 27,
                    numOfBeds: 2,
                    price: 200,
                },
                {
                    room: 28,
                    numOfBeds: 2,
                    price: 200,
                },
                {
                    room: 29,
                    numOfBeds: 4,
                    price: 250,
                },
                {
                    room: 30,
                    numOfBeds: 2,
                    price: 300,
                },
                {
                    room: 31,
                    numOfBeds: 2,
                    price: 300,
                },
                {
                    room: 32,
                    numOfBeds: 2,
                    price: 300,
                },
                {
                    room: 33,
                    numOfBeds: 2,
                    price: 300,
                },
                {
                    room: 34,
                    numOfBeds: 2,
                    price: 300,
                },
                {
                    room: 35,
                    numOfBeds: 2,
                    price: 300,
                },
                {
                    room: 36,
                    numOfBeds: 4,
                    price: 350,
                },
                {
                    room: 37,
                    numOfBeds: 2,
                    price: 300,
                },
                {
                    room: 38,
                    numOfBeds: 2,
                    price: 300,
                },
                {
                    room: 39,
                    numOfBeds: 2,
                    price: 300,
                },
                {
                    room: 40,
                    numOfBeds: 2,
                    price: 400,
                },
                {
                    room: 41,
                    numOfBeds: 2,
                    price: 400,
                },
                {
                    room: 42,
                    numOfBeds: 2,
                    price: 400,
                },
                {
                    room: 43,
                    numOfBeds: 2,
                    price: 400,
                },
                {
                    room: 44,
                    numOfBeds: 4,
                    price: 450,
                },
                {
                    room: 45,
                    numOfBeds: 2,
                    price: 400,
                },
                {
                    room: 46,
                    numOfBeds: 2,
                    price: 400,
                },
                {
                    room: 47,
                    numOfBeds: 2,
                    price: 400,
                },
                {
                    room: 48,
                    numOfBeds: 2,
                    price: 400,
                },
                {
                    room: 49,
                    numOfBeds: 2,
                    price: 400,
                },
                {
                    room: 50,
                    numOfBeds: 2,
                    price: 500,
                },
                {
                    room: 51,
                    numOfBeds: 2,
                    price: 500,
                },
                {
                    room: 52,
                    numOfBeds: 2,
                    price: 500,
                },
                {
                    room: 53,
                    numOfBeds: 4,
                    price: 550,
                },
                {
                    room: 54,
                    numOfBeds: 2,
                    price: 500,
                },
                {
                    room: 55,
                    numOfBeds: 2,
                    price: 500,
                },
                {
                    room: 56,
                    numOfBeds: 2,
                    price: 500,
                },
                {
                    room: 57,
                    numOfBeds: 2,
                    price: 500,
                },
                {
                    room: 58,
                    numOfBeds: 2,
                    price: 500,
                },
                {
                    room: 59,
                    numOfBeds: 2,
                    price: 500,
                }
            ];
            let staff = [
                //in the hotel staff we got 10 workers, 2 admins and 8 workers.
                //admins:  empID: 1, 10
                //workers: empID: 2,3,4,5,6,7,8,9
                {
                    empID: 1,
                    empPass: 1,
                    admin: 1,
                },
                {
                    empID: 2,
                    empPass: 2,
                    admin: 0,


                },
                {
                    empID: 3,
                    empPass: 3,
                    admin: 0,


                },
                {
                    empID: 4,
                    empPass: 4,
                    admin: 0,

                },
                {
                    empID: 5,
                    empPass: 5,
                    admin: 0,


                },
                {
                    empID: 6,
                    empPass: 6,
                    admin: 0,


                },
                {
                    empID: 7,
                    empPass: 7,
                    admin: 0,

                },
                {
                    empID: 8,
                    empPass: 8,
                    admin: 0,

                },
                {
                    empID: 9,
                    empPass: 9,
                    admin: 0,

                },
                {
                    empID: 10,
                    empPass: 10,
                    admin: 1,

                }];
            let orders = [
                ////////////////////////////////////////////
                //                Orders                  //
                // ************************************** //
                //     FROM    TO     ROOM#   CUST_NAME   //
                // 1)  1.8     2.8     20        Tom      //
                // 2)  1.8     5.8     11        Alon     //
                // 3)  6.8     7.8     11     Anastasia   //
                // 4)  8.8     12.8    11     Anastasia   //
                // 5)  5.8     11.8    12     Anastasia   //
                // 6)  4.8     6.8     20        Tom      //
                // 7)  10.8    14.8    20        Tom      //
                // 8)  2.8     8.8     13        Tal      //
                // 9)  7.8     9.8     20        Alon     //
                //10)  8.8     13.8    13        Alon     //
                //11)  10.8    12.8    14        Tal      //
                //12)  17.8    19.8    20        Tom      //
                //13)  17.8    20.8    11     Anastasia   //
                //14)  20.8    25.8    20        Tal      //
                //15)  20.8    25.8    13        Alon     //
                //16)  20.8    25.8    14        Tom      //
                //17)  21.8    22.8    11        Tom      //
                //18)  21.8    24.8    12     Anastasia   //
                //19)  26.8    30.8    11        Tal      //
                //20)  27.8    29.8    20        Alon     //
                ////////////////////////////////////////////
                //
                // times with NO ORDERS: 14.8-17.8, 25.8-26.8, 30.8-31.8
                //
                // TO_DO: we need to add validations to from&to dates:
                //        1) if(from == to) ===> alert("ERR: cant get a room for one day only)
                //        2) if(from > to) ===> alert("ERR: fromDate needs to be prior to toDate)
                //        3) if(from == to == null) ===> alert("ERR: must enter dates)
                {
                    room: 20,
                    from: new Date('2022-08-22'),//'2022-08-01'
                    to: new Date('2022-08-25'),//2022-08-02
                    custName: "Tom",
                    custID: "111111110"
                },
                {
                    room: 11,
                    from: new Date('2022-08-01'),
                    to: new Date('2022-08-05'),
                    custName: "Alon",
                    custID: "222222222"
                },
                {
                    room: 11,
                    from: new Date('2022-08-06'),
                    to: new Date('2022-08-07'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 11,
                    from: new Date('2022-08-08'),
                    to: new Date('2022-08-12'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 12,
                    from: new Date('2022-08-05'),
                    to: new Date('2022-08-11'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 20,
                    from: new Date('2022-08-04'),
                    to: new Date('2022-08-06'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 20,
                    from: new Date('2022-08-10'),
                    to: new Date('2022-08-14'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 13,
                    from: new Date('2022-08-02'),
                    to: new Date('2022-08-08'),
                    custName: "Tal",
                    custID: "333333333"
                },
                {
                    room: 20,
                    from: new Date('2022-08-07'),
                    to: new Date('2022-08-09'),
                    custName: "Alon",
                    custID: "222222222"
                },
                {
                    room: 13,
                    from: new Date('2022-08-08'),
                    to: new Date('2022-08-13'),
                    custName: "Alon",
                    custID: "222222222"
                },
                {
                    room: 14,
                    from: new Date('2022-08-10'),
                    to: new Date('2022-08-12'),
                    custName: "Tal",
                    custID: "333333333"
                },
                {
                    room: 20,
                    from: new Date('2022-08-17'),
                    to: new Date('2022-08-19'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 11,
                    from: new Date('2022-08-17'),
                    to: new Date('2022-08-20'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 20,
                    from: new Date('2022-08-20'),
                    to: new Date('2022-08-25'),
                    custName: "Tal",
                    custID: "333333333"
                },
                {
                    room: 13,
                    from: new Date('2022-08-20'),
                    to: new Date('2022-08-25'),
                    custName: "Alon",
                    custID: "222222222"
                },
                {
                    room: 14,
                    from: new Date('2022-08-20'),
                    to: new Date('2022-08-25'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 11,
                    from: new Date('2022-08-21'),
                    to: new Date('2022-08-22'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 12,
                    from: new Date('2022-08-21'),
                    to: new Date('2022-08-24'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 11,
                    from: new Date('2022-08-26'),
                    to: new Date('2022-08-30'),
                    custName: "Tal",
                    custID: "333333333"
                },
                {
                    room: 20,
                    from: new Date('2022-08-27'),
                    to: new Date('2022-08-29'),
                    custName: "Alon",
                    custID: "222222222"
                }

            ];
            let attractions = [
                {
                    lat: 32.068893,
                    lng: 34.772175,
                    description: "SanYang Restaurant"
                },
                {
                    lat: 32.06733,
                    lng: 34.770141,
                    description: "HaNasikh Bar&RoofTop"
                },
                {
                    lat: 32.065147,
                    lng: 34.761035,
                    description: "Charles Clores Park"
                },
                {
                    lat: 32.075379,
                    lng: 34.765164,
                    description: "Trumpeldor Beach"
                },
                {
                    lat: 32.06764,
                    lng: 34.783383,
                    description: "TLV Fashion Mall"
                },
                {
                    lat: 32.072077,
                    lng: 34.779854,
                    description: "HaBima Theatre"
                },
                {
                    lat: 32.077645,
                    lng: 34.768365,
                    description: "HaBait HaTailandi"
                },
                {
                    lat: 32.064412,
                    lng: 34.772549,
                    description: "Beit HaKnesset HaGadol"
                },
                {
                    lat: 32.058691,
                    lng: 34.762235,
                    description: "HaTahana Park"
                },
                {
                    lat: 32.073857,
                    lng: 34.769234,
                    description: "Pinsker 9 Bar"
                }
            ];
            let ordersHistory = [
                ////////////////////////////////////////////
                //          OrdersHistory 2021            //
                // ************************************** //
                //     FROM    TO     ROOM#   CUST_NAME   //
                // 1)  29.9    5.10    20        Tom      //
                // 2)  1.8     5.8     11        Alon     //
                // 3)  6.8     7.8     11     Anastasia   //
                // 4)  8.8     12.8    11     Anastasia   //
                // 5)  5.8     11.8    12     Anastasia   //
                // 6)  4.8     6.8     38        Tom      //
                // 7)  10.8    14.8    23        Tom      //
                // 8)  2.8     8.8     25        Tal      //
                // 9)  7.8     9.8     51        Alon     //
                //10)  8.8     13.8    44        Alon     //
                //11)  10.8    12.8    14        Tal      //
                //12)  17.8    19.8    10        Tom      //
                //13)  17.8    20.8    18     Anastasia   //
                //14)  20.8    25.8    37        Tal      //
                //15)  20.8    25.8    47        Alon     //
                //16)  20.8    25.8    57        Tom      //
                //17)  21.8    22.8    11        Tom      //
                //18)  21.8    24.8    10     Anastasia   //
                //19)  26.8    30.8    48        Tal      //
                //20)  27.8    29.8    35        Alon     //
                ////////////////////////////////////////////
                {
                    room: 20,
                    from: new Date('2021-09-29'),
                    to: new Date('2021-10-05'),
                    custName: "Tom",
                    custID: "111111111"//before adding a new prev order check if custID already exist -> add new date. if not exist -> new prev order.
                },
                {
                    room: 11,
                    from: new Date('2021-08-01'),
                    to: new Date('2021-08-05'),
                    custName: "Alon",
                    custID: "222222222"
                },
                {
                    room: 11,
                    from: new Date('2021-08-06'),
                    to: new Date('2021-08-07'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 11,
                    from: new Date('2021-08-08'),
                    to: new Date('2021-08-12'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 12,
                    from: new Date('2021-08-05'),
                    to: new Date('2021-08-11'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 38,
                    from: new Date('2021-08-04'),
                    to: new Date('2021-08-06'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 23,
                    from: new Date('2021-08-10'),
                    to: new Date('2021-08-14'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 25,
                    from: new Date('2021-08-02'),
                    to: new Date('2021-08-08'),
                    custName: "Tal",
                    custID: "333333333"
                },
                {
                    room: 51,
                    from: new Date('2021-08-07'),
                    to: new Date('2021-08-09'),
                    custName: "Alon",
                    custID: "222222222"
                },
                {
                    room: 44,
                    from: new Date('2021-08-08'),
                    to: new Date('2021-08-13'),
                    custName: "Alon",
                    custID: "222222222"
                },
                {
                    room: 14,
                    from: new Date('2021-08-10'),
                    to: new Date('2021-08-12'),
                    custName: "Tal",
                    custID: "333333333"
                },
                {
                    room: 10,
                    from: new Date('2021-08-17'),
                    to: new Date('2021-08-19'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 18,
                    from: new Date('2021-08-17'),
                    to: new Date('2021-08-20'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 37,
                    from: new Date('2021-08-20'),
                    to: new Date('2021-08-25'),
                    custName: "Tal",
                    custID: "333333333"
                },
                {
                    room: 47,
                    from: new Date('2021-08-20'),
                    to: new Date('2021-08-25'),
                    custName: "Alon",
                    custID: "222222222"
                },
                {
                    room: 57,
                    from: new Date('2021-08-20'),
                    to: new Date('2021-08-25'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 11,
                    from: new Date('2021-08-21'),
                    to: new Date('2021-08-22'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 10,
                    from: new Date('2021-08-21'),
                    to: new Date('2021-08-24'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 48,
                    from: new Date('2021-08-26'),
                    to: new Date('2021-08-30'),
                    custName: "Tal",
                    custID: "333333333"
                },
                {
                    room: 35,
                    from: new Date('2021-08-27'),
                    to: new Date('2021-08-29'),
                    custName: "Alon",
                    custID: "222222222"
                }
                ];
            dbo.collection("Rooms").insertMany(rooms, function (err, res) {
                if (err) throw err;
            });
            dbo.collection("Staff").insertMany(staff, function (err, res) {
                if (err) throw err;
            });
            dbo.collection("Orders").insertMany(orders, function (err, res) {
                if (err) throw err;
            });
            dbo.collection("OrdersHistory").insertMany(ordersHistory, function (err, res) {
                if (err) throw err;
            });
            dbo.collection("Attractions").insertMany(attractions, function (err, res) {
                if (err) throw err;
            });
        });
    });
}
let logIn = function (id, pass) { ///<-----add encryption, admin?
    MongoClient.connect(url, function (err, db) {
        if (err) console.log(err);
        let dbo = db.db("hotel");
        let staff = dbo.collection("Staff");
        staff.find(
            {
                empID: parseInt(id),
                empPass: parseInt(pass)
            }
        ).toArray(function (err, logInRes) {
            if (err) throw err;
            else {
                validLogIn.length = 0;
                if (logInRes.length === 0)
                    console.log("Login error");
                else {
                    validLogIn.push(logInRes);
                }
            }
            db.close();
        });
    });
}
let selectRoomsByDates = function (selected_from, selected_to,price,beds) {//
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let orders = dbo.collection("Orders");
        orders.aggregate([
            // Stage 1: Filter order documents by dates
            {
                $match:
                    {
                        from: {$lt: new Date(selected_to)},
                        to: {$gt: new Date(selected_from)}
                    }
            },
            // Stage 2: Group by room
            {
                $group: {_id: "$room"}
            }

        ]).toArray(function (err, queryResult) {
            if (err) throw err;
            let interruptions = queryResult.map(a => a._id);
            let rooms = dbo.collection("Rooms");
            let my_beds = 0;
            let my_price = Number.MAX_VALUE;
            if(beds === ''){
                beds = my_beds;
            }
            else {
                beds = parseInt(beds);
            }
            if(price === ''){
                price=my_price;
            }
            else {
                price = parseInt(price);
            }
            rooms.find(
                {
                        numOfBeds: {$gte: beds},
                        price: {$lte: price},
                        room: {$nin: interruptions}
                      }
            ).toArray(function (err, appropriateRooms) {
                if (err) throw err;
                selectedRooms.length = 0;
                appropriateRooms.forEach(item => {
                    selectedRooms.push(item);//import all appropriate rooms
                });
                let appropriate = selectedRooms.map(a => a.room);
                getRoomsStatistics(orders,appropriate).toArray(function (err, queryResult){
                    if (queryResult.length!==0) {
                        rooms.find({room: queryResult[0]._id}).tryNext(function (err, doc) {
                            popRoom.push(doc); //import most popular room
                        });
                    }
                });
            });
        });
    });
}
let getRoomsStatistics = function (orders,appropriate) {
    return orders.aggregate([
            {
                $match:
                    {
                        room:{$in: appropriate}
                    }
            },
            {
                $group :
                    {
                        _id : '$room',
                        count : {$sum : 1}
                    }
            },

            { $sort : { count : -1 } }
        ]
    )
}
let statisticsForGraph = function (collection,key,arr){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let orders = dbo.collection(collection);
        return orders.aggregate([
                {
                    $group :
                        {
                            _id : key,
                            count : {$sum : 1}
                        }
                },

                { $sort : { count : -1 } }
            ]
        ).toArray(function (err, q) {
            if (err) throw err;
            arr.length = 0;
            q.forEach(item => {
                arr.push(item);//import all appropriate rooms
            })
            }
        );
})
}
let checkIn =function(cust_id,cust_name){
    MongoClient.connect(url, function (err, db) {
    if (err) console.log(err);
        let dbo = db.db("hotel");
        let now = new Date();
        let orders = dbo.collection("Orders");
        orders.find({
            custID: cust_id,
            custName: cust_name,
            from: {$lte: now},
            to: {$gt: now}
        }).toArray(function (err, CheckInRes) {
            if (err) throw err;
            else {
                validReservation.length = 0;
                if (CheckInRes.length === 0)
                    console.log("Check in error");
                else {
                    CheckInRes.forEach(item => {
                        validReservation.push(item);
                    });
                    console.log(validReservation);

                }
            }
            db.close();
        });
    });
}
let checkOut = function (cust_id, cust_name, sfrom, sto) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let orders = dbo.collection("Orders");
        let ordersHistory = dbo.collection("OrdersHistory");
        orders.find({
            from: {$eq: new Date(sfrom)},
            to: {$eq: new Date(sto)},
            custID: cust_id,
            custName: cust_name
        }).toArray(function (err, checkOutRes) {
            if (err) throw err;
            else {
                if (checkOutRes.length === 0)
                    console.log("Reservation doesn't exist...");
                else {
                    ordersHistory.insertMany(checkOutRes, function (err, res) {
                        if (err) throw err;
                    });
                    checkOutRes.forEach(item => {
                        orders.deleteOne(item);
                    });

                }
            }
        });
    });
}
let addOrder = function (curRoom, from, to, custName, custID) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let order =
            {
                room: parseInt(curRoom),
                from: new Date(from),
                to: new Date(to),
                custName: custName,
                custID: custID
            }
        dbo.collection("Orders").insertOne(order, function (err, res) {
            if (err) throw err;
        });
    });
}
let deleteOrder = function (cust_id, cust_name, from, to) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let orders = dbo.collection("Orders");
        try {
            orders.deleteMany(
                {
                    custName: cust_name,
                    custID: cust_id,
                    from: new Date(from),
                    to: new Date(to),
                });
        } catch (e) {
            print(e);
        }
    });
}
let addRoom = function (roomNumber, bedsNumber, myPrice) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let room =
            {
                room: parseInt(roomNumber),
                numOfBeds: parseInt(bedsNumber),
                price: parseInt(myPrice)
            }
        dbo.collection("Rooms").insertOne(room, function (err, res) {
            if (err) throw err;
        });
    });
}
let deleteRoom = function (roomNumber) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let orders = dbo.collection("Rooms");
        try {
            orders.deleteOne(
                {
                    room: parseInt(roomNumber)
                });
        } catch (e) {
            print(e);
        }
    });
}
let deleteEmployee = function (emp_ID) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let staff = dbo.collection("Staff");
        try {
            staff.deleteOne(
                {
                    empID: parseInt(emp_ID)
                });
        } catch (e) {
            print(e);
        }
    });
}
let updateOrder = function (cust_id, cust_name, my_from, my_to, new_cust_id, new_cust_name) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let order = dbo.collection("Orders");
        try {
            order.updateMany(
                {
                    custID: cust_id,
                    custName: cust_name,
                    from: my_from,
                    to: my_to
                },
                {
                    custID: new_cust_id,
                    custName: new_cust_name
                });
        } catch (err) {
            print(err);
        }
    });
}
let addEmployee = function (emp_id, emp_pass) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let employee =
            {
                empID: parseInt(emp_id),
                empPass: parseInt(emp_pass),
                admin: 0
            }
        dbo.collection("Staff").insertOne(employee, function (err, res) {
            if (err) throw err;
        });
    });
}
let changeEmpPass = function (emp_id, emp_pass, new_emp_pass) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let employee = dbo.collection("Staff");
        employee.updateOne(
            {
                empID: parseInt(emp_id),
                empPass: parseInt(emp_pass)
            },
            {
                $set:
                    {
                        empPass: parseInt(new_emp_pass)
                    }
            });
    });
}
let updateRoom = function (roomNum, bedsNum, myPrice) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let room = dbo.collection("Rooms");
        room.updateOne(
            {
                room: parseInt(roomNum)
            },
            {
                $set:
                    {
                        numOfBeds: parseInt(bedsNum),
                        price: parseInt(myPrice)
                    }

            });
    });
}
let searchEmp = function (empID) { ///<-----add encryption, admin?
    MongoClient.connect(url, function (err, db) {
        if (err) console.log(err);
        console.log(empID)
        let dbo = db.db("hotel");
        let staff = dbo.collection("Staff");
        staff.find(
            {empID: parseInt(empID)}
        ).toArray(function (err, searchEmpRes) {
            if (err) throw err;
            else {
                showEmp.length = 0;
                if (searchEmpRes.length === 0)
                    console.log("Employee not found");
                else {
                    showEmp.push(searchEmpRes);
                }
            }
            db.close();
        });
    });
}
let getStaff = function () {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let staff = dbo.collection("Staff");
        staff.find({}).toArray(function (err, getEmpResult) {
            if (err) throw err;
            else {
                employees.length = 0;
                getEmpResult.forEach(item => {
                    employees.push(item);
                });
            }
        });
    });
}
let getRooms = function () {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let rooms = dbo.collection("Rooms");
        rooms.find({}).toArray(function (err, getRoomsResult) {
            if (err) throw err;
            else {
                roomsList.length = 0;
                getRoomsResult.forEach(item => {
                    roomsList.push(item);
                });
            }
        });
    });
}
let searchRoom = function (roomNumber,beds,price) {
    MongoClient.connect(url, function (err, db) {
        if (err) console.log(err);
        let dbo = db.db("hotel");
        let rooms = dbo.collection("Rooms");
        let my_beds = 0;
        let my_roomNumber = 0;
        let my_price = Number.MAX_VALUE;
        if (roomNumber !== '') {
            roomNumber = parseInt(roomNumber);
            beds = my_beds;
            price = my_price;
            rooms.find(
                {
                    room: roomNumber
                }
            ).toArray(function (err, searchRoomRes) {
                if (err) throw err;
                showRoom.length = 0;
                if (searchRoomRes.length === 0)
                    console.log('room not found');
                else {
                    showRoom.push(searchRoomRes);
                }
            });
        } else {

            if (beds !== '' && price !== '') {
                beds = parseInt(beds);
                price = parseInt(price);
            }
            if (beds !== '' && price === '') {
                price = my_price;
                beds = parseInt(beds);
            }
            if (beds === '' && price !== '') {
                price = parseInt(price);
                beds = my_beds;
            }

            roomNumber = my_roomNumber;
            rooms.find(
                {
                    room: {$gte: roomNumber},
                    numOfBeds: {$gte: beds},
                    price: {$lte: price}
                }
            ).toArray(function (err, searchRoomRes) {
                if (err) throw err;
                showRoom.length = 0;
                if (searchRoomRes.length === 0)
                    console.log('room not found');
                else {
                    showRoom.push(searchRoomRes);
                }
            });
        }
    });
}
let getLocations = function () {
    MongoClient.connect(url, function (err, db) {
        if (err) console.log(err);
        let dbo = db.db("hotel");
        let attractions = dbo.collection("Attractions");
        attractions.find({}).toArray(function (err, attractionsRes) {
            if (err) throw err;
            else attractionsRes.forEach(item => {
                locations.push(item)
            });
        });
    });
}

module.exports.graphData1 = graphData1;
module.exports.graphData2 = graphData2;
module.exports.locations = locations;
module.exports.validLogIn = validLogIn;
module.exports.selectedRooms = selectedRooms;
module.exports.employees = employees;
module.exports.roomsList = roomsList;
module.exports.validReservation = validReservation;
module.exports.showEmp = showEmp;
module.exports.showRoom = showRoom;
module.exports.popRoom = popRoom;
module.exports.statisticsForGraph = statisticsForGraph;
module.exports.init = initHotelDB;
module.exports.addOrder = addOrder;
module.exports.selectRooms = selectRoomsByDates;
module.exports.logIn = logIn;
module.exports.checkIn = checkIn;
module.exports.checkOut = checkOut;
module.exports.deleteOrder = deleteOrder;
module.exports.addRoom = addRoom;
module.exports.deleteRoom = deleteRoom;
module.exports.deleteEmployee = deleteEmployee;
module.exports.updateOrder = updateOrder;
module.exports.signIn = addEmployee;
module.exports.changeEmpPass = changeEmpPass;
module.exports.updateRoom = updateRoom;
module.exports.searchEmp = searchEmp;
module.exports.getStaff = getStaff;
module.exports.getRooms = getRooms;
module.exports.searchRoom = searchRoom;
module.exports.getLocations = getLocations;







