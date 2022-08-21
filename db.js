let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/hotel";
const selectedRooms = [];
let validLogIn = false;
let validReservation = [];
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
                    admin: 1
                },
                {
                    empID: 2,
                    empPass: 2,
                    admin: 0

                },
                {
                    empID: 3,
                    empPass: 3,
                    admin: 0

                },
                {
                    empID: 4,
                    empPass: 4,
                    admin: 0
                },
                {
                    empID: 5,
                    empPass: 5,
                    admin: 0

                },
                {
                    empID: 6,
                    empPass: 6,
                    admin: 0

                },
                {
                    empID: 7,
                    empPass: 7,
                    admin: 0
                },
                {
                    empID: 8,
                    empPass: 8,
                    admin: 0
                },
                {
                    empID: 9,
                    empPass: 9,
                    admin: 0
                },
                {
                    empID: 10,
                    empPass: 10,
                    admin: 1
                }];
            let orders = [
                ////////////////////////////////////////////
                //                Orders                  //
                // ************************************** //
                //     FROM    TO     ROOM#   CUST_NAME   //
                // 1)  1.8     2.8     10        Tom      //
                // 2)  1.8     5.8     11        Alon     //
                // 3)  6.8     7.8     11     Anastasia   //
                // 4)  8.8     12.8    11     Anastasia   //
                // 5)  5.8     11.8    12     Anastasia   //
                // 6)  4.8     6.8     10        Tom      //
                // 7)  10.8    14.8    10        Tom      //
                ////////////////////////////////////////////
                // TO_DO: we need to add to validations to from&to dates:
                //        1) if(from == to) ===> alert("ERR: cant get a room for one day only)
                //        2) if(from > to) ===> alert("ERR: fromDate needs to be prior to toDate)
                {
                    room: 10,
                    from: new Date('2022-08-01'),
                    to: new Date('2022-08-02'),
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
                    room: 10,
                    from: new Date('2022-08-04'),
                    to: new Date('2022-08-06'),
                    custName: "Tom",
                    custID: "111111111"
                },
                {
                    room: 10,
                    from: new Date('2022-08-10'),
                    to: new Date('2022-08-14'),
                    custName: "Tom",
                    custID: "111111111"
                }
            ];
            let ordersHistory = [{
                room: 10,
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
let logIn = function (id,pass,Admin) { ///<-----ad encryption
    MongoClient.connect(url, function (err,db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let staff = dbo.collection("Staff");
        staff.findOne(
            {empID: id, empPass: pass, admin: Admin}
        ).toArray(function (err, logInRes) {
            if (err) throw err;
            else {
                if (logInRes.length === 0)
                    console.log("User doesn't exist");
                else {
                    validLogIn = true;
                }
            }
        })
    })
}
let selectRoomsByDates = function (selected_from, selected_to) {
    //eliminate rooms that have orders that starting before selected_to and simultaneously ending after selected_from
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
            console.log("Booked rooms on those dates: " + interruptions);
            let rooms = dbo.collection("Rooms");
            rooms.find(
                {
                    room: {$nin: interruptions}
                },
            ).toArray(function (err, queryResult) {
                if (err) throw err;

                selectedRooms.length=0;
                queryResult.forEach(item=>{
                    selectedRooms.push(item);
                })
                db.close();
            });
        });


    });
}
let checkIn = function (cust_id, cust_name) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let orders = dbo.collection("Orders");
        let day = now.getDay();
        orders.find(
            {custID: cust_id},
            {custName: cust_name},
            {from: day}
        ).toArray(function (err, checkInRes) {
            if (err) throw err;
            else {
                if (checkInRes.length === 0)
                    console.log("reservation doesn't exist");
                else validReservation.push(checkInRes);
            }
        })
    })
}
let checkOut = function (cust_id, cust_name) {
    MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("hotel");
            let orders = dbo.collection("Orders");
            let ordersHistory = dbo.collection("OrdersHistory");
            orders.find(
                {custID: cust_id},
                {custName: cust_name}
            ).toArray(function (err, checkOutRes) {
                    if (err) throw err;
                    else {
                        if (checkOutRes.length === 0)
                            console.log("reservation doesn't exist");
                        else {
                            ordersHistory.push(checkOutRes);
                            orders.remove(checkOutRes);
                        }
                    }
                }
            )
        }
    )
}
let addOrder = function (room, from, to, custName, custID) {
    MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("hotel");
            let order =
                {
                    room: room,
                    from: new Date(from),
                    to: new Date(to),
                    custName: custName,
                    custID: custID
                }
            dbo.collection("Orders").insertOne(order, function (err, res) {
                if (err) throw err;
            })
        }
    )
}
let deleteOrder = function (cust_id, cust_name, myFrom, myTo) {
    MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("hotel");
            let orders = dbo.collection("Orders");
            try {
                orders.deleteMany(
                    {
                        custName: cust_name,
                        custID: cust_id,
                        from: myFrom,
                        to: myTo
                    }
                );
            } catch (e) {
                print(e);
            }
        }
    )
}
let addRoom = function (roomNumber, bedsNumber, myPrice) {
    MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("hotel");
            let room =
                {
                    room: roomNumber,
                    numOfBeds: bedsNumber,
                    price: myPrice
                }
            dbo.collection("Rooms").insertOne(room, function (err, res) {
                if (err) throw err;
            })
        }
    )
}

let deleteRoom = function (roomNumber) {
    MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("hotel");
            let orders = dbo.collection("Rooms");
            try {
                orders.deleteOne(
                    {
                        room: roomNumber
                    }
                );
            } catch (e) {
                print(e);
            }
        }
    )
}
let deleteEmployee = function (emp_ID) {
    MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("hotel");
            let orders = dbo.collection("Staff");
            try {
                orders.deleteOne(
                    {
                        empID: emp_ID
                    }
                );
            } catch (e) {
                print(e);
            }
        }
    )
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
                    }
                );
            } catch (err) {
                print(err);
            }
        }
    )
}

let addEmployee = function (emp_id, emp_pass, is_admin) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let employee =
            {
                empID: emp_id,
                empPass: emp_pass,
                admin: is_admin
            }
            dbo.collection("Staff").insertOne(employee, function (err, res) {
                if (err) throw err;
            })
        }
    )
}
let changeEmpPass = function (emp_id, emp_pass, new_emp_pass) {
    MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("hotel");
            let employee = dbo.collection("Staff");
            employee.findOneAndUpdate(
                {
                    empID: emp_id,
                    empPass: emp_pass
                },
                {
                    empPass: new_emp_pass
                }
            );
        }
    )
}
let updateRoom = function (roomNum, bedsNum, myPrice) {
    MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("hotel");
            let room = dbo.collection("Rooms");
            room.findOneAndUpdate(
                {
                    room: roomNum
                },
                {
                    numOfBeds: bedsNum,
                    price: myPrice
                }
            );
        }
    )
}
module.exports.validLogIn = validLogIn;

module.exports.selectedRooms = selectedRooms;
module.exports.init = initHotelDB;
module.exports.addOrder = addOrder;
module.exports.selectRooms = selectRoomsByDates;
module.exports.logInWorker = logIn;
module.exports.checkInCust = checkIn;
module.exports.checkOutCust = checkOut;
module.exports.deleteOrder = deleteOrder;
module.exports.addRoom = addRoom;
module.exports.deleteRoom = deleteRoom;
module.exports.deleteEmployee = deleteEmployee;
module.exports.updateOrder = updateOrder;
module.exports.signIn = addEmployee;
module.exports.changeEmpPass = changeEmpPass;
module.exports.updateRoom = updateRoom;








