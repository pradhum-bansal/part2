import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event)=> {
    event.preventDefault()

    const p = {
      name: newName
    }
    setPersons(persons.concat(p))
    setNewName('')
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const Person = (props)=>
  {
    return(
      <li key = {props.name}>{props.name}</li>
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key= {person.name} name = {person.name}/>)}
      </ul>
    </div>
  )
}

export default App