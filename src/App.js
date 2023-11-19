import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/Navbar/Navbar';
import DashView from './components/Home/Home';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Data/Data';
import Loading from './components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <TopNav/>
      <hr style={{marginTop : "10px"}} />
      <DashView/>
    </div>
  ) : <Loading/>
}

export default App