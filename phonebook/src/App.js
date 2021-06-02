import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [nameFilter, setNameFilter] = useState('');
  const People = persons.map(person =>{
    return person.name})

  const addPerson = (event)=> {
    event.preventDefault()
    if(People.includes(newName))
    {
      alert(`${newName} is already added to phonebook`)
    }
    else{
    const p = {
      name: newName,
      number: newNumber
    }
    axios
    .post('http://localhost:3001/persons', p)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
    setPersons(persons.concat(p))
    setNewName('')
    setNewNumber('')
  }
}

useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
}, [])

  const handleNoteChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)  
  }
  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleNameFilter = (event) => {
    // console.log(event.target.value)
    setNameFilter(event.target.value)
  }


  const Person = (props)=>
  {
    return(
      <li key = {props.name}>{props.name} {props.number}</li>
    )
  }

  
  const filtered = persons.filter(person => {
    return (
      person.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())
    )
  })
  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input onChange={event=>handleNameFilter(event)} value ={nameFilter}/>
        </div>
    
      <h2>Add a new</h2>
      <form  onSubmit = {event => addPerson(event)}>
        <div>
          name: <input onChange={event =>handleNoteChange(event)}value = {newName} />
        </div>
        <div>
          number: <input onChange={event =>handleNumberChange(event)}value = {newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filtered.map(person => <Person key= {person.name} name = {person.name} number = {person.number} />)}
      </ul>
    </div>
  )
}

export default App