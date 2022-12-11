import Client from "./client";
import {FileSystemAgent, RequestAgent} from "./agent";


const API_URL = process.env.API_URL;

let agent_class = API_URL.startsWith('http') ? RequestAgent : FileSystemAgent
const agent = new agent_class(API_URL)

export default new Client(agent)
