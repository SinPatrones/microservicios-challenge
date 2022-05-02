const ClientController = require('../controller/ClientsController');

module.exports.createClient = async (event) => {
    const clientController = new ClientController();
    return clientController.createClient(event);
};

module.exports.clientsListHandler = async (event) => {
    const clientController = new ClientController();
    return clientController.clientsList();
};

module.exports.kpiClientsHandler = async () => {
    const clientController = new ClientController();
    return clientController.kpiClients();
};

module.exports.documentationHandler = async () => {

};
