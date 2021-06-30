import axios from 'axios'
 const baseUrl = "/api/persons";

 const getAll = () =>
 {
  return axios.get(baseUrl)

}

const create = (newPerson) => {
    const request = axios.post(baseUrl,newPerson)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request 
  };
  const update = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson);
    return request.then(response => response.data)
   }

export default { getAll, 
     create,deletePerson,update}