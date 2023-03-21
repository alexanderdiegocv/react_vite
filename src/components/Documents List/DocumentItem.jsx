import QRCode from "react-qr-code";
import './DocumentItem.css';

function DocumentItem({documento}) {
  return (
    <li className='card_list_item'>
          <div className='card_list_item_container'>
            <div className='card_list_item_container_data'>
              <h3 className='card_list_item_container_data_title'>{documento.title}</h3>
              <p className='card_list_item_container_data_date'>{documento.fechaCreacion}</p>
            </div>
            <div className="card_cvd">
              <div className="card_cvd_data">
                <div className="card_cvd_data_leyenda">
                  {documento.leyenda}
                </div>
                <div className='card_cvd_data_url'>
                  URL: 
                  {
                    documento.URL
                  }
                </div>
                <div className='card_cvd_data_cvd'>
                  CVD: 
                  {
                    documento.CVD.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4")
                  }
                </div>
              </div>
              <div className="card_cvd_qr">
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%"}}>
                    <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%"}}
                    value={documento.URL}
                    viewBox={`0 0 256 256`}
                    />
                </div>
              </div>
            </div>
            {/* <div className='card_list_item_container_actions'>
              <button className='card_list_item_container_actions_button'>Eliminar</button>
            </div> */}
          </div>
    </li>
  );
}

export default DocumentItem;