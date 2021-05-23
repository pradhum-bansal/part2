import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number : "123456789" }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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
    setPersons(persons.concat(p))
    setNewName('')
    setNewNumber('')
  }
}

  const handleNoteChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const Person = (props)=>
  {
    return(
      <li key = {props.name}>{props.name} {props.number}</li>
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(person => <Person key= {person.name} name = {person.name} number = {person.number} />)}
      </ul>
    </div>
  )
}

export default App