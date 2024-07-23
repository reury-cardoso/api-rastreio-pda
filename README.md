# API de Rastreamento de Encomendas

Projeto de API de rastreamento de encomendas, desenvolvido em Node.js! 📦🚚 Esta API foi criada no 4º módulo do Curso Programadores do Amanhã e é ideal para gerenciar o rastreamento de encomendas de forma eficiente.

## Funcionalidades

A API oferece uma interface simples para:

- Monitorar encomendas
- Adicionar novas entregas
- Editar e atualizar o histórico de rastreamento
- Excluir itens

## Rotas

Aqui estão as rotas principais da API:

### 1. Recuperar todos os itens

- **Método:** `GET`
- **Rota:** `/packages`
- **Descrição:** Recupera todos os itens no banco de dados mockado.

### 2. Buscar item específico pelo número de rastreamento

- **Método:** `GET`
- **Rota:** `/track/{number}`
- **Descrição:** Busca um item específico pelo número de rastreamento.

### 3. Obter a contagem de todos os itens

- **Método:** `GET`
- **Rota:** `/counterAll`
- **Descrição:** Obtém a contagem de todos os itens.

### 4. Adicionar um novo item para rastreamento

- **Método:** `POST`
- **Rota:** `/track`
- **Descrição:** Adiciona um novo item para rastreamento.
- **Body (raw JSON):**
    ```json
    {
        "nameItem": "Livro de Receitas",
        "recipient": "Juliana Mendes",
        "address": "Rua do Sol, 789, Casa 12, Vila Nova, Belo Horizonte, MG, 30100-000"
    }
    ```


### <span style="color:red;">⚠️ Aviso:</span>

<span style="color:red;">Para uma maior proteção, rotas como DELETE e PATCH(UPDATE) precisam do ID para serem usadas e não do código de rastreamento.</span>

### 5. Deletar um item específico

- **Método:** `DELETE`
- **Rota:** `/track/{id}`
- **Descrição:** Deleta um item específico.

### 6. Atualizar o histórico de rastreamento

- **Método:** `PATCH`
- **Rota:** `/update`
- **Descrição:** Atualiza o histórico de rastreamento.
- **Body (raw JSON):**
    ```json
    {
        "id": "209ff323-db7f-4cf0-aba8-0334cb687332",
        "location": "Centro, Avenida Brasil 101",
        "status": "Entregue"
    }
    ```

## Exemplos de Uso

- **GET /track/PDA109894DEV:** Recupera o item com o número de rastreamento `PDA109894DEV`.
- **POST /track:** Adiciona um novo item para rastreamento com as informações fornecidas no corpo da requisição.
- **GET /packages:** Recupera todos os itens no banco de dados.
- **DELETE /track/d47ac10b-58cc-4372-a567-0e02b2c3d480:** Deleta o item com o ID `d47ac10b-58cc-4372-a567-0e02b2c3d480`.
- **PATCH /update:** Atualiza o histórico de rastreamento com as informações fornecidas no corpo da requisição.
- **GET /counterAll:** Obtém a contagem de todos os itens.

## Importar no Postman

Caso queira, você pode baixar este arquivo e importar no programa de API Postman para testar todas as rotas facilmente.

[Baixe o arquivo de configuração para o Postman](postman_model.json)

## Exemplos em Vídeo

[![Exemplos em Vídeo](https://img.youtube.com/vi/NLJSokxMGGs/0.jpg)](https://www.youtube.com/watch?v=NLJSokxMGGs)

## Requisitos

- Node.js (v14 ou superior)
- Dependências instaladas (consulte o `package.json`)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/reury-cardoso/api-restreio-pda.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd api-restreio-pda
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o servidor:
    ```bash
    npm start
    ```

## Documentação

Para mais detalhes, consulte o código-fonte e a documentação no [GitHub](https://github.com/reury-cardoso/api-restreio-pda).

## Contribuições

Se você encontrar problemas ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---