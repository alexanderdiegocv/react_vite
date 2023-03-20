
import './FormVerifyDocument.css';

function FormVerifyDocument() {
  return (
    <>
    <section className='card_form'>
        <h2 className='card_form_title'>Verificación de Documentos</h2>
        <form action="#" method="post">
            <input className='form_input' type="password" placeholder='Código de Verificación Digital' autoFocus/>
            <input className='form_submit' type="submit" value="Verificar" />
        </form>
    </section>
    <div className='error'>
    <p className='error_message'>Código de Verificación Digital Incorrecto</p>
    </div>
    </>
  );
}

export default FormVerifyDocument;