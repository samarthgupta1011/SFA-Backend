var express = require('express');
var sfaRouter = express.Router();

var sfaJTController = require('./../controllers/sfaJTControllers');
var sfaProcessesController = require('./../controllers/sfaProcesses');
var sfaAuthenticate = require('./../controllers/sfaAuthenticate');

// sfaRouter.route('/register').post(sfaController.register).get(sfaController.getEmployees);
// sfaRouter.route('/ticket').post(sfaController.postJt).get(sfaController.getAllJt);

// sfaRouter.route('/login').post(sfaController.login);
// sfaRouter.route('/updates').post(sfaController.updateProgress);
// sfaRouter.route('/empticket').get(sfaController.getEmpJt);
// sfaRouter.route('/admindata').get(sfaController.getAdminData).post(sfaController.postAdminData);
// sfaRouter.route('/nevervisitagain').get(sfaController.dropAllData);






//Auth
sfaRouter.route('/register').post(sfaAuthenticate.register).get(sfaAuthenticate.getEmployees);
sfaRouter.route('/login').post(sfaAuthenticate.login);

//Processes
sfaRouter.route('/processes').get(sfaProcessesController.getAllJTProcesses).
										post(sfaProcessesController.postJTProcesses);

//EMPLOYEE JT-PROCESS JOIN
sfaRouter.route('/task').get(sfaProcessesController.getEmpJt);										

//Ticket
sfaRouter.route('/ticket').post(sfaJTController.postJt).get(sfaJTController.getAllJt);

sfaRouter.route('/update').post(sfaProcessesController.updateProgress);



//Update progress


module.exports = sfaRouter;