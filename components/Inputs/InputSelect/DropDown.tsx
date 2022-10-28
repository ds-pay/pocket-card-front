import { Container } from './StylesInputs'
import { DropDownProps, dataSelect } from './Interfaces'
import { useEffect, useRef } from 'react'



function DropDown({ dataSelectList, isActive, handleSelect, setIsActive}: DropDownProps) {
  
  const handleClick = (selection: dataSelect) =>{
    handleSelect(selection)
    setIsActive(false)
  }

 const menuRef = useRef();

  useEffect(() => (
  document.addEventListener("mouseup", (event) => {
     console.log(event.target)
  })
  ),[]);

  return (
    <Container ref={menuRef} isActive={isActive}>
      {dataSelectList?.map((dataSelect:dataSelect, index:number) => (
        <div onClick={() => handleClick(dataSelect)} key={index}>
          <h1>{dataSelect.label}</h1>
        </div>
      ))}
    </Container>
  );
}

export default DropDown;