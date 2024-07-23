import { Router } from "express";
import { deleteItem } from "../controllers/deleteTracking.controller.js";

const deleteTrackingRouter = Router();

deleteTrackingRouter.delete('/track/:idTracking', (req, res) => {
  const { idTracking } = req.params;

  if(!idTracking) return res.status(400).json({ message: 'ID não informado' });

  const deletePackage = deleteItem(idTracking);
  if(!deletePackage) return res.status(404).json({ message: 'Item não encontrado' });

  res.json({ message: 'Item deletado com sucesso' });
});

export { deleteTrackingRouter }