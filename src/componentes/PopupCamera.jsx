import React from "react";
import Licamera from "../listagem/Licamera";

const PopupCamera = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-secondary largeb"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Registrar Cameras
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                REGISTRAR CÂMERAS
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Licamera />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Voltar
              </button>
              <button type="button" class="btn btn-primary">
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
