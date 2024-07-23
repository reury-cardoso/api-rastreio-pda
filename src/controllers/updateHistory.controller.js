import { trackingData } from "../../database/db.js";
import { History } from "../models/History.model.js";

export function updateItem(id, location, status) {
  const tracking = trackingData.find((tracking) => tracking.id === id);

  if(!tracking) return false;

  const newHistory = new History(location, status);

  tracking.status = status;
  tracking.lastUpdate = new Date().toLocaleString().replace(/\//g, '-');

  tracking.history.push(newHistory);

  return true;
}