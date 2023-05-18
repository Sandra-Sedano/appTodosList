import axios from 'axios'
import { Task } from '../types';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 3000
});
//Listar todos os registros 
export async function getAll() {
    const tasks= await api.get('tasks')
    return tasks.data
}
//buscar registro 
export async function getById(id:number) {
    const tasks= await api.get(`tasks/${id}`)
    return tasks.data
}
// salvar registro
export async function save(tasks:Task) {
    const response= await api.post(`tasks`,{
        ...tasks
    })
    return response.data
}
// atualizar registro 
export async function update(tasks:Task) {
    const response= await api.put(`tasks/${tasks.id}`, {
        ...tasks
    })
    return response.data
}
//excluir registro 
export async function exclude(id:number) {
    const tasks= await api.delete(`tasks`)
    return tasks.data
}