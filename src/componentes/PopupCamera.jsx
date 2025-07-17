import React from "react";
import Licamera from "../listagem/Licamera";

const PopupCamera = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary largeb"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Registrar Cameras
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                REGISTRAR CÂMERAS
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Licamera />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Voltar
              </button>
              <button type="button" className="btn btn-primary">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCamera;
