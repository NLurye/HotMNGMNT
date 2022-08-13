
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/msgs";
let result;

fs = require('fs');

let createMsgsCollection=function (){
    MongoClient.connect(url, function(err, db) { if (err) throw err;
    let dbo = db.db("msgs");
    dbo.dropDatabase(function() { //Delete previous db
    let messages = [
        {
            name: "Travel Agency",
            template: "./templateA.html",
            text: [{l: "Tourist Israel is an Israel travel agent offering services to visitors to Israel from around the world."}, {l: "Since 2008, we have served over 500,000 visitors to Israel with tours, packages, hotels, private tours, and special services."}, {l: "From our Tel Aviv head-office, our team of travel experts is able to provide a solution for groups ranging in size from individuals and families, to religious and educational groups up to hundreds of people."}, {l: "Being on the ground in Israel means that we have access to a greater range of services, options, and are able to hand-pick and closely control the quality of the services we offer."}],
            img: [{i: "https://www.gomeltourist.com/wp-content/uploads/2021/11/Travel.jpg"}, {i: "https://kharkiv-travel.com/wp-content/uploads/2021/12/Travel000000.jpg"}],
            times:[
                {
                    t: {
                        dates: {
                            from: new Date('2022-1-1'),
                            to: new Date('2022-12-31')
                        },
                        days: [1],
                        hours: {
                            from: 6,
                            to: 12
                        },
                        minutes: {
                            from: 0,
                            to: 0,
                        }
                    }
                }
    ]}];
    dbo.collection("Messages").insertMany(messages, function(err, res) { if (err) throw err;});
        });
    });

}
let chooseMsgs=function (){

    MongoClient.connect(url, function(err, db) { if (err) throw err;
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

        ).toArray(function (err,queryResult){ if (err) throw err;
            //console.log(queryResult);
            result = queryResult;
            db.close();
        });

    });

}

exports.createMsgsCollection=createMsgsCollection;
exports.chooseMsgs=chooseMsgs;
module.exports.ress=result;


