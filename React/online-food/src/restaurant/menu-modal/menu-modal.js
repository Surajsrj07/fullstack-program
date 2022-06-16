import { Modal, Button } from "react-bootstrap";

import "./menu-modal.css";


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
          <h6>&#8377;150</h6>
          <img src="https://th.bing.com/th/id/OIP.rtgInKFMs-8FH00hhm3IhwHaKu?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"></img>
        </div>
        <div className="card w-100">
            <h5>Panner Tikka</h5>
            <h6>&#8377;140</h6> 
            <img src="https://th.bing.com/th/id/OIP.X_VKVv9crDGW8QuD3TUgoAHaLH?w=131&h=197&c=7&r=0&o=5&dpr=1.25&pid=1.7"></img>

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


  );
}

export default MenuModal ;