import { trackingData } from "../../database/db.js";
import { Tracking } from "../models/Tracking.model.js";

function checkExisting(trackingNumber) {
  return trackingData.some((tracking) => tracking.trackingNumber === trackingNumber);
};

function generateTrackingNumber() {
  const number = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  const trackingNumber = `PDA${number}DEV`;

  const resultCheck = checkExisting(trackingNumber)

  if (resultCheck) {
    generateTrackingNumber();
  } else {
    return trackingNumber;
  }
}

function generateEstimatedDeliveryDate() {
  const today = new Date();
  today.setDate(today.getDate() + 30);
  
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  
  return `${day}-${month}-${year}`;
}

export function addItem(recipient, address) {
  const trackingNumber = generateTrackingNumber();
  const estimatedDeliveryDate = generateEstimatedDeliveryDate();

  const tracking = new Tracking(
    trackingNumber,
    recipient,
    estimatedDeliveryDate,
    address
  );
  
  trackingData.push(tracking);
  
  return { trackingNumber: tracking.trackingNumber, ID : tracking.id };
}
