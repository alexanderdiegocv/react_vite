
import { useEffect, useState } from 'react';
import './FormCreateDocument.css'

function FormCreateDocument({documentCreate}) {

    return (
        <>
        <section className='card_formCreate'>
            <h2 className='card_form_title'>Crear un Documento</h2>
            <form action="#" method="post" onSubmit={
                (e) => {
                    e.preventDefault();

                    const title = e.target[0].value;
                    const description = e.target[1].value;
                    const fecha = e.target[2].value;
                    const URL = e.target[3].value;
                    const CVD = "0015 3824 1828 2109";

                    const documento = {
                        title,
                        description,
                        leyenda: "Esta es una representación impresa cuya autenticidad puede ser contrastada con la representación imprimible localizada en la sede digital de la Presidencia del Consejo de Ministros. La verificación puede ser efectuada a partir del 05/01/2021 hasta el 05/04/2021.Base Legal: Decreto Legislativo Nº 1412, Decreto Supremo N° 029-2021-PCM y la Directiva Nº 002-2021-PCM/SGTD.",
                        URL,
                        CVD, 
                        QR: URL,
                        fechaInicio: "2021-01-01",
                        fechaCreacion: fecha,
                    }

                    documentCreate(documento);

                }
            }>
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