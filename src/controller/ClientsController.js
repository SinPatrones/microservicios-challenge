const AWS = require('aws-sdk');
const { ClientService } = require("../service");

class ClientsController {
    constructor() {
        this.clientService = new ClientService();
    }

    async createClient(event) {
        try {
            const body = JSON.parse(event.body);

            const newClient = await this.clientService.createClient({...body});

            if (newClient) {
                const response = {
                    status: 201,
                    body: {
                        message: "Client created successfully",
                        data: newClient,
                    },
                }
                return response;
            }

            const response = {
                status: 500,
                body: {
                    message: "Can not create client",
                    data: null,
                },
            }
            return response;
        } catch (e) {
            console.log(e);
            return {
                status: 500,
                body: JSON.stringify(e),
            };
        }
    }

    async kpiClients() {
        try {
            const average = await this.clientService.averageAgeAllClients();

            const standardDeviation = await this.clientService.customerStandardDeviation();

            const response = {
                status: 200,
                body: {
                    average,
                    standardDeviation,
                },
            }

            return response;
        } catch (e) {
            console.log(e);
            return {
                status: 500,
                body: JSON.stringify(e),
            };
        }
    }

    async clientsList() {
        try {
            const clientsData = await this.clientService.getClientsAndDateOfDeath();

            const response = {
                status: 200,
                body: {
                    clientsData,
                },
            }

            return response;
        } catch (e) {
            console.log(e);
            return {
                status: 500,
                body: JSON.stringify(e),
            };
        }
    }
}

module.exports = ClientsController;
