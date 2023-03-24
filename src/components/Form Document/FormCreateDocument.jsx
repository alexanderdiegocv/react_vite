
import { useEffect, useState } from 'react';
import './FormCreateDocument.css'

function FormCreateDocument({documentCreate}) {

    const store = (e) => {
        e.preventDefault();

        const title = e.target[0].value;
        const description = e.target[1].value;
        const fecha = e.target[2].value;
        const URL = e.target[3].value;

        const version = Math.floor(Math.random() * 10).toString();

        let mountMiliseconds =  new Date().getTime() - new Date(2021, 0, 1).getTime();

        mountMiliseconds = addZeros(mountMiliseconds, 12);

        const sufijo = Math.floor((Math.random() * 90)+10).toString();

        const entrada = version+mountMiliseconds+sufijo;

        const digitoCheckeo = luhnAlgorithm(entrada.replace(/\s/g, "")).toString();

        const CVD = entrada + digitoCheckeo;

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
        
        documentCreate(documento, e.target);

    }

    const addZeros = (number, length) => {
        let my_string = '' + number;
        while (my_string.length < length) {
            my_string = '0' + my_string;
        } 
        return my_string;
    }
    
    function luhnAlgorithm(cardNumber, carry = false) {
        // Convertir el número de tarjeta a un arreglo de dígitos
        const digits = cardNumber.toString().split("").map(Number);
        
        // Invertir el arreglo de dígitos
        const reversedDigits = digits.reverse();
        
        // Doblar el valor de cada segundo dígito, empezando por el segundo dígito a contar desde la derecha
        const doubledDigits = reversedDigits.map((digit, index) => {
          if (index % 2 !== 0) {
            const doubledDigit = digit * 2;
            return doubledDigit > 9 ? doubledDigit - 9 : doubledDigit;
          } else {
            return digit;
          }
        });
        
        // Sumar todos los dígitos, incluyendo los doblados y los no doblados
        const sum = doubledDigits.reduce((acc, digit) => acc + digit, 0);
        
        // Verificar si el resultado de la suma es un múltiplo de 10
        if(sum % 10 === 0){
          return 0;
        } else {
          if(carry){
            return 10 - (sum % 10);
          }else {
            return luhnAlgorithm(cardNumber + '0', true);
          }
        }
    }

    return (
        <>
        <section className='card_formCreate'>
            <h2 className='card_form_title'>Crear un Documento</h2>
            <form action="#" method="post" onSubmit={store}>
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