import { v4 as uuidv4 } from 'uuid';

export class Tracking{
  constructor(trackingNumber, recipient, estimatedDeliveryDate, address){
    this.id = uuidv4();
    this.trackingNumber = trackingNumber;
    this.status = "Recebido - Aguardando atualizações";
    this.recipient = recipient;
    this.estimatedDeliveryDate = estimatedDeliveryDate;
    this.address = address;
    this.lastUpdate = new Date().toLocaleString().replace(/\//g, '-');
    this.history = [];
  }
}