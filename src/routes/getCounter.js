import { Router } from "express";
import { trackingData } from "../../database/db.js";

const getCounter = Router();

getCounter.get('/counterAll', (req, res) => {
  res.json({ counter: trackingData.length });
});


export { getCounter }