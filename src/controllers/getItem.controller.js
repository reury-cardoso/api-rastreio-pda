import { trackingData } from "../../database/db.js";

export const findItem = (trackingCode) => trackingData.find(({ trackingNumber }) => trackingCode === trackingNumber);