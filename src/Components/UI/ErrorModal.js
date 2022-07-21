import React, { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal} >
                <header>
                    <h2 className={classes.header} > {props.title} </h2>
                </header>
                <div className={classes.content} >
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions} >
                    <Button onClick={props.onConfirm} > Close </Button>

                </footer>

            </Card>
        </Fragment>

    )
};

export default ErrorModal;