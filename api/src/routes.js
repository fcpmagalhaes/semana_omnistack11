const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

// ONGS ROUTES
routes.post("/ongs", OngController.create);
routes.get("/ongs", OngController.index);

// INCIDENTS ROUTES
routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);
//LIST INCIDENTS OF ESPECIFIC ONG
routes.get("/profile", ProfileController.index);

routes.post("/sessions", SessionController.create);
module.exports = routes;
