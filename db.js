let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/msgs";

//fs = require('fs');
let InitHotelDB = function () {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        dbo.dropDatabase(function () { //Delete previous db <------delete
            let rooms = [
                {
                    roomNumber: 1,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 2,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 3,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 4,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 5,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 6,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 7,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 8,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 9,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 10,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 11,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 12,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 13,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 14,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 15,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 16,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 17,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 18,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 19,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 20,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 21,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 22,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 23,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 24,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 25,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 26,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 27,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 28,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 29,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 30,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 31,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 32,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 33,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 34,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 35,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 36,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 37,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 38,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 39,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 40,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 41,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 42,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 43,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 44,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 45,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 46,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 47,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 48,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 49,
                    numOfBeds: 2,
                },
                {
                    roomNumber: 50,
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
                    roomNum: 1,
                    from: new Date('2022 - 9 - 29'),
                    to: new Date('2022 - 10 - 5'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                        roomNum: 23,
                    from: new Date('2022 - 1 - 1'),
                    to: new Date('2022 - 1 - 10'),
                    custName: "Alon",
                    custID: "222222222"
                },
                {
                    roomNum: 44,
                    from: new Date('2022 - 4 - 4'),
                    to: new Date('2022 - 4 - 7'),
                    custName: "Anastasia",
                    custID: "444444444"
                }];
            let ordersHistory = [ {
                roomNum: 1,
                from: new Date('2021 - 9 - 29'),
                to: new Date('2021 - 10 - 5'),
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
let selectRoomsByDates = function (selected_from,selected_to) {
    //from.setHours(0,0,0,0);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let orders = dbo.collection("Orders");
        orders.find({
               "from": {$l: selected_to},
                "to": {$g: selected_from},
            }
        ).toArray(function (err, queryResult) {
            if (err) throw err;
            //console.log(queryResult);
            result = queryResult;
            db.close();
        });

    });

}
// let selectRoomsByDates = function (selected_from,selected_to) {
//     //from.setHours(0,0,0,0);
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         let dbo = db.db("hotel");
//         let orders = dbo.collection("Orders");
//         orders.find({
//                 "from": {$gte: selected_to},
//                 "to": {$lte: selected_from},
//             }
//         ).toArray(function (err, queryResult) {
//             if (err) throw err;
//             //console.log(queryResult);
//             result = queryResult;
//             db.close();
//         });
//
//     });
//
// }

exports.createMsgsCollection = createMsgsCollection;
exports.chooseMsgs = chooseMsgs;
module.exports.ress = result;


