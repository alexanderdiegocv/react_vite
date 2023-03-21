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

  function documentCreate(document) {
    document.id = documentos.length + 1;
    setDocumentos([...data, document])

    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <p>Documento Guardado</p>
    })               
  }

  return (
    <>
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
          boton === 'add' ? <FormVerifyDocument /> : <FormCreateDocument documentCreate={documentCreate}/>
      }
      {
        documentos.length === 0 ? <p>No hay documentos aún</p> : <DocumentsList documentos={documentos}/>
      }
    </>
  )
}

export default App
