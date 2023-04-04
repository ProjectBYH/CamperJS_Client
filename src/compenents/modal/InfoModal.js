import React from "react";
import { Modal, Button, Form, Container, Col } from "react-bootstrap";
import axios from "axios";

const InfoModal = ({ show, onHide,UserInfo,loginData }) => {


  const {email,name} =UserInfo

  const userDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_CAMPER_SERVER}/auth/delete`, {
        data:UserInfo
      })
      .then(function (response) {
        if (response.data === "회원탈퇴 성공.") {
          delete localStorage.user;
          loginData({});
          alert("회원탈퇴 완료");
          window.location.assign(process.env.REACT_APP_CAMPER_HOME);
        }
      });
  };

 return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Col>
                <Form.Label>Name </Form.Label>
              </Col>
              <Col>
                <Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;{name}</Form.Label>
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Col>
                <Form.Label>Email </Form.Label>
              </Col>
              <Col>
                <Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;{email}</Form.Label>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" type="button" onClick={userDelete}>
            회원탈퇴
          </Button>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default InfoModal;
