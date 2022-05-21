import React from 'react';
import ReactDOM from "react-dom";
import classes from './ErrorModal.module.css';
import Card from "./Card";
import Button from "./Button";


const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button type={'button'} onClick={props.onClick}>확인</Button>
      </footer>
    </Card>
  );
}

const ErrorModal = (props) => {
  return (
    <>
      {
        ReactDOM.createPortal(
          <Backdrop onClick={props.onClick}/>,
          document.getElementById('backdrop-root')
        )
      }
      {
        ReactDOM.createPortal(
          <ModalOverlay onClick={props.onClick}
                        title={props.title}
                        message={props.message}/>,
        document.getElementById('backdrop-root')
        )
      }
    </>
  );
};

export default ErrorModal;