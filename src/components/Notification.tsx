import * as React from 'react';
import { Button, Col, ListGroup, Modal, Row } from 'react-bootstrap';
import { Message } from '../types/Message';

interface IState {
  show: boolean;
  notifications?: Message[];
}

class Notification extends React.Component<any, IState> {
  state = {
    show: false,
    notifications: []
  };

  constructor(props: any) {
    super(props);
    this.onHide = this.onHide.bind(this);
  }

  onHide() {
    this.setState({ ...this.state, show: false });
  }

  componentDidMount() {
    fetch('http://localhost:8080/notifications')
      .then(res => res.json())
      .then(data => {
        this.setState({ show: true, notifications: data });
      })
      .catch(console.log);
  }

  componentWillUnmount() {
    this.setState({ ...this.state, show: false });
  }

  renderMessage(message: Message) {
    return (
      <ListGroup.Item>
        <Row>
          <Col>{message.text}</Col>
          <Col>
            <Button
              href="#"
              variant="outline-primary"
              onClick={() => {
                window.location.assign('/notifications');
              }}
            >
              View
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }

  public render() {
    const { notifications } = this.state;
    const messages = [];
    if (notifications) {
      for (const msg of notifications) {
        messages.push(this.renderMessage(msg));
      }
    }

    return (
      <>
        <Modal
          show={this.state.show}
          onHide={this.onHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Notifications
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {messages && <ListGroup>{messages}</ListGroup>}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Notification;
