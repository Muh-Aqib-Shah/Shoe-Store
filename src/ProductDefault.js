import { Box, Container,Grid,Paper,Typography,Rating,List,ListItem,ListItemButton,ListItemText } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import React, { useContext, useState } from 'react';
import { StateObject } from './context/ShoeObject';
import { Link, } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


export const ProductDefault = () => {
 
 let {state,FilteredItems} = useContext(StateObject);

  let [expanded,setExpanded] = useState(false)
  const FilterItems = [
  {value:"Male",gender:"MEN",type:"Category",id:1},
  {value:"Female",gender:"WOMEN",type:"Category",id:2},
  {value:"Children",gender:"KIDS",type:"Category",id:3},
  {value:"Price(low to high)",type:"Price(L-H)",id:4},
  {value:"Price(high to low)",type:"Price(H-L)",id:5},

 ]
 function discount(orignalPrice,salePrice){
   console.log("RECIEVED ENDS ARE:",orignalPrice,"AND",salePrice)
    let percent = orignalPrice/100;
    let discount = salePrice/percent;
    return (100 - Math.trunc(discount));
 }

 return (
    <div >
        
        <Container sx={{marginTop:16}}>
        <Grid container>
              <Grid item xs={6}><h3>Products</h3></Grid>
              <Grid item xs={5.5} sx={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
                <Box sx={{width:"20%",borderRadius:1}}>
                  <button style={{width:"100%",fontSize:17,backgroundColor:"darkcyan",color:"black",display:"flex",justifyContent:"center"}} onClick={()=>{setExpanded(!expanded)}}>
                Filter<FilterAltIcon fontSize='small' /></button><Box sx={{position:"absolute"}}>
                  <Collapse in={expanded} sx={{width:"100%",bgcolor:"wheat"}}>
                <List>
                  {FilterItems.map((filter)=>(
                  <ListItem key={filter.id} onClick={()=> {FilteredItems(filter.type,filter.gender);setExpanded(false)}}><ListItemButton>
                    <ListItemText sx={{borderBottom:"1px solid black"}}>{filter.value}</ListItemText>
                    </ListItemButton>
                  </ListItem>))}
                </List>
                </Collapse>
                </Box>
                </Box>
                </Grid>
        </Grid>
        <hr />
       <br/>
       
 <Grid container spacing={5}>
            {Object.entries(state).map(([ProductID,{name,id,price,sale_price,rating,imageURL}])=>(
              
            <Grid id={id} item xs={2.3} key={ProductID}>
          <Paper sx={{height:320,boxSizing:"border-box",boxShadow:"-3px -3px 10px grey, 3px 3px 10px grey"}} elevation={3}>
          <Link to={ProductID}>
            <Box sx={{width:"100%",height:"55%",bgcolor:"cyan"}}>
              <img src={imageURL} alt='Shoe' width="100%" height="100%" />
            </Box>
            </Link>
          <Box sx={{width:"auto",height:"45%", margin:1}}>
            <Grid container direction="column" spacing={1} sx={{borderTop:"1px solid black"}}>
              <Grid item xs={3}><Typography variant="subtitle2" component="div">{name}</Typography></Grid>
              <Grid item xs={3}  sx={{color:"rgb(218, 50, 75)"}}><Typography variant="h5" component="h6">$ {sale_price}</Typography></Grid>
              <Grid item xs={3} ><Typography variant="subtitle" component="h6"><s>$ {price}</s>{' '}{discount(price,sale_price)}% </Typography></Grid>
              <Grid item xs={3} sx={{display:"flex",justifyContent:"space-between"}}><div ><Rating value={rating} precision={0.5} readOnly size='small'/><Typography sx={{marginBottom:"10"}}variant="subtitle2" component="span">(9)</Typography></div><div><Typography variant="subtitle2" component="span">Avalible</Typography></div></Grid>
            </Grid>
            </Box>        
          </Paper>
          </Grid>
          
))}
        </Grid> 
        </Container>
    </div>
  );
 }//
 
 /*
 
 sx={{display:"flex",alignItems:"flex-start"}}
  
  
 */