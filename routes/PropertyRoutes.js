import express from 'express';
import { SaveProperty, getAllproperty,getAllPropertyByOwner,getAllPropertyById, getAllPropertyWithOwner, getAllPropertyByOwnerAdmin,  } from  '../controllers/PropertyController.js';
let routes = express.Router();

routes.post("/", SaveProperty);

routes.get("/", getAllproperty);

routes.get("/owner", getAllPropertyByOwner)

routes.get("/withowner", getAllPropertyWithOwner)

routes.get("/find/:id", getAllPropertyById);

routes.get("/admin/:id", getAllPropertyByOwnerAdmin);

export default routes;