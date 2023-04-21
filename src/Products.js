import { Box, Container,Grid,Paper,Typography,Rating } from '@mui/material';
import React, { useContext } from 'react';
import { StateObject } from './context/ShoeObject';
import { Link,Outlet } from 'react-router-dom';


export const Products = () => {

  return(
    <div>
        <Outlet />
    </div>
  );
 }