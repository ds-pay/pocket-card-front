import React from 'react'
import Autocomplete  from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Container, Content } from './StylesInputKey'




const InputKeySelect = ({ array }) => {



  return (
      <Content>
        {array.map((sec, index) => (
          <div className='keyselect' key={index}>
            <Autocomplete 
                multiple
                limitTags={2}
                id={sec.id}
                options={sec.array}
                getOptionLabel={(option) => option.title}
                defaultValue={[sec.array[1], sec.array[5], sec.array[4]]}
                renderInput={(params) => (
                    <TextField {...params} label={sec.label} placeholder={sec.placeholder} variant={sec.variant}/>
                )}
                sx={{ width: '200%'}}
            />
          </div>
        ))}
      </Content>
  );
}

export default InputKeySelect