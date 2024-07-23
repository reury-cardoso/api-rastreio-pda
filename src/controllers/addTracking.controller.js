import { trackingData } from "../../database/db.js";
import { Tracking } from "../models/Tracking.model.js";

function checkExisting(trackingNumber) {
  return trackingData.some((tracking) => tracking.trackingNumber === trackingNumber);
};

function generateTrackingNumber() {
  const number = Math.floor(Math.random() * 1000000);
  const trackingNumber = `PDA${number}DEV`;

  const resultCheck = checkExisting(trackingNumber)

  const pattern = /^PDA\d{6}DEV$/;
  if (resultCheck || !pattern.test(trackingNumber)) {
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
