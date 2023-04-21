import { Box, Grid,Container,Icon,IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowBackIosNew } from '@mui/icons-material';

export const Home = () => {
   
    const imgData=["https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg",
    "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/d0720712d81e42b1b30fa80800826447_9366/Stan_Smith_Shoes_White_M20607_M20607_01_standard.jpg",
    "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",
    "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg",
    "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg",
    "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg"]
    
    let [imgNum,SetimgNum] = useState(0)
    function handleimagefrwrd(){
        if(imgNum>=5){
            SetimgNum(0);
            return 0;
        }
        SetimgNum(++imgNum)
    }
    function handleimagebckwrd(){
        if(imgNum<=0){
            SetimgNum(5);
            return 0;
        }
        SetimgNum(--imgNum)
    }

    const wallpaper = "data:image/jpeg;base64,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"

    return(
        <>
        <Box sx={{height:"100vh"}}>
        <br />
        <br />
        <br />
        <Grid container sx={{borderBottom:"1px solid black"}} >
        <Grid item xs={4} sx={{display:"flex",alignItems:"center",justifyContent:"flex-end",overflow:"hidden"}}><img  src={wallpaper} widht="100%" height="100%" alt="walllpaper"   /><IconButton sx={{position:"absolute",left:0}} onClick={handleimagebckwrd}> <Icon><ArrowBackIosNew /></Icon></IconButton></Grid>
        <Grid item xs={4} ><img src={imgData[imgNum]} width="100%" height="100%" alt="lazy"/></Grid>
        <Grid item xs={4} sx={{display:"flex",alignItems:"center",justifyContent:"flex-start",overflow:"hidden"}}><img style={{posiyion:"relative"}} width="100%" height="100%" src={wallpaper}  alt="walllpaper"   /><IconButton sx={{position:"absolute",right:0}}onClick={handleimagefrwrd}> <Icon> <ArrowForwardIosIcon /></Icon></IconButton></Grid>
        </Grid>
        <Box sx={{display:"flex",flex:1,height:"20%",backgroundImage:"linear-gradient(beige,powderblue,pink)",paddingTop:6}}>
        <Container sx={{fontSize:20,fontWeight:500}}>TrackSoles is a third party seller which strives to provide the best soles at the best retail price
        from different sellers right to your doorstep.Our Inventory consists of all different brands such as Nike, Adidas,Vans,HushPuppies and Reebook companys,
        so our customers have access to all different tastes.<br />
        <Link to="products" >View Some of our Products</Link></Container>
        </Box>
        </Box>
        </>
    )
}

//backgroundImage:"linear-gradient(pink,black,goldenrod,pink)"
/*
 <Container>
        <Grid container >
            {imgData.map((obj)=>(
            <Grid item xs={3}><img src={obj} alt="loading"/></Grid>))}
        </Grid>
        </Container>
        <Container sx={{bgcolor:"black",color:"white",fontSize:25,fontFamily:"monospace",borderRadius:3}}>Track Soles strives to provide the best soles at the best retail price
        from different sellers right to your doorstep.Our Inventory consists of all different brands and companys,
        so our customers have access to all different tastes.<br />
        <Link to="products" >View Some of our Products>>></Link></Container>
        <Container>
        <Grid container>
            <Grid item xs={3}></Grid>
            {imgData2.map((obj)=>(
            <Grid item xs={3}><img src={obj} alt="loading"/></Grid>))}
        </Grid>
        </Container>
*/