import { Box, Container,Grid, Icon, Typography,Button,Rating, ButtonGroup } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { StateObject } from './context/ShoeObject';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const ProductBox = () => {
     
    const shoes = useContext(StateObject);
    let {ProductDetails} = useParams();
    
    const shoeobject = shoes.state[ProductDetails]
   
    let {name,brand,gender,price,sale_price,category,items_left,imageURL,rating,sizes_avbl,description} = shoeobject
    
    let [addCart,setaddCart] = useState([false,"Add To Cart"]);

    return(
        <>
        <Grid container sx={{marginTop:16}}>
           <Grid item xs={2.5}> </Grid>
           <Grid item xs={7} sx={{height:450,border:"1px solid black"}}>
            <Grid container sx={{height:"100%"}}>
                <Grid item xs={6} ><img src={imageURL} alt="shoe" width="100%" height="100%"/></Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" component="span"><i>{name}</i></Typography><br /><br />
                    <Typography sx={{paddingLeft:2}}variant="subtitle2" component="div"><li>{gender}{' '}{category}{' '}shoes</li></Typography>
                    <Box sx={{width:"100%", height:"40%",bgcolor:"orange"}}>
                        <Typography variant="subtitle" component="span">Brand:</Typography>
                        <Typography sx={{marginLeft:2}}variant="subtitle2" component="span">{brand}</Typography>
                        <br />
                        <Typography variant="subtitle1" component="span">{description}</Typography>
                        <br />
                        <Typography variant="subtitle2" component="span">Sizes:</Typography>
                        <Container>
                        <ButtonGroup variant="contained" color="error">
                            {sizes_avbl.map((size)=>(
                                <Button variant="contained" color="warning">{size}</Button>))}
                        </ButtonGroup>
                        </Container>
                    
                    </Box>
                    <Typography variant="subtitle" component="div"><s>$ {price}</s></Typography>
                    <Typography variant="h4" component="div">$ {sale_price}</Typography>
                    <Container sx={{height:"15%",bgcolor:"red"}}>
                    <Button sx={{width:"100%",bgcolor:"black",color:"white"}} onClick={()=>{setaddCart([true,"Added to Cart "])}}>{addCart[0]?<CheckCircleIcon fontSize="small" />:<ShoppingCartIcon />}{addCart[1]}</Button>
                    <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="subtitle" component="div">Hurry! Order now, only {items_left} items left</Typography>   
                   </Container>
                   <Box sx={{color:"green",marginBottom:1}}>
                   <Icon>< VerifiedUserIcon  fontSize="small"/></Icon><Typography variant="subtitle2" component="span">VerifiedUser</Typography>
                   </Box>
                   <Box sx={{marginTop:0,width:"100%",display:"flex",justifyContent:"space-between"}}>
                   <Rating value={rating} precision={0.5} size="small" readOnly/> <Typography variant="subtitle" component="span">Pakistan</Typography>
                   </Box>
                </Grid>
            </Grid>
            </Grid>
           <Grid item xs={2.5} ></Grid>
        </Grid>
        </>
    )
}