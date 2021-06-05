import React from 'react'

const PersonForm = (props) => {
    return(
        <div>
        <form  onSubmit = {props.handleSubmit}>
        <div>
          name: <input onChange={props.handleNoteChange } value = {props.nameValue} />
        </div>
        <div>
          number: <input onChange={props.handleNumberChange}value = {props.numberValue}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </div>
    )
}

export default PersonForm