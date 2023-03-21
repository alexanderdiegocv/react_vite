import DocumentItem from "./DocumentItem";

function DocumentsList({documentos}) {

  let lista = documentos;
  lista = lista.reverse();

  return (
    <section className='card_list'>
      <h2 className='card_list_title'>Documentos</h2>
      <ul className='card_list_list'>
        {
            lista.map(documento => (
                <DocumentItem key={documento.id} documento={documento}/>
            ))
        }
      </ul>
    </section>
  );
}

export default DocumentsList;