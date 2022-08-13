
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
                },
                {
                    t: {
                        dates: {
                            from: new Date('2022-1-1'),
                            to: new Date('2022-12-31')
                        },
                        days: [3],
                        hours: {
                            from: 13,
                            to: 20
                        },
                        minutes: {
                            from: 0,
                            to: 59,
                        }
                    }
                }],
            duration: 2000,
            screen: [1, 2]
        },
        {
            name: "Our response to the war in Ukraine",
            template: "./templateB.html",
            text: [{l: "As the global response to the tragedies in Ukraine and other impacted regions continues to evolve, "}, {l: "I wanted to share with our community an expansion of the message that I shared earlier this week with our Hubbers."}, {l: "GitHub is united with the people of Ukraine and the international community in condemning these horrific acts of violence against a sovereign nation and its people."}, {l: "We continue to monitor the events in Europe surrounding the unlawful Russian military invasion of Ukraine."}, {l: "We care deeply about our global community, and many of us have loved ones all over the world,"}, {l: "including in Ukraine, Russia, and other impacted regions. I grew up in East Germany during the Cold War, "}, {l: "and I remember the happiness and optimism in the early 1990s that the world would come closer together."}, {l: "What we are witnessing now is something I never wanted to see again."}, {l: "It is devastating for the innocent people in Ukraine, "}, {l: "and it is leading to feelings of helplessness and anger for those of us near and far away."}],
            img: [{i: "https://github.blog/wp-content/uploads/2022/03/1200x630-GitHub-1.png?resize=2400%2C1254"}],
            times:
                [{
                    t: {
                        dates: {
                            from: new Date('2022-3-1'),
                            to: new Date('2022-4-30')
                        },
                        days: [2, 3],
                        hours: {
                            from: 10,
                            to: 16
                        },
                        minutes: {
                            from: 0,
                            to: 59,
                        }
                    }
                }],
            duration: 2000,
            screen: [1, 3]
        },
        {
            name: "Empty",
            template: "./templateC.html",
            times:
                [{
                    t: {
                        dates: {
                            from: new Date('2022-5-1'),
                            to: new Date('2022-6-15')
                        },
                        days: [0, 1, 2, 3, 4, 5, 6],
                        hours: {
                            from: 8,
                            to: 22
                        },
                        minutes: {
                            from: 0,
                            to: 59,
                        }
                    }
                }],
            duration: 2000,
            screen: [2, 3]
        },
        {
            name: "Coming Soon",
            template: "./templateA.html",
            text: [{l: "We will be celebrating the launch of our site very soon!"}, {l: "Sign up to be notified!"},],
            times:
                [{
                    t: {
                        dates: {
                            from: new Date('2022-3-29'),
                            to: new Date('2022-4-15')
                        },
                        days: [1],
                        hours: {
                            from: 15,
                            to: 19
                        },
                        minutes: {
                            from: 0,
                            to: 59,
                        }
                    }
                }],
            duration: 2000,
            screen: [1]
        },
        {
            name: "Fast Food",
            template: "./templateB.html",
            text: [{l: "Eight in 10 Americans eat fast food at least once a month and half eat it every week according, to a Gallup Poll."}, {l: "Yet most people who eat fast food know it’s bad for them."}, {l: "So why do they keep eating it?"}, {l: "The answer is simple: the benefits of eating fast food outweigh the long-term implications for most people."}, {l: "However, once you read these reasons why all those trips to the drive through may be slowly killing you, you may just want to stop eating fast food after all."}, {l: "A 15-year study of over 3,000 people found that eating fast food is linked to weight gain and insulin resistance."}, {l: "In others words, fast food makes you fat and increases your risk of type 2 diabetes."}],
            img: [{i: "https://blog.monouso.es/wp-content/uploads//La-obesidad-y-el-fast-food-1024x536.jpg"}, {i: "https://www.fastfoodmenunutrition.com/wp-content/uploads/2015/03/fast-food.jpg"}],
            times:
                [{
                    t: {
                        dates: {
                            from: new Date('2022-4-1'),
                            to: new Date('2022-4-30')
                        },
                        days: [1, 2, 3],
                        hours: {
                            from: 1,
                            to: 23
                        },
                        minutes: {
                            from: 0,
                            to: 59,
                        }
                    }
                }],
            duration: 2000,
            screen: [3]
        }
    ];
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


