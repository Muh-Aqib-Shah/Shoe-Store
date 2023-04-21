import { AppBar,Toolbar,IconButton,Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './App.css';
import { Products } from './Products';
import { ProductBox } from './ProductBox';
import { Home } from './Home';
import { Routes,Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductDefault } from './ProductDefault';

function App() {
  return(
    <>
  <Router>
  <AppBar sx={{bgcolor:"red",fontFamily:"cursive"}}><Toolbar><Link to='/'><IconButton><Icon><HomeIcon /></Icon></IconButton></Link>TrackSoles</Toolbar></AppBar>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='products' element={<Products />}>
          <Route exact path='' element={<ProductDefault />}></Route>
          <Route path=":ProductDetails" element={<ProductBox />} ></Route>
      </Route>
   </Routes>
   </Router>
  </>
  )
}

export default App;
