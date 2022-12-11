export class GenericClient {
    // Represents an API client interface

    private agent: any;

    constructor(agent) {
        this.agent = agent
    }

    async fetch(method, endpoint, data= {}) {
        return this.agent.fetch(method, endpoint, data)
    }
}

export default class Client extends GenericClient {

    async getTours() {
        return await this.fetch('GET', '/tours')
    }
}
