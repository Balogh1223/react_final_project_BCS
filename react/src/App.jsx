import { useState } from 'react'
import './App.css'
import TreeForm from './components/TreeForm'


function App() {
  const [TreeData, sendTreeData] = useState([])

  const handleTreeData = (data) => {
    setTreeData((prevData) => [...prevData, data]);
    getTreeData();
  }
  const getTreeData = async () => {
    try {

    const response = await fetch('https://localhost:3000/travels',{
    })
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

  return (
    <>
      <TreeForm/>
    </>
  )
}

export default App
