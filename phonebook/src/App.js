import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import contactservices from './services/persons'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'

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
    
  }
}

useEffect(() => {
  console.log('effect')
 contactservices.getAll()
    .then(response => {
      setPersons(response)
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

  const handleClick=(event)=>
  {
    const id = parseInt(event.target.dataset.id);
    const person = persons.find(p => p.id===id)
   const confirm = window.confirm(`Delete ${person.name}?`)
    if(confirm) deletePerson(id)
  }
 

  const deletePerson = ( id ) => {
    contactservices.deletePerson(id)
    .finally(()=> setPersons(persons.filter(p=> p.id !== id)))
  }
  const filtered = persons.filter(person => {
    return (
      person.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())
    )
  })

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter handleFilterChange = {event => handleNameFilter(event)} value = {nameFilter}/>
    
      <h2>Add a new</h2>
      <PersonForm
      nameValue = {newName}
      numberValue = {newNumber}
      handleSubmit = {event => addPerson(event)}
      handleNoteChange = {event => handleNoteChange(event)}
      handleNumberChange = {event => handleNumberChange(event)}
      />
      <h2>Numbers</h2>
      <Persons persons = {filtered}  handleClick = {event => handleClick(event)}/>
    </div>
  )
}

export default App