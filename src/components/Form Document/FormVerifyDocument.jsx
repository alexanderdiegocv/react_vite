
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './FormVerifyDocument.css';

function FormVerifyDocument({documentVerify}) {

  const [error, setError] = useState(false);

  const styleError = `error ${error ? 'visible' : ''}`

  const find = (e) => {
    e.preventDefault();
    
    const code = e.target[0].value;

    if(documentVerify(code.trim().replace(/\s/g, ""))){
      
      const MySwal = withReactContent(Swal)

      MySwal.fire({
        title: <p>Documento Verificado</p>,
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-primary',
        },
      }) 


    } else {  
      setError(true);
        
      setInterval(() => {
          setError(false);
      }, 3000);  

    }
  }


  return (
    <>
    <section className='card_form'>
        <h2 className='card_form_title'>Verificación de Documentos</h2>
        <form action="#" method="post" onSubmit={find}>
            <input className='form_input' type="password" placeholder='Código de Verificación Digital' autoFocus/>
            <input className='form_submit' type="submit" value="Verificar" />
        </form>
    </section>
    <div className={styleError}>
      <p className='error_message'>Código de Verificación Digital Incorrecto</p>
    </div>
    </>
  );
}

export default FormVerifyDocument;