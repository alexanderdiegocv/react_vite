function DocumentItem({documento}) {
  return (
    <li className='card_list_item'>
          <div className='card_list_item_container'>
            <div className='card_list_item_container_data'>
              <h3 className='card_list_item_container_data_title'>{documento.title}</h3>
              <p className='card_list_item_container_data_description'>{documento.description}</p>
              <p className='card_list_item_container_data_date'>{documento.fechaCreacion}</p>
              <p className='card_list_item_container_data_cvd'>
                <strong>CVD: </strong>{documento.CVD}
              </p>
            </div>
            <div className='card_list_item_container_actions'>
              <button className='card_list_item_container_actions_button'>Eliminar</button>
            </div>
          </div>
    </li>
  );
}

export default DocumentItem;