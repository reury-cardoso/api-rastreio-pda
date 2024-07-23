import { Router } from "express";
import { findItem } from "../controllers/getItem.controller.js";

const getItemRouter = Router();

const pattern = /^PDA\d{6}DEV$/;
getItemRouter.get('/track/:trackingCode', (req, res) => {
  const { trackingCode } = req.params;

  if(!trackingCode) return res.status(400).json({ message: 'Número de rastreio não informado' });

  if(!pattern.test(trackingCode)) return res.status(400).json({ message: 'Número de rastreio inválido' });

  const packageItem = findItem(trackingCode);
  if(!packageItem) return res.status(404).json({ message: 'Item não encontrado' });

  res.json({ packageItem });
});

export { getItemRouter }