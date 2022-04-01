import { Modal, Button } from "react-bootstrap";


function MenuModal(props) {
  return (
    //<Modal show={show} onHide={handleClose}>
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title>Sea food Resto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card w-100">
          <h5>Gobi Manjurian</h5>
          <h6>`150</h6>
        </div>
        <div className="card w-100">
            <h5>Panner Tikka</h5>
            <h6>`140</h6>

        </div>

      </Modal.Body>
      <Modal.Footer>
        { /*<Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
    </Button>*/}
      </Modal.Footer>
    </Modal>



  )
}

export default MenuModal;