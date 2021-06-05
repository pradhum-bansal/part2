import axios from 'axios'
 const baseUrl = "http://localhost:3001/persons";

 const getAll = () =>
 {
     const request = axios.get(baseUrl)
      return request.then(response=> response.data)

}

const create = (newPerson) => {
    const request = axios.get(baseUrl,newPerson)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request 
  };
 
export default { getAll, 
     create,deletePerson }