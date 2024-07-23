import { trackingData } from "../../database/db.js";

export function deleteItem(idTracking) {
  const index = trackingData.findIndex(({ id }) => idTracking === id);

  if(index === -1) return false;

  trackingData.splice(index, 1);

  return true;
}