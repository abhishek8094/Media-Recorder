import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  

  return (
   <div className='bg-[#00ffae] w-full h-[100vh]'>
    <Header/>
    <Main/>
    <ToastContainer className="top-center "/>
   </div>
  )
}

export default App
