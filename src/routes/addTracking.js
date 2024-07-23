import { Router } from "express";
import { addItem } from "../controllers/addTracking.controller.js";

const addTrackingRouter = Router();

addTrackingRouter.post('/track', async (req, res) => {
  const { nameItem, recipient, address } = req.body;

  if(!nameItem || !recipient || !address) return res.status(400).json({ message: 'Todos os campos são obrigatórios' });

  const addPackage = await addItem(recipient, address)

  if(!addPackage) return res.status(500).json({ message: 'Erro ao adicionar item' });

  res.json({ message: 'Item adicionado com sucesso', trackingInfo: addPackage});
});

export { addTrackingRouter }