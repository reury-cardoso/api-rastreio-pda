import { Router } from "express";
import { updateItem } from "../controllers/updateHistory.controller.js";

const updateHistoryRouter = Router();

updateHistoryRouter.patch('/update', (req, res) => {
  const { id, location, status } = req.body;

  if(!id || !location || !status) return res.status(400).json({ message: 'Todos os campos são obrigatórios' });

  const updatePackage = updateItem(id, location, status);

  if(!updatePackage) return res.status(404).json({ message: 'Item não encontrado' });

  res.json({ message: 'Item atualizado com sucesso', processStatus: updatePackage});
});

export { updateHistoryRouter }
