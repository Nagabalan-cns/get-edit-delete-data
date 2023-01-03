import React,{useState} from 'react'
import  TableRow  from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Rows =({e,EditID,HandleDelete,Data,setData,DeleteData,EditID1,id}) => {

   
  const [open, setOpen] = useState(false);
 

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



  
  const handleClickOpen = (event) => {
    EditID1(event,e)   
    setOpen(true);
    
   
  };
  const handleClose = () => {
    setOpen(false);

  };

  

  const handleClose1 = () => {
 DeleteData(e.id)

   setOpen(false);
   if(id === "React")
   {
setData([...Data[0].status=0])
   }
   if(id === "Angular")
   {
setData([...Data[1].status=0])
   }
   if(id === "Html")
   {
setData([...Data[2].status=0])
   }
   if(id === "Css")
   {
setData([...Data[3].status=0])
   }
   if(id === "Javascript")
   {
setData([...Data[4].status=0])
   }

  };
  console.log(id)
console.log(Data)

  return (
    <>
    <div>
     
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are You Sure To Delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do You Want To Delete The Data
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
          NO
          </Button>
          <Button onClick={handleClose1} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>



        <TableRow>
           
            <TableCell>{e.skill}</TableCell>
            <TableCell>{e.value}</TableCell>
            <TableCell>{e.percentage}</TableCell>
          
       
           
            <TableCell><button onClick={(event) => EditID(event,e)}>Edit</button>
          
          
            <button onClick={handleClickOpen} >Delete</button>
           
            </TableCell>
             </TableRow>
</>
  )
}
  
export default Rows