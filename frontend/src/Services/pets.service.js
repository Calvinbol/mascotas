import { api } from "./config";

export async function getAllMascotas(tipo) {
  try {
    const response = await api.get(`/pet${tipo}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
