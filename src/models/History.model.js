export class History{
  constructor(location, status){
    this.date = new Date().toLocaleDateString('pt-BR').split('/').join('-');
    this.location = location;
    this.status = status;
  }
}