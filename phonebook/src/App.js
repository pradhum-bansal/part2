import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import contactservices from './services/persons'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'
import './index.css'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message,setMessage] = useState('message')
  const People = persons.map(person =>{
    return person.name})

  const addPerson = (event)=> {
    event.preventDefault()
    if(People.includes(newName))
    {
     if( window.confirm( `${newName} is alrady added to the phonebook, ` +
      "replace the old number with a new one?"))
      {
        const people = persons.find(p=>p.name === newName)
        const id = people.id
        const newPerson = {...people, number: newNumber}
        contactservices.update(id,newPerson).then(returnedPerson => {
          setPersons(persons.map(p => (p.id !== id ? p : returnedPerson)));
          return true;
        })
      }
    }
    
    else{
    const p = {
      name: newName,
      number: newNumber
    }
   contactservices.create(p)
    .then(response => {
      setPersons(persons.concat(response))

      setMessage(
        `contact ${p.name} added successfully`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)

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
        <Notification message = {message}/>
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