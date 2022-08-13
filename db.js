let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/msgs";
let result;

fs = require('fs');

let createMsgsCollection = function () {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("msgs");
        dbo.dropDatabase(function () { //Delete previous db
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
                    admin: "True"
                },
                {
                    empID: 2,
                    empPass: 2,
                    admin: "False"

                },
                {
                    empID: 3,
                    empPass: 3,
                    admin: "False"

                },
                {
                    empID: 4,
                    empPass: 4,
                    admin: "False"
                },
                {
                    empID: 5,
                    empPass: 5,
                    admin: "False"

                },
                {
                    empID: 6,
                    empPass: 6,
                    admin: "False"

                },
                {
                    empID: 7,
                    empPass: 7,
                    admin: "False"
                },
                {
                    empID: 8,
                    empPass: 8,
                    admin: "False"
                },
                {
                    empID: 9,
                    empPass: 9,
                    admin: "False"
                },
                {
                    empID: 10,
                    empPass: 10,
                    admin: "True"
                }];
            let orders = [
                {
                    roomNum: 1,
                    times:
                        [{
                            dates: {
                                from: new Date('2022 - 9 - 29'),
                                to: new Date('2022 - 10 - 5')
                            },
                            dates: {
                                from: new Date('2022 - 10 - 15'),
                                to: new Date('2022 - 10 - 25')
                            },
                        }],
                    cust
                },
                {
                    roomNum: 23,
                    times:
                        [{
                            dates: {
                                from: new Date('2022 - 1 - 1'),
                                to: new Date('2022 - 1 - 10')
                            }
                        }]
                },
                {
                    roomNum: 44,
                    times:
                        [{
                            dates: {
                                from: new Date('2022 - 4 - 4'),
                                to: new Date('2022 - 4 - 7')
                            }
                        }]
                }];
            dbo.collection("Messages").insertMany(messages, function (err, res) {
                if (err) throw err;
            });
        });
    });

}
let chooseMsgs = function () {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("msgs");
        let collection = dbo.collection("Messages");
        collection.find({
                screen: scr/*,
            "times.t.days": day,
               "times.t.dates.from": {$lte: now},
                "times.t.dates.to": {$gte: now},
                "times.t.hours.from": {$lte: hour},
                "times.t.hours.to":{$gte :hour},
                "times.t.minutes.from": {$lte: minute},
                "times.t.minutes.to":{$gte :minute}*/
            }
        ).toArray(function (err, queryResult) {
            if (err) throw err;
            //console.log(queryResult);
            result = queryResult;
            db.close();
        });

    });

}

exports.createMsgsCollection = createMsgsCollection;
exports.chooseMsgs = chooseMsgs;
module.exports.ress = result;


