import {Part} from './Part'
const Content = (props) =>{
    return(
      <div>
      {
      
        props.parts.map(
          (element) =>
            <Part key={element.id} part={element} exercises = {element.id} />
        )
      }
    </div>
    )
    }
    export {Content}