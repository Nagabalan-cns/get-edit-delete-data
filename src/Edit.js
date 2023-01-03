import  TableCell from '@mui/material/TableCell'
import  TableRow from '@mui/material/TableRow'

import React from 'react'

function Edit({HandleEdit,CancelEdit,id}) {

  return (
    <>
   <TableRow>
    <TableCell>
        <input type="text"
      required="required" 
      name='skill' 

      onChange={HandleEdit} />
        
    </TableCell>
    <TableCell>
    <input type="number"
      required="required"
      name='value'

      onChange={HandleEdit} />
       
    </TableCell>
    <TableCell>
    <input type="text"
      required="required"
      name='percentage'
   
      onChange={HandleEdit} />
          </TableCell>
          <TableCell><button>Save</button>
         <button onClick={CancelEdit}>Cancel</button></TableCell>
          </TableRow>
          </>
  )
  
}

export default Edit