import { useEffect, useState } from 'react'
import { documentos as data} from './data/documentos';
import './index.css';
import DocumentsList from './components/Documents List/DocumentsList';
import { FaPlusCircle, FaCheck } from 'react-icons/fa';
import FormVerifyDocument from './components/Form Document/FormVerifyDocument';
import FormCreateDocument from './components/Form Document/FormCreateDocument'; 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {

  const [boton, setBoton] = useState('add')
  const [documentos, setDocumentos] = useState([])

  useEffect(() => {
    setDocumentos(data)
  }, [])

  function documentCreate(document, form) {
    document.id = documentos.length + 1;
    setDocumentos([...documentos, document])

    form.reset();
    
    const MySwal = withReactContent(Swal)
    
    MySwal.fire({
      title: <p>Documento Guardado</p>,
    })               
  }

  function documentDelete(id) {
    const newDocumentos = documentos.filter(documento => documento.id !== id)
    setDocumentos(newDocumentos)
  }

  function documentEdit(CVD) {
    const newDocumentos = documentos.map(item => item.id === document.id ? document : item)
    setDocumentos(newDocumentos)
  }

  function documentVerify(CVD) {
    const newDocumentos = documentos.filter(documento => documento.CVD.trim().replace(/\s/g, "") === CVD)

    setDocumentos(newDocumentos)    
    return newDocumentos.length === 0 ? false : true;
  }

  return (
    <>
      <nav>
        <div className="logo">
          <h1>Proyecto React</h1>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Documentos</a></li>
            <li><a href="#">Usuarios</a></li>
            <li><a href="#">Configuración</a></li>
            <li><a href="../../public/views/ReconocimientoFacial.html">Reconocimiento Facial</a></li>
          </ul>
        </div>
      </nav>
      <div className="title">
            <h1>Tramite Documentario</h1> 
            <div className="fa" onClick={ 
                () => {
                    boton === 'add' ? setBoton('check') : setBoton('add')
                }
            }>
                {
                    boton === 'add' ? <FaPlusCircle /> : <FaCheck />
                }
            </div>
      </div>
      {
          boton === 'add' ? <FormVerifyDocument documentVerify={documentVerify}/> : <FormCreateDocument documentCreate={documentCreate}/>
      }
      {
        documentos.length === 0 ? <p>No hay documentos aún</p> : <DocumentsList documentos={documentos}/>
      }
    </>
  )
}

export default App
