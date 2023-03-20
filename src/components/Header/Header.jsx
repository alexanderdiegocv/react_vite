import { useState } from 'react';

import { FaPlusCircle, FaCheck } from 'react-icons/fa';

import FormVerifyDocument from '../../components/Form Document/FormVerifyDocument';
import FormCreateDocument from '../../components/Form Document/FormCreateDocument';

function Header() {

    const [boton, setBoton] = useState('add')

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
            boton === 'add' ? <FormVerifyDocument /> : <FormCreateDocument />
        }
        </>
    );
}

export default Header;