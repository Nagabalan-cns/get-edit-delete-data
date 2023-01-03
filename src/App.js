import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import data from "./Skill.json"
import Rows from './Rows';


import Edit from './Edit';
function App() {
 const [Data, setData]= useState (data);
  const [MapData,setMapData]=useState(Data)
  const [formdata,setformdata] = useState({
    skill:"",
    value:"",
    percentage:""
  })

 const local = JSON.stringify(Data)
 localStorage.setItem('skill',local)
 JSON.parse(localStorage.getItem('skill'))
 const [id,setid] = useState(0)

const [editformdata,seteditformdata] =useState(
{  
    skill:"",
    value:"",
    percentage:""
})
console.log(Data)
//OnChnge Value For Adding Form
const handleform =(e)=>{
  e.preventDefault();
  const Fieldname = e.target.getAttribute("name");
  const fieldvalue = e.target.value;
  const newformdata ={...formdata};
  newformdata[Fieldname] = fieldvalue;
  setformdata(newformdata);
  
  }
//For Add a Data
  const formsubmit = (event) => {
    event.preventDefault();
    const newData = {
      id : Data.length+1,
      skill: formdata.skill,
      value:formdata.value,
      percentage:formdata.percentage,
   
    }
    const newdatas = [...MapData,newData];
    setMapData(newdatas)
    localStorage.setItem('skill',Data)
  }
// Props For Rows Componenet OnClick Edit Button 
const EditID = (event,e) =>{
  event.preventDefault();
  setid(e.id)
}

const EditID1 = (event,e) =>{
  event.preventDefault();
  setid(e.skill)
}
//Onchange Value of Edit Component
const HandleEdit = (event) =>{
  event.preventDefault();
  const Fieldname = event.target.getAttribute("name");
  const fieldvalue = event.target.value;
  const newformdata ={...editformdata};
  newformdata[Fieldname] = fieldvalue;
 seteditformdata(newformdata)

 localStorage.setItem('skill', Data);
}
//Save Edit Values
const HandleEditSubmit = (event) =>{
  event.preventDefault();
  const EditItem={ 
    skill: editformdata.skill,
    value:editformdata.value,
    percentage:editformdata.percentage
  }
  const newEditItem =[...MapData];
  const index = MapData.findIndex((e) => e.id === id)
  newEditItem[index] = EditItem;
  setMapData(newEditItem)
  setid(null)
 localStorage.setItem('skill', Data);
}

//cancel Button For Edit 
const CancelEdit =() =>{
  setid(null)
}

//Delete Data
const DeleteData =(id) =>{
const newData=[...MapData];
const index = MapData.findIndex((s) => s.id === id);
newData.splice(index,1);
setMapData(newData)
localStorage.setItem('skill', Data);
 

}

  return (
   <>
   <form autoComplete='off' onSubmit={HandleEditSubmit}>
   <TableContainer>
    <Table>
    <TableHead>
      <TableRow>
     
        <TableCell>Skill</TableCell>
        <TableCell>Value</TableCell>
        <TableCell>Percentage</TableCell>

        <TableCell>Action</TableCell>

      </TableRow>
    </TableHead>

  
      {
       MapData.map((e,index) =>(
        <TableBody key={index}>
         {id === e.id ? (
         <Edit editformdata={editformdata} HandleEdit={HandleEdit} CancelEdit={CancelEdit} id ={id} 
         />
         ) : (
          <Rows e={e} EditID={EditID} DeleteData={DeleteData} MapData={MapData} 
          setMapData={setMapData} setData={setData}  Data={Data} EditID1={EditID1} id={id}/>
         )}  
        </TableBody>
       ))
      }

   

  
    </Table>
   </TableContainer>
   </form>
   <br></br>
   <br></br>

<form onSubmit={formsubmit} autoComplete="off">
  <input 
    type="text"
    name='skill'
    required='required'
    placeholder='Enter Your Skill'
    onChange={handleform}/>
   
<input 
    type="number"
    name='value'
    required='required'
    placeholder='Enter Your Value'
    onChange={handleform}/>
  
    
<input 
    type="text"
    name='percentage'
    required='required'
    placeholder='Enter Your Percentage'
    onChange={handleform}/>

    <button>Add</button>
</form>
  </>
  )
}

export default App