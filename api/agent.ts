export class Agent {
    // Entity responsible for execute data fetching

    private readonly api_url: string;

    constructor(API_URL) {
        this.api_url = API_URL
    }

    _url(endpoint: string): string{
        return `${this.api_url}${endpoint}`
    }

    async fetch(method: string, endpoint: string, data={}){
        throw new Error('Not Implemented!');
    }

    async get(endpoint){ return this.fetch('GET', endpoint) }
    async post(endpoint, data){ return this.fetch('POST', endpoint, data) }
}

export class RequestAgent extends Agent {
    async fetch(method: string, endpoint: string, data={}){
        const response = await fetch(
            this._url(endpoint),
            {
                method: method,
                body: JSON.stringify(data),

                next: { revalidate: 60 }
            }
        );
        return response.json();
    }
}

import { promises as fs } from 'fs';

export class FileSystemAgent extends Agent {
    // Expect `api_url` to be the absolute path of a directory
    // carrying a `*.json` files for each mocked endpoint

    async fetch(method: string, endpoint: string, data={}) {
    //Return the content of the data file in json format
    const response = await fs.readFile(`${this._url(endpoint)}.json`, 'utf8');
    return JSON.parse(response)
    }
}
