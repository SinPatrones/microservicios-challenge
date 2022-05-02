const {ClientsRepository} = require("../repository");

class ClientService {
    constructor() {
        this.repository = new ClientsRepository();
    }

    async createClient(dataClient){
        try {
            return this.repository.create({...dataClient});
        } catch (e) {
            return null;
        }
    }

    async getClientsAndDateOfDeath(){
        const clients = await this.repository.getAll();

        return clients.map(client => {
            const {birthday} = client;
            const birthdayNumber = birthday.split('/').join('').split('');
            const sumBirthdayNumber = birthdayNumber.reduce((acc, number) => {
                return acc + Number(number);
            }, 0);
            const numberOfDeath = sumBirthdayNumber.toString().split('').reduce((acc, number) => {
                return acc + Number(number);
            }, 0);

            client.dateOfDeath = '';

            switch (numberOfDeath) {
                case 1:
                    client.dateOfDeath = 'At least 80 years';
                    break;
                case 2:
                    client.dateOfDeath = 'When you\'re 8, 20, 30, 46 or 68 years old';
                    break;
                case 3:
                    client.dateOfDeath = 'When you\'re 45 or 74 years old';
                    break;
                case 4:
                    client.dateOfDeath = 'It\'s probably you have a long life';
                    break;
                case 5:
                    client.dateOfDeath = 'Take care of yourself always, you are probably to die of old age.';
                    break;
                case 6:
                    client.dateOfDeath = 'It\'s probably you have a long life, but take care when you\'re 14, 25, 48, or 70 years old.';
                    break;
                case 7:
                    client.dateOfDeath = 'you\'re going to have a long life';
                    break;
                case 8:
                    client.dateOfDeath = 'It\'s up to you to to have a long life';
                    break;
                case 9:
                    client.dateOfDeath = 'take care if you want to live more than 50 years.';
                    break;
                default:
                    client.dateOfDeath = 'Hmm...';
            }

            return client;
        });
    }

    async averageAgeAllClients(){
        const clients = await this.repository.getAll();

        return clients.reduce((acc, client) => {
            return acc + client.age;
        }, 0) / clients.length;
    }

    async customerStandardDeviation(){
        const clients = await this.repository.getAll();
        const averageAge = clients.reduce((acc, client) => {
            return acc + client.age;
        }, 0) / clients.length;

        return Math.sqrt(clients.reduce((acc, client) => {
            return acc + Math.pow(client.age - averageAge, 2);
        }, 0) / clients.length);
    }
}

module.exports = ClientService;
