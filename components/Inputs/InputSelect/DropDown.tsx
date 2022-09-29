import { Container } from './StylesInputs'
import { ContentPropsDrop } from './Interfaces'



function DropDown({ contentdropDown, isSelection, selectNewValue }: ContentPropsDrop) {


  

  return (
    <Container isSelection={isSelection}>
      {contentdropDown.map((log, index) => (
        <div onClick={() => {}} key={index}>
          <h1>{log.label}</h1>
        </div>
      ))}
    </Container>
  );
}

export default DropDown;