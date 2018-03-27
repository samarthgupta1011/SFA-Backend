				var mongoDb = require('mongodb');
				var mongoClient = mongoDb.MongoClient;
				var uniqid = require('uniqid');

				var url = 'mongodb://localhost/SfaDb';

				var postJTProcesses = function(request, response){

					console.log(request.body);
					mongoClient.connect(url, function(err, db){
						if(err) throw err;

						var jobType = request.body.job_type;


						if(jobType === 'book' || jobType === 'Book'){

							console.log('book');
							var jtProcesses = 

							{

								job_type: request.body.job_type,

								//Newly Added field - 11/3
								wt_id : request.body.wt_id,
								total_number : request.body.total_number,
								total_sets : request.body.total_sets,
								total_forms : request.body.total_forms,
								book : {
									designing :{
										isRequired : request.body.book.designing.isRequired,
										isDone : request.body.book.designing.isDone
									},

									ferro:{
										isRequired : request.body.book.ferro.isRequired,
										isDone : request.body.book.ferro.isDone
									},
									plates:{
										isRequired : request.body.book.plates.isRequired,
										isDone : request.body.book.plates.isDone
									},
									printing:{
										isRequired : request.body.book.printing.isRequired,
										updates :[ 
										{

											done : request.body.book.printing.updates[0].done,
											time : request.body.book.printing.updates[0].time,
											sets_done : '0'
										}
										]
									},
									folding:{
										isRequired : request.body.book.folding.isRequired,
										updates :[ 
										{

											done : request.body.book.folding.updates[0].done,
											time : request.body.book.folding.updates[0].time,
											sets_done : '0'
										}
										]
									},
									gathering:{
										isRequired : request.body.book.gathering.isRequired,
										updates :[ 
										{

											done : request.body.book.gathering.updates[0].done,
											time : request.body.book.gathering.updates[0].time,
										}
										]
									},
									perfect:{
										isRequired : request.body.book.perfect.isRequired,
										updates :[ 
										{

											done : request.body.book.perfect.updates[0].done,
											time : request.body.book.perfect.updates[0].time,
										}
										]
									},
									sewing:{
										isRequired : request.body.book.sewing.isRequired,
										updates :[ 
										{

											done : request.body.book.sewing.updates[0].done,
											time : request.body.book.sewing.updates[0].time,
										}
										]
									},
									centre_pin:{
										isRequired : request.body.book.centre_pin.isRequired,
										updates :[ 
										{

											done : request.body.book.centre_pin.updates[0].done,
											time : request.body.book.centre_pin.updates[0].time,
										}
										]
									},
									finishing:{
										isRequired : request.body.book.finishing.isRequired,
										updates :[ 
										{

											done : request.body.book.finishing.updates[0].done,
											time : request.body.book.finishing.updates[0].time,
										}
										]
									},
									packing:{
										isRequired : request.body.book.packing.isRequired,
										updates :[ 
										{

											done : request.body.book.packing.updates[0].done,
											time : request.body.book.packing.updates[0].time,
										}
										]
									},
									dispatch:{
										isRequired : request.body.book.dispatch.isRequired,
										updates :[ 
										{

											done : request.body.book.dispatch.updates[0].done,
											time : request.body.book.dispatch.updates[0].time,
										}
										]
									},
									challan:{
										isRequired : request.body.book.challan.isRequired,
										updates :[ 
										{

											done : request.body.book.challan.updates[0].done,
											time : request.body.book.challan.updates[0].time,
										}
										]
									},
									bill:{
										isRequired : request.body.book.bill.isRequired,
										updates :[ 
										{

											done : request.body.book.bill.updates[0].done,
											time : request.body.book.bill.updates[0].time,
										}
										]
									}
								},
								cover : null,
								box : null
							};

						} else if(jobType === 'cover' || jobType === 'Cover'){

							var jtProcesses = 

							{

								job_type: request.body.job_type,
								wt_id : request.body.wt_id,
								total_number : request.body.total_number,
								total_sets : request.body.total_sets,
								total_forms : request.body.total_forms,
								book : null,
								cover: {
									designing :{
										isRequired : request.body.cover.designing.isRequired,
										isDone : request.body.cover.designing.isDone
									},

									ferro:{
										isRequired : request.body.cover.ferro.isRequired,
										isDone : request.body.cover.ferro.isDone
									},
									plates:{
										isRequired : request.body.cover.plates.isRequired,
										isDone : request.body.cover.plates.isDone
									},
									printing:{
										isRequired : request.body.cover.printing.isRequired,
										updates :[ 
										{

											done : request.body.cover.printing.updates[0].done,
											time : request.body.cover.printing.updates[0].time,
											sets_done : '0'
										}
										]
									},
									lamination:{
										isRequired : request.body.cover.lamination.isRequired,
										updates :[ 
										{

											done : request.body.cover.lamination.updates[0].done,
											time : request.body.cover.lamination.updates[0].time,
										}
										]
									},
									creasing:{
										isRequired : request.body.cover.creasing.isRequired,
										updates :[ 
										{

											done : request.body.cover.creasing.updates[0].done,
											time : request.body.cover.creasing.updates[0].time,
										}
										]
									},
									binding:{
										isRequired : request.body.cover.binding.isRequired,
										updates :[ 
										{

											done : request.body.cover.binding.updates[0].done,
											time : request.body.cover.binding.updates[0].time,
										}
										]
									},
									packing:{
										isRequired : request.body.cover.packing.isRequired,
										updates :[ 
										{

											done : request.body.cover.packing.updates[0].done,
											time : request.body.cover.packing.updates[0].time,
										}
										]
									},
									dispatch:{
										isRequired : request.body.cover.dispatch.isRequired,
										updates :[ 
										{

											done : request.body.cover.dispatch.updates[0].done,
											time : request.body.cover.dispatch.updates[0].time,
										}
										]
									},
									challan:{
										isRequired : request.body.cover.challan.isRequired,
										updates :[ 
										{

											done : request.body.cover.challan.updates[0].done,
											time : request.body.cover.challan.updates[0].time,
										}
										]
									},
									bill:{
										isRequired : request.body.cover.bill.isRequired,
										updates :[ 
										{

											done : request.body.cover.bill.updates[0].done,
											time : request.body.cover.bill.updates[0].time,
										}
										]
									}
								},

								box:null
							};

						} else if(jobType == 'box' || jobType == 'Box'){

							var jtProcesses = 

							{

								job_type: request.body.job_type,
								wt_id : request.body.wt_id,
								total_number : request.body.total_number,
								total_sets : request.body.total_sets,
								total_forms : request.body.total_forms,
								book : null,
								cover : null,
								box : {
									designing :{
										isRequired : request.body.box.designing.isRequired,
										isDone : request.body.box.designing.isDone
									},

									ferro:{
										isRequired : request.body.box.ferro.isRequired,
										isDone : request.body.box.ferro.isDone
									},
									plates:{
										isRequired : request.body.box.plates.isRequired,
										isDone : request.body.box.plates.isDone
									},
									printing:{
										isRequired : request.body.box.printing.isRequired,
										updates :[ 
										{

											done : request.body.box.printing.updates[0].done,
											time : request.body.box.printing.updates[0].time,
											sets_done : '0'
										}
										]
									},
									lamination:{
										isRequired : request.body.box.lamination.isRequired,
										updates :[ 
										{

											done : request.body.box.lamination.updates[0].done,
											time : request.body.box.lamination.updates[0].time,
										}
										]
									},
									uv:{
										isRequired : request.body.box.uv.isRequired,
										updates :[ 
										{

											done : request.body.box.uv.updates[0].done,
											time : request.body.box.uv.updates[0].time,
										}
										]
									},
									embossing:{
										isRequired : request.body.box.embossing.isRequired,
										updates :[ 
										{

											done : request.body.box.embossing.updates[0].done,
											time : request.body.box.embossing.updates[0].time,
										}
										]
									},
									foiling:{
										isRequired : request.body.box.foiling.isRequired,
										updates :[ 
										{

											done : request.body.box.foiling.updates[0].done,
											time : request.body.box.foiling.updates[0].time,
										}
										]
									},
									die_cut:{
										isRequired : request.body.box.die_cut.isRequired,
										updates :[ 
										{

											done : request.body.box.die_cut.updates[0].done,
											time : request.body.box.die_cut.updates[0].time,
										}
										]
									},
									pasting:{
										isRequired : request.body.box.pasting.isRequired,
										updates :[ 
										{

											done : request.body.box.pasting.updates[0].done,
											time : request.body.box.pasting.updates[0].time,
										}
										]
									},
									packing:{
										isRequired : request.body.box.packing.isRequired,
										updates :[ 
										{

											done : request.body.box.packing.updates[0].done,
											time : request.body.box.packing.updates[0].time,
										}
										]
									},
									dispatch:{
										isRequired : request.body.box.dispatch.isRequired,
										updates :[ 
										{

											done : request.body.box.dispatch.updates[0].done,
											time : request.body.box.dispatch.updates[0].time,
										}
										]
									},
									challan:{
										isRequired : request.body.box.challan.isRequired,
										updates :[ 
										{

											done : request.body.box.challan.updates[0].done,
											time : request.body.box.challan.updates[0].time,
										}
										]
									},
									bill:{
										isRequired : request.body.box.bill.isRequired,
										updates :[ 
										{

											done : request.body.box.bill.updates[0].done,
											time : request.body.box.bill.updates[0].time,
										}
										]
									}
								}
							};

						}



						db.collection('JobTicketProcesses').insert(jtProcesses, function(err, resp){

							if(err){
								var json_response_false = {
									'success' : false,
									'wt_id' : request.body.wt_id
								};

								response.send(json_response_false)
							}

							var json_response_true = {
								'success' : true,
								'wt_id' : request.body.wt_id
							};

							response.send(json_response_true)
							

							// if(err) throw new Error('Something bad happened');;
							// response.send(resp);


							// if(err) {
							// 	response.status(500).send(err);
							// }

							// response.send(resp);
							
						});

					});
			};


			var getAllJTProcesses = function(request, response){
				mongoClient.connect(url, function(err, db){
					if(err) throw err;
					db.collection('JobTicketProcesses').find().toArray(function(err, resp){
						if(err) throw err;
						response.send(resp);
					});
				});
			};

			function getQuery(emp){

				var q = null;
				if(emp == 'designing'){
					q = {
						$or : [
						{
							"processes.book.designing.isRequired" : true
						},
						{
							"processes.box.designing.isRequired" : true
						},
						{
							"processes.cover.designing.isRequired" : true
						}
						]
					};
				} else if(emp == 'ferro'){
					q = {
						$or : [
						{
							"processes.book.ferro.isRequired" : true
						},
						{
							"processes.box.ferro.isRequired" : true
						},
						{
							"processes.cover.ferro.isRequired" : true
						}
						]
					};
				} else if(emp == 'plates'){
					q = {
						$or : [
						{
							"processes.book.plates.isRequired" : true
						},
						{
							"processes.box.plates.isRequired" : true
						},
						{
							"processes.cover.plates.isRequired" : true
						}
						]
					};
				} else if(emp == 'printing'){
					q = {
						$or : [
						{
							"processes.book.printing.isRequired" : true
						},
						{
							"processes.box.printing.isRequired" : true
						},
						{
							"processes.cover.printing.isRequired" : true
						}
						]
					};
				} else if(emp == 'packing'){
					q = {
						$or : [
						{
							"processes.book.packing.isRequired" : true
						},
						{
							"processes.box.packing.isRequired" : true
						},
						{
							"processes.cover.packing.isRequired" : true
						}
						]
					};

				} else if(emp == 'dispatch'){
					q = {
						$or : [
						{
							"processes.book.dispatch.isRequired" : true
						},
						{
							"processes.box.dispatch.isRequired" : true
						},
						{
							"processes.cover.dispatch.isRequired" : true
						}
						]
					};

				} else if(emp == 'challan'){
					q = {
						$or : [
						{
							"processes.book.challan.isRequired" : true
						},
						{
							"processes.box.challan.isRequired" : true
						},
						{
							"processes.cover.challan.isRequired" : true
						}
						]
					};

				} else if(emp == 'bill'){
					q = {
						$or : [
						{
							"processes.book.bill.isRequired" : true
						},
						{
							"processes.box.bill.isRequired" : true
						},
						{
							"processes.cover.bill.isRequired" : true
						}
						]
					};

				} else if(emp == 'folding'){

					q = {
						"processes.book.folding.isRequired" : true
					};

				} else if(emp == 'gathering'){
					q = {
						"processes.book.folding.isRequired" : true
					};

				} else if(emp == 'perfect'){
					q = {
						"processes.book.perfect.isRequired" : true
					};

				} else if(emp == 'sewing'){
					q = {
						"processes.book.sewing.isRequired" : true
					};

				} else if(emp == 'centre_pin'){
					q = {
						"processes.book.centre_pin.isRequired" : true
					};

				} else if(emp == 'finishing'){
					q = {
						"processes.book.finishing.isRequired" : true
					};

				} else if(emp == 'lamination'){
					q = {
						$or : [
						{
							"processes.cover.lamination.isRequired" : true
						},
						{
							"processes.box.lamination.isRequired" : true
						}
						]
					};

				} else if(emp == 'uv'){
					q = {
						"processes.box.uv.isRequired" : true
					};

				} else if(emp == 'embossing'){
					q = {
						"processes.box.embossing.isRequired" : true
					};

				} else if(emp == 'foiling'){
					q = {
						"processes.box.foiling.isRequired" : true
					};

				} else if(emp == 'die_cut'){
					q = {
						"processes.box.die_cut.isRequired" : true
					};

				} else if(emp == 'pasting'){
					q = {
						"processes.box.pasting.isRequired" : true
					};

				} else if(emp == 'creasing'){
					q = {
						"processes.cover.creasing.isRequired" : true
					};

				} else if(emp == 'binding'){
					q = {
						"processes.cover.binding.isRequired" : true
					};

				} else {
					q = {

					};
				}

				return q;
			}

			var getEmpJt = function(request, response){
				mongoClient.connect(url, function(err, db){

					if(err) throw err;

					// console.log(request.query.emp);
					var emp = request.query.emp;

					console.log(getQuery(emp));
					var query = getQuery(emp);

					db.collection("JobTicket").aggregate([
					{
						$unwind: "$wt"
					},
					{
						$lookup:
						{
							from: "JobTicketProcesses",
							localField: "wt",
							foreignField: "wt_id",
							as: "processes"
						}
					},
					{
						$match : query
					}
					], function(err, resp){

						if(err) throw err;
						response.send(resp);

					});

				});
			}



	//http://localhost:3000/update?emp=designing&wt=wtID
	var updateProgress = function(request, response){
		mongoClient.connect(url, function(err, db){
			if(err) throw err;


			db.collection('JobTicketProcesses').findOne({ wt_id : request.query.wt }, function(err, ticketProcesses){
				if(err) throw err;

	    			//Push new object in array
	    			var emp = request.query.emp;
	    			var jobType = ticketProcesses.job_type;

	    			var job = null;
	    			if(jobType == 'Book' || jobType == 'book'){
	    				job = ticketProcesses.book;
	    			} else if(jobType == 'Box' || jobType == 'box'){
	    				job = ticketProcesses.box;
	    			} else {
	                	//Cover or cover
	                	job = ticketProcesses.cover;
	                }


	                var empDepartmentObject = job[emp];

	                if(emp == 'designing' || emp == 'ferro' || emp == 'plates'){
	                	//Change isDone
	                	empDepartmentObject.isDone = true;
	                	db.collection('JobTicketProcesses').
	                	update({ wt_id : request.query.wt },{$set : ticketProcesses},function(err,resp){
	                		if(err) throw err;
	                		var json_response_true = {
	                			'success' : true,
	                			'message' : request.query.emp + ' progress update success'
	                		};

	                		response.send(json_response_true);
	                	});


	                } else if(emp == 'printing' || emp == 'folding'){

	                	var arrObj = {
	                		time : request.body.time,
	                		done : request.body.done,
	                		sets_done : request.body.sets_done
	                	};


	                	  	//Change updates
	                	  	var arr = empDepartmentObject.updates;
	                	  	var arrLength = arr.length;

	                	  	var oldVal = parseInt(arr[arrLength-1].done);
	                	  	var newVal = oldVal + parseInt(arrObj.done);

	                	  	if(newVal > parseInt(ticketProcesses.total_number)){
	                	  		var json_response_false = {
	                	  			'success' : false,
	                	  			'message' : 'invalid value entered'
	                	  		};

	                	  		response.send(json_response_false);
	                	  		return;

	                	  	}

	                	  	arrObj.done = newVal;
	                	  	arrObj.done = arrObj.done + '';


	                	  	//Setting new sets or forms
	                	  	var oldValSets = parseInt(arr[arrLength-1].sets_done);
	                	  	var newValSets = oldValSets + parseInt(arrObj.sets_done);

	                	  	if(emp == 'printing'){

	                	  		if(newValSets > parseInt(ticketProcesses.total_sets)){
	                	  			var json_response_false = {
	                	  				'success' : false,
	                	  				'message' : 'invalid value entered'
	                	  			};

	                	  			response.send(json_response_false);
	                	  			return;

	                	  		}

	                	  	} else {
	                	  		//Folding
	                	  		if(newValSets > parseInt(ticketProcesses.total_forms)){
	                	  			var json_response_false = {
	                	  				'success' : false,
	                	  				'message' : 'invalid value entered'
	                	  			};

	                	  			response.send(json_response_false);
	                	  			return;

	                	  		}

	                	  	} 

	                	  	arrObj.sets_done = newValSets;
	                	  	arrObj.sets_done = arrObj.sets_done + '';
	                	  	arr.push(arrObj);



	                	  	db.collection('JobTicketProcesses').
	                	  	update({ wt_id : request.query.wt },{$set : ticketProcesses},function(err,resp){
	                	  		if(err) throw err;
	                	  		var json_response_true = {
	                	  			'success' : true,
	                	  			'message' : request.query.emp + ' progress update success'
	                	  		};
	                	  		response.send(json_response_true);
	                	  	});



	                	  	
	                	  } else{


	                	  	var arrObj = {
	                	  		time : request.body.time,
	                	  		done : request.body.done
	                	  	};


	                	//Change updates
	                	var arr = empDepartmentObject.updates;
	                	var arrLength = arr.length;

	                	var oldVal = parseInt(arr[arrLength-1].done);
	                	var newVal = oldVal + parseInt(arrObj.done);

	                	if(newVal > parseInt(ticketProcesses.total_number)){

	                		var json_response_false = {
	                			'success' : false,
	                			'message' : 'invalid value entered'
	                		};

	                		response.send(json_response_false);
	                		return;
	                	}

	                	arrObj.done = newVal;
	                	arrObj.done = arrObj.done + '';
	                	arr.push(arrObj);


	                	db.collection('JobTicketProcesses').
	                	update({ wt_id : request.query.wt },{$set : ticketProcesses},function(err,resp){
	                		if(err) throw err;

	                		var json_response_true = {
	                			'success' : true,
	                			'message' : request.query.emp + ' progress update success'
	                		};

	                		response.send(json_response_true);

	                	});

	                }

	            });
			});
			};


			module.exports = {
				getAllJTProcesses : getAllJTProcesses,
				postJTProcesses : postJTProcesses,
				getEmpJt : getEmpJt,
				updateProgress : updateProgress
			};
