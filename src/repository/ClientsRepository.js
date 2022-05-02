const AWS = require('aws-sdk');
const Client = require("../domain/Client");

class ClientsRepository {
    constructor() {
        this.dynamoDb = new AWS.DynamoDB.DocumentClient();
    }

    async create(client) {
        try {
            const newClient = new Client(client);

            await this.dynamoDb.put({
                TableName: 'ClientTable',
                Item: newClient
            }).promise();

            return newClient;

        } catch (e) {
            console.log('error repository', e);
            return null;
        }
    }


      async getAll() {
          try {
              const result = await this.dynamoDb.scan({
                  TableName: 'ClientTable',
              }).promise();

              return result.Items;

          } catch (e) {
              console.log('error repository', e);
              return null;
          }
      }
}

module.exports = ClientsRepository;
