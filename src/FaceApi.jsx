import { useEffect, useState } from 'react'
import { documentos as data} from './data/documentos';
import './index.css';
import DocumentsList from './components/Documents List/DocumentsList';
import { FaPlusCircle, FaCheck } from 'react-icons/fa';
import FormVerifyDocument from './components/Form Document/FormVerifyDocument';
import FormCreateDocument from './components/Form Document/FormCreateDocument'; 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../public/css/renFacial.css'

function App() {

  return (
    <>
        <div>
            <h1>Face API</h1>
        </div>

        <div id='container'>
            <img src="https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id='image'/>
            <canvas id='canvas' width={750} height={750}></canvas>
        </div>
    </>
  )
}

export default App