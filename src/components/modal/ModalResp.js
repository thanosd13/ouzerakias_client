import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from "../modal/ModalResp.module.css";

function ModalResp(props) {

  return (
    <>


      <Modal className={styles.genericModal} show={props.show} onHide={props.handleClose}>
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title className={styles.modalTitle}>Απάντηση Συστήματος</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>{props.resp}</Modal.Body>
        <Modal.Footer>  
          {props.success?
          <Button className={styles.buttonModal} variant="primary" onClick={props.handleClose}>
            Εντάξει
          </Button>:          
          <Button className={styles.buttonDanger} variant="primary" onClick={props.handleClose}>
            Κλείσιμο
          </Button>
          }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalResp;
