    var mongoDb = require('mongodb');
    var mongoClient = mongoDb.MongoClient;
    var uniqid = require('uniqid');


    var url = 'mongodb://localhost/SfaDb';



    var getAllJt = function(request, response){
    	mongoClient.connect(url, function(err, db){
    		if(err) throw err;


    		db.collection('JobTicket').find().toArray(function(err, jobTicket){
    			if(err) throw err;

    			// var timeInMss = Date.now();
    			// console.log(timeInMss);
    			response.send(jobTicket);
    		});

    	});

    };

     // Use code to delete data in collection
    var dropAllData = function(request,response){
        console.log("Drop data called but no drop lol");
        // mongoClient.connect(url, function(err,db){
        //     if(err) throw err;

        //     db.collection('employee').remove({},function(err, resp){
        //         if(err) throw err;

        //         response.send(resp);
        //     });
        // });
    };

    var register = function(request,response){
        mongoClient.connect(url,function(err,db){
            if(err) throw err;

            var query = {
                mobile : request.body.mobile
            };

            db.collection('employee').findOne(query,function(err,employee){
                if(err) throw err;
                //If employee not null - exists
                if(employee){

                    response.send(false);
                }

                else{

                    var unid = uniqid();

                    var data = {
                        name : request.body.name,
                        mobile : request.body.mobile,
                        email : request.body.email,
                        pass : request.body.pass,
                        dept : request.body.dept,
                        token : unid
                    };

                    db.collection('employee').insert(data, function(err,resp){
                        if(err) throw err;


                        response.send(true);


                    });
                }

            });
        });
    };

    var getEmployees = function(request,response){
        mongoClient.connect(url,function(err,db){
            if(err) throw err;
            db.collection('employee').find().toArray(function(err,employees){
                if(err) throw err;
                response.send(employees);
            });
        });
    };

    var login = function(request,response){
        mongoClient.connect(url,function(err,db){
            if(err) throw err;


            console.log(request.body.mobile + " "+ request.body.pass);

            var query = {
                mobile : request.body.mobile,
                pass : request.body.pass
            };

            db.collection('employee').findOne(query,function(err,resp){
                if(resp){
                    resp.status = true;
                    console.log(resp);
                    response.send(resp);
                    console.log("True");
                }

                // resp is null
                else{

                    var js = {

                        name : null,
                        mobile : null,
                        email : null,
                        pass : null,
                        dept : null,
                        status : false
                    }
                    console.log("False");

                    console.log(js);
                    response.send(js);
                }
            });
        });
    };

    var postJt = function(request,response){
        mongoClient.connect(url,function(err,db){
            if(err) throw err;


            var jt = 
            {  
                Client : {  
                    contact : request.body.Client.contact ,
                    name : request.body.Client.name
                },

                date : request.body.date ,
                deliveryDate : request.body.deliveryDate ,
                notes : request.body.notes,
                wt : request.body.wt,
                priority : request.body.priority,
                image : request.body.image,

                Job : {  
                    name : request.body.Job.name ,
                    noOfCol : request.body.Job.noOfCol ,
                    printRun : request.body.Job.printRun ,
                    size : request.body.Job.size,
                    type : request.body.Job.type,
                    wastage : request.body.Job.wastage
                },

                Machine : {  
                    machine : request.body.Machine.machine ,
                    name : request.body.Machine.name
                },


                Paper : {  
                    details : request.body.Paper.details,
                    location : request.body.Paper.location,
                    paperBy : request.body.Paper.paperBy,
                    quality : request.body.Paper.quality,
                    quantity : request.body.Paper.quantity
                },

                Plate : {  
                    name : request.body.Plate.name,
                    plate : request.body.Plate.plate,
                    quantity : request.body.Plate.quantity
                },

                Processes : {
                    A : {
                        use : request.body.Processes.A.use,
                        percentageComp : request.body.Processes.A.percentageComp,
                        updates : [

                        ]
                    },

                    B : {
                        use : request.body.Processes.B.use,
                        percentageComp : request.body.Processes.B.percentageComp,
                        updates : [

                        ]
                    }
                }

            };


            db.collection('JobTicket').insert(jt,function(err,resp){
                if(err) throw err;

                response.send(resp);

            });
        });
    };


    //http://localhost:3000/updates?wt=Awesome&empId=B
    var updateProgress = function(request,response){
        mongoClient.connect(url,function(err,db){

            if(err) throw err;

            var arrObj = {
                time : request.body.time,
                done : request.body.done
            };

            db.collection('JobTicket').findOne({ wt : request.query.wt }, function(err,resp){
                if(err) throw err;

                //Push new object in array
                var emp = request.query.empId;
                var obj = resp.Processes[emp];
                var arr = obj.updates;
                arr.push(arrObj);

                //Change percentage progress
                var total = resp.Job.printRun;
                console.log(total);
                
                var sumDone =0;
                arr.forEach(function(element) {
                    var i = parseInt(element.done);
                    sumDone = sumDone + i;
                });
                console.log("Total "+ sumDone);

                var perc = ((sumDone).toFixed(4)/total)*100;
                // var perc = (sumDone/total)*100;
                console.log("Percent "+ perc);
                obj.percentageComp = perc;

                db.collection('JobTicket').
                update({ wt : request.query.wt },{$set : resp},function(err,resp){
                    if(err) throw err;
                    response.send(resp);

                });

            });
    });
    };

    // http://localhost:3000/empticket?empId=A
    var getEmpJt = function(request,response){
        mongoClient.connect(url,function(err,db){
            if(err) throw err;

            var dept = request.query.empId;

            if(dept=='A'){
                db.collection('JobTicket').find({ "Processes.A.use": true }).toArray(function(err,resp){
                    if(err) throw err;
                    response.send(resp);
                });
            }

            else if(dept=='B'){
                db.collection('JobTicket').find({ "Processes.B.use": true }).toArray(function(err,resp){
                    if(err) throw err;
                    response.send(resp);
                });
            }
            
        });
    };


    var postAdminData = function(request,response){
        mongoClient.connect(url,function(err, db){
            if(err) throw err;

            var data = {
                "notice": request.body.notice,
                "dated": request.body.dated,
                "by": request.body.by
            };

            db.collection('admin').insert(data,function(err, resp){
                if(err) throw err;
                response.send({'success' : true});

            });
        });
    };

    var getAdminData = function(request,response){
        mongoClient.connect(url,function(err, db){
            if(err) throw err;

            db.collection('admin').find().toArray(function(err, resp){
                if(err) throw err;

                response.send(resp);

            });
        });
    };


    module.exports = {
        getAllJt : getAllJt,
        register : register,
        postJt : postJt,
        getEmployees : getEmployees,
        login : login,
        updateProgress : updateProgress,
        getEmpJt : getEmpJt,
        postAdminData : postAdminData,
        getAdminData : getAdminData,
        dropAllData : dropAllData
    };

    //Use code to edit db

     //     var o_id = new mongoDb.ObjectID("59d39b1659f1b14bf9fb66fd");
            // db.collection('employee').update({"_id": o_id },{$set: {"dept":"A"}},function(err,resp){
            //     if(err) throw err;
            // });

            // var id2 = new mongoDb.ObjectID("59d39b847696a14c4a3603ed");
            // db.collection('employee').remove({"_id": id2},function(err,resp){
            //     if(err) throw err;
            // });


   



    // var jt = 
    // {  
    //     client : {  
    //         contact : request.body.client.contact ,
    //         name : request.body.client.name
    //     },

    //     date : request.body.date ,
    //     deliveryDate : request.body.deliveryDate ,
    //     notes : request.body.notes,
    //     wt : request.body.wt,
    //     priority : request.body.priority,
    //     image : request.body.image,

    //     job : {  
    //         name : request.body.job.name ,
    //         noOfCol : request.body.job.noOfCol ,
    //         printRun : request.body.job.printRun ,
    //         size : request.body.job.size,
    //         type : request.body.job.type,
    //         wastage : request.body.job.wastage
    //     },
    //     machine : {  
    //         machine : request.body.machine.machine ,
    //         name : request.body.machine.name
    //     },


    //     paper : {  
    //         details : request.body.paper.details,
    //         location : request.body.paper.location,
    //         paperBy : request.body.paper.paperBy,
    //         quality : request.body.paper.quality,
    //         quantity : request.body.paper.quantity


    //     },

    //     plate : {  
    //         name : request.body.plate.name,
    //         plate : request.body.plate.plate,
    //         quantity : request.body.plate.quantity
    //     }

    // };

        // "preparedBy":"ME AGAIN!!!",
        // "printedBy":"Me!!! GODDAMN ME!!!",
        // "processInfo":{  
        //     "binding":"binding lol",
        //     "dummy":"hadd hai yaar...",
        //     "lamination":"lamination lol",
        //     "qcBinding":false,
        //     "qcBindingContent":"lol",
        //     "qcDummy":false,
        //     "qcDummyContent":"lollollollol",
        //     "qcLamination":false,
        //     "qcLaminationContent":"lollol",
        //     "qcVarnish":true,
        //     "qcVarnishContent":"lollollol",
        //     "varnish":"abe hatt!"
        // }


            // qcLocation : request.body.,
            // qcLocationContent : "amazing location",
            // qcQuality : false,
            // qcQualityContent : "false...lol",
            // qcQuantity : true,
            // qcQuantityContent :"true...shit!",



    // var postJt = function(request,response){
    //     mongoClient.connect(url,function(err,db){
    //         if(err) throw err;

    //         var jt = 
    // {  
    //     Client : {  
    //         contact : request.body.Client.contact ,
    //         name : request.body.Client.name
    //     },

    //     date : request.body.date ,
    //     deliveryDate : request.body.deliveryDate ,
    //     notes : request.body.notes,
    //     wt : request.body.wt,
    //     priority : request.body.priority,
    //     image : request.body.image,

    //     Job : {  
    //         name : request.body.Job.name ,
    //         noOfCol : request.body.Job.noOfCol ,
    //         printRun : request.body.Job.printRun ,
    //         size : request.body.Job.size,
    //         type : request.body.Job.type,
    //         wastage : request.body.Job.wastage
    //     },

    //     Machine : {  
    //         machine : request.body.Machine.machine ,
    //         name : request.body.Machine.name
    //     },


    //     Paper : {  
    //         details : request.body.Paper.details,
    //         location : request.body.Paper.location,
    //         paperBy : request.body.Paper.paperBy,
    //         quality : request.body.Paper.quality,
    //         quantity : request.body.Paper.quantity
    //     },

    //     Plate : {  
    //         name : request.body.Plate.name,
    //         plate : request.body.Plate.plate,
    //         quantity : request.body.Plate.quantity
    //     }

    // };

    //         db.collection('JobTicket').insert(jt,function(err,resp){
    //             if(err) throw err;

    //             response.send(resp);

    //         });
    //     });
    // };









