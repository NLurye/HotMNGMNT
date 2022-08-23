let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/hotel";
const selectedRooms = [];
let validLogIn = [];
let validReservation = [];
let showEmp = [];
let employees = [];
let roomsList = [];
let showRoom = [];

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
                // 1)  1.8     2.8     10        Tom      //
                // 2)  1.8     5.8     11        Alon     //
                // 3)  6.8     7.8     11     Anastasia   //
                // 4)  8.8     12.8    11     Anastasia   //
                // 5)  5.8     11.8    12     Anastasia   //
                // 6)  4.8     6.8     10        Tom      //
                // 7)  10.8    14.8    10        Tom      //
                // 8)  2.8     8.8     13        Tal      //
                // 9)  7.8     9.8     10        Alon     //
                //10)  8.8     13.8    13        Alon     //
                //11)  10.8    12.8    14        Tal      //
                //12)  17.8    19.8    10        Tom      //
                //13)  17.8    20.8    11     Anastasia   //
                //14)  20.8    25.8    10        Tal      //
                //15)  20.8    25.8    13        Alon     //
                //16)  20.8    25.8    14        Tom      //
                //17)  21.8    22.8    11        Tom      //
                //18)  21.8    24.8    12     Anastasia   //
                //19)  26.8    30.8    11        Tal      //
                //20)  27.8    29.8    10        Alon     //
                ////////////////////////////////////////////
                //
                // times with NO ORDERS: 14.8-17.8, 25.8-26.8, 30.8-31.8
                //
                // TO_DO: we need to add validations to from&to dates:
                //        1) if(from == to) ===> alert("ERR: cant get a room for one day only)
                //        2) if(from > to) ===> alert("ERR: fromDate needs to be prior to toDate)
                //        3) if(from == to == null) ===> alert("ERR: must enter dates)
                {
                    room: 10,
                    from: new Date('2022-08-22'),//'2022-08-01'
                    to: new Date('2022-08-24'),//2022-08-02
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
                },
                {
                    room: 13,
                    from: new Date('2022-08-02'),
                    to: new Date('2022-08-08'),
                    custName: "Tal",
                    custID: "333333333"
                },
                {
                    room: 10,
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
                    room: 10,
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
                    room: 10,
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
                    room: 10,
                    from: new Date('2022-08-27'),
                    to: new Date('2022-08-29'),
                    custName: "Alon",
                    custID: "222222222"
                }

            ];
            let attractions = [
                {
                    lat: 32.065981,
                    lng: 34.775369,
                    description: "hotMNGMNT Hotel"
                },
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
                selectedRooms.length = 0;
                queryResult.forEach(item => {
                    selectedRooms.push(item);
                });
                db.close();
            });
        });
    });
}
let checkIn =function(cust_id,cust_name){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let orders = dbo.collection("Orders");
        let now = new Date();
        console.log(now);
        console.log(typeof now);
        orders.find(
                    {
                        from: {$lte: now},
                        to: {$gt: now},
                        custID: cust_id,
                        custName: cust_name,
                    }
        ).toArray(function (err, checkInRes) {
            if (err) throw err;
            else {
                validReservation.length = 0;
                if (checkInRes.length === 0)
                    console.log("reservation doesn't exist");
                else {
                    checkInRes.forEach(item => {
                        validReservation.push(item);
                    });
                }
            }
        });
    });
}
let checkOut = function (cust_id, cust_name, sfrom, sto) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("hotel");
        let orders = dbo.collection("Orders");
        let ordersHistory = dbo.collection("OrdersHistory");
        let query = {custID: cust_id, custName: cust_name, from: sfrom, to: sto};
        orders.find(query).toArray(function (err, checkOutRes) {
            if (err) throw err;
            else {
                console.log(checkOutRes);
                if (checkOutRes.length === 0)
                    console.log("Reservation doesn't exist");
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
        });
    });
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
                room: roomNumber,
                numOfBeds: bedsNumber,
                price: myPrice
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
                    room: roomNumber
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
                    empID: emp_ID
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
        });
    });
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
            });
    });
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
            });
    });
}
let searchEmp = function (empID) { ///<-----add encryption, admin?
    MongoClient.connect(url, function (err, db) {
        if (err) console.log(err);
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
                getRoomsResult.forEach(item => {
                    roomsList.push(item);
                });
            }
        });
    });
}
let searchRoom = function (roomNumber) {
    MongoClient.connect(url, function (err, db) {
        if (err) console.log(err);
        let dbo = db.db("hotel");
        let rooms = dbo.collection("Rooms");
        rooms.find(
            {room: parseInt(roomNumber)}
        ).toArray(function (err, searchRoomRes) {
            if (err) throw err;
            else {
                showRoom.length = 0;
                if (searchRoomRes.length === 0)
                    console.log("Employee not found");
                else {
                    showRoom.push(searchRoomRes);
                }
            }
            db.close();
        });
    });
}

module.exports.validLogIn = validLogIn;
module.exports.selectedRooms = selectedRooms;
module.exports.employees = employees;
module.exports.roomsList = roomsList;
module.exports.validReservation = validReservation;
module.exports.showEmp = showEmp;
module.exports.showRoom = showRoom;
module.exports.init = initHotelDB;//done
module.exports.addOrder = addOrder;//to be done-----------------------------------------------
module.exports.selectRooms = selectRoomsByDates;//done
module.exports.logIn = logIn;//done
module.exports.checkIn = checkIn;//to be done -> add an alert---------------------------------
module.exports.checkOut = checkOut;//done
module.exports.deleteOrder = deleteOrder;//to be done-----------------------------------------
module.exports.addRoom = addRoom;//to be done-------------------------------------------------
module.exports.deleteRoom = deleteRoom;//to be done-------------------------------------------
module.exports.deleteEmployee = deleteEmployee;//to be done-----------------------------------
module.exports.updateOrder = updateOrder;//to be done-----------------------------------------
module.exports.signIn = addEmployee;//to be done----------------------------------------------
module.exports.changeEmpPass = changeEmpPass;//to be done-------------------------------------
module.exports.updateRoom = updateRoom;//to be done-------------------------------------------
module.exports.searchEmp = searchEmp;//to be done---------------------------------------------
module.exports.getStaff = getStaff;//done
module.exports.getRooms = getRooms;//done
module.exports.searchRoom = searchRoom;//to be done---------------------------------------------







