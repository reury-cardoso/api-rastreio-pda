import { Router } from "express";
import { trackingData } from "../../database/db.js";

const getAllRouter = Router();

getAllRouter.get('/packages', (req, res) => {
  res.json({ trackingData });
});


export { getAllRouter }