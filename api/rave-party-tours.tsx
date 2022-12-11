const API_URL = process.env.API_URL

type Endpoint = (...args: any) => Promise<any>
type API = Record<string, Endpoint>


const api: API = {

  fetch: async function(endpoint: string) {
    const response = await fetch(
      `${API_URL}${endpoint}`,
      { next: { revalidate: 60 } }
    );
    return response.json();
  },

  getTours: async function() {
    return api.fetch('/tours');
  }
} 

export default api