import React from 'react';
import ReactDOM from 'react-dom/client';
import DocumentsList from './components/Documents List/DocumentsList';
import './index.css';
import { documentos } from './data/documentos';
import Header from './components/Header/Header';

console.log(documentos);

ReactDOM.createRoot(document.getElementById('root')).render(
  <main>
    <Header/>
    {
      documentos.length === 0 ? <p>No hay documentos aún</p> : <DocumentsList documentos={documentos}/>
    }
  </main>
);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
