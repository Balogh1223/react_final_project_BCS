import { useEffect, useState } from 'react'
import './App.css'
import TreeForm from './components/TreeForm'
import TreeList from './components/TreeList'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Details from './components/Details'
import { AuthProvider } from './context/loginContext'
import { Routes, Route } from 'react-router-dom'



function App() {
  const [TreeData, setTreeData] = useState([])

  const handleTreeData = (data) => {
    setTreeData((prevData) => [...prevData, data]);
    getTreeData();
  }
  const getTreeData = async () => {
    try {

      const response = await fetch('http://localhost:3000/products',{
      });
      if (response.ok){
        const data = await response.json();
        setTreeData(data);
      }else{
        console.error('Hiba történt az adatok lekérésekkor')
      }
    }
    catch (error){
      console.error('Hiba:', error)
    }
  }
  useEffect(() => {
    getTreeData();
  }, []);

  const deleteTree = (id) => {
    getTreeData();
  }
  

  return (
    <>
      <AuthProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <TreeList trees={TreeData} deleteTree={deleteTree}/> }></Route>
          <Route path="form" element={<TreeForm sendDataToApp={handleTreeData} />} />
          <Route path='login' element={<Login/>}/>
          <Route path='details/:id' element={<Details trees={TreeData}/>}/>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
