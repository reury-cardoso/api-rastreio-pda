export const trackingData = [
  {   
      id: "d47ac10b-58cc-4372-a567-0e02b2c3d480",
      trackingNumber: "PDA109894DEV",
      status: "Em trânsito",
      recipient: "João Silva",
      estimatedDeliveryDate: "2023-07-12",
      address: "Rua das Flores, 123, São Paulo, SP",
      lastUpdate: "2023-07-10T10:00:00Z",
      history: [
          { date: "2023-07-09", location: "Centro de Distribuição SP", status: "Recebido" },
          { date: "2023-07-10", location: "Centro de Distribuição SP", status: "Em trânsito" }
      ]
  },
  {
      id: "e47ac10b-58cc-4372-a567-0e02b2c3d481",
      trackingNumber: "PDA1039894DEV",
      status: "Entregue",
      recipient: "Maria Souza",
      estimatedDeliveryDate: "2023-07-11",
      address: "Avenida Paulista, 456, São Paulo, SP",
      lastUpdate: "2023-07-11T15:00:00Z",
      history: [
          { date: "2023-07-09", location: "Centro de Distribuição SP", status: "Recebido" },
          { date: "2023-07-10", location: "Centro de Distribuição SP", status: "Em trânsito" },
          { date: "2023-07-11", location: "Centro de Distribuição SP", status: "Entregue" }
      ]
  },
  {   id: "209ff323-db7f-4cf0-aba8-0334cb687332",
      trackingNumber: "PDA109834DEV",
      status: "Aguardando retirada",
      recipient: "Carlos Lima",
      estimatedDeliveryDate: "2023-07-13",
      address: "Rua dos Pinheiros, 789, São Paulo, SP",
      lastUpdate: "2023-07-10T12:00:00Z",
      history: [
          { date: "2023-07-09", location: "Centro de Distribuição SP", status: "Recebido" },
          { date: "2023-07-10", location: "Centro de Distribuição SP", status: "Em trânsito" },
          { date: "2023-07-10", location: "Agência São Paulo", status: "Aguardando retirada" }
      ]
  }
];
