let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/msgs";
let queryResult;
//fs = require('fs');
let initHotelDB = function () {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        dbo.dropDatabase(function () { //Delete previous db <------delete
            let rooms = [
                {
                    room: 1,
                    numOfBeds: 2,
                },
                {
                    room: 2,
                    numOfBeds: 2,
                },
                {
                    room: 3,
                    numOfBeds: 2,
                },
                {
                    room: 4,
                    numOfBeds: 2,
                },
                {
                    room: 5,
                    numOfBeds: 2,
                },
                {
                    room: 6,
                    numOfBeds: 2,
                },
                {
                    room: 7,
                    numOfBeds: 2,
                },
                {
                    room: 8,
                    numOfBeds: 2,
                },
                {
                    room: 9,
                    numOfBeds: 2,
                },
                {
                    room: 10,
                    numOfBeds: 2,
                },
                {
                    room: 11,
                    numOfBeds: 2,
                },
                {
                    room: 12,
                    numOfBeds: 2,
                },
                {
                    room: 13,
                    numOfBeds: 2,
                },
                {
                    room: 14,
                    numOfBeds: 2,
                },
                {
                    room: 15,
                    numOfBeds: 2,
                },
                {
                    room: 16,
                    numOfBeds: 2,
                },
                {
                    room: 17,
                    numOfBeds: 2,
                },
                {
                    room: 18,
                    numOfBeds: 2,
                },
                {
                    room: 19,
                    numOfBeds: 2,
                },
                {
                    room: 20,
                    numOfBeds: 2,
                },
                {
                    room: 21,
                    numOfBeds: 2,
                },
                {
                    room: 22,
                    numOfBeds: 2,
                },
                {
                    room: 23,
                    numOfBeds: 2,
                },
                {
                    room: 24,
                    numOfBeds: 2,
                },
                {
                    room: 25,
                    numOfBeds: 2,
                },
                {
                    room: 26,
                    numOfBeds: 2,
                },
                {
                    room: 27,
                    numOfBeds: 2,
                },
                {
                    room: 28,
                    numOfBeds: 2,
                },
                {
                    room: 29,
                    numOfBeds: 2,
                },
                {
                    room: 30,
                    numOfBeds: 2,
                },
                {
                    room: 31,
                    numOfBeds: 2,
                },
                {
                    room: 32,
                    numOfBeds: 2,
                },
                {
                    room: 33,
                    numOfBeds: 2,
                },
                {
                    room: 34,
                    numOfBeds: 2,
                },
                {
                    room: 35,
                    numOfBeds: 2,
                },
                {
                    room: 36,
                    numOfBeds: 2,
                },
                {
                    room: 37,
                    numOfBeds: 2,
                },
                {
                    room: 38,
                    numOfBeds: 2,
                },
                {
                    room: 39,
                    numOfBeds: 2,
                },
                {
                    room: 40,
                    numOfBeds: 2,
                },
                {
                    room: 41,
                    numOfBeds: 2,
                },
                {
                    room: 42,
                    numOfBeds: 2,
                },
                {
                    room: 43,
                    numOfBeds: 2,
                },
                {
                    room: 44,
                    numOfBeds: 2,
                },
                {
                    room: 45,
                    numOfBeds: 2,
                },
                {
                    room: 46,
                    numOfBeds: 2,
                },
                {
                    room: 47,
                    numOfBeds: 2,
                },
                {
                    room: 48,
                    numOfBeds: 2,
                },
                {
                    room: 49,
                    numOfBeds: 2,
                },
                {
                    room: 50,
                    numOfBeds: 2,
                }];
            let staff = [
                {
                    empID: 1,
                    empPass: 1,
                    admin: "true"
                },
                {
                    empID: 2,
                    empPass: 2,
                    admin: "false"

                },
                {
                    empID: 3,
                    empPass: 3,
                    admin: "false"

                },
                {
                    empID: 4,
                    empPass: 4,
                    admin: "false"
                },
                {
                    empID: 5,
                    empPass: 5,
                    admin: "false"

                },
                {
                    empID: 6,
                    empPass: 6,
                    admin: "false"

                },
                {
                    empID: 7,
                    empPass: 7,
                    admin: "false"
                },
                {
                    empID: 8,
                    empPass: 8,
                    admin: "false"
                },
                {
                    empID: 9,
                    empPass: 9,
                    admin: "false"
                },
                {
                    empID: 10,
                    empPass: 10,
                    admin: "true"
                }];
            let orders = [
                {
                    room: 1,
                    from: new Date('2022-08-01'),
                    to: new Date('2022-08-02'),
                    custName: "Tom",
                    custID: "111111110"
                },
                {
                    room: 2,
                    from: new Date('2022-08-01'),
                    to: new Date('2022-08-05'),
                    custName: "Alon",
                    custID: "222222222"
                },
                {
                    room: 2,
                    from: new Date('2022-08-06'),
                    to: new Date('2022-08-07'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 2,
                    from: new Date('2022-08-08'),
                    to: new Date('2022-08-12'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 3,
                    from: new Date('2022-08-05'),
                    to: new Date('2022-08-11'),
                    custName: "Anastasia",
                    custID: "444444444"
                },
                {
                    room: 1,
                    from: new Date('2022-08-04'),
                    to: new Date('2022-08-06'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 1,
                    from: new Date('2022-08-10'),
                    to: new Date('2022-08-14'),
                    custName: "Tom",
                    custID: "111111111"
                }
            ];
            let ordersHistory = [{
                room: 1,
                from: new Date('2021-09-29'),
                to: new Date('2021-10-05'),
                custName: "Tom",
                custID: "111111111"//before adding a new prev order check if custID already exist -> add new date. if not exist -> new prev order.
            }];
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
        });
    });
}
let selectRoomsByDates = function (selected_from, selected_to) {
    //from.setHours(0,0,0,0);
    //eliminate rooms that have orders that starting before selected_to and simultaneously ending after selected_from
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let orders = dbo.collection("Orders");
        // orders.find(
        //     {
        //         from: {$lt: new Date(selected_to)},
        //         to: {$gt: new Date(selected_from)}
        //     }
        // ).toArray(function (err, queryResult) {
        //     if (err) throw err;
        //     console.log(queryResult);
        //
        //     db.close();
        // });
        orders.aggregate( [
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
                $group: { _id : "$room" }
            },{
            $lookup:{
                from: "Rooms",//collection to join
                localField: "_id",//field from the input documents
                foreignField: "room",//field from the documents of the "from" collection
                as: "inventory_docs"
            }}
        ] ).toArray(function (err, queryResult) {
                if (err) throw err;
                console.log(queryResult);

                db.close();
            });

    });

}


module.exports.init = initHotelDB;
module.exports.selectRooms = selectRoomsByDates;




