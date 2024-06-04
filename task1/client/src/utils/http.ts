import axios from 'axios'
import { Employee } from 'objects/Employee'

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
})

export const loadEmployees: (text: string) => Promise<Employee[]> = (
  text: string,
) => {
  return new Promise((resolve, reject) => {
    client
      .get(text === '' ? '' : `?term=${text}`)
      .then((res) => resolve(res.data))
      .catch(reject)
  })
}

export default client
