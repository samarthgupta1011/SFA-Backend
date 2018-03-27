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

		     // http://localhost:3000/empticket?empId=A

		     //Post request
             //Send in body
             // {
             //     "empId" : "designing"
             // }



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
		     			}
		     		};


		     		db.collection('JobTicket').insert(jt,function(err,resp){
		     			if(err) throw err;



						var idArr = resp['ops'];
						var wt_id = idArr[0].wt;
						console.log(wt_id);

						//Send success status and inserted wt id
		     			var json_response = {
		     				'success' : true,
		     				'wt_id' : wt_id
		     			};

		     			response.send(json_response);


		     		});
		     	});
		};





		module.exports = {
			getAllJt : getAllJt,
			postJt : postJt
		};