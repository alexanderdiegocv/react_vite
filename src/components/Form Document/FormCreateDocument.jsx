
import './FormCreateDocument.css'

function FormCreateDocument() {
    return (
        <>
        <section className='card_formCreate'>
            <h2 className='card_form_title'>Crear un Documento</h2>
            <form action="#" method="post">
                <input className='form_input' type="text" placeholder='Título' autoFocus/>
                <textarea className='form_textarea' placeholder='Descripción' cols={30} rows={10}></textarea>
                <input className='form_input' type="date" placeholder='Fecha' />
                <input className='form_input' type="text" placeholder='Url' />
                <input className='form_submit' type="submit" value="Guardar" />
            </form>
        </section>
        <div className='error'>
        <p className='error_message'>Código de Verificación Digital Incorrecto</p>
        </div>
    </>);
}

export default FormCreateDocument;