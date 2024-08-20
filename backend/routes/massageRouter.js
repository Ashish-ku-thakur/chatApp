import express from 'express';
import { GetAllMassage, MassageCreate } from '../controllers/massageController.js';
import { Isauthentication } from '../middelware/authentication.js';

let router = express()

router.route("/createMassage/:id").post(Isauthentication, MassageCreate)
router.route("/allMassage/:id").get(Isauthentication, GetAllMassage)

export default router