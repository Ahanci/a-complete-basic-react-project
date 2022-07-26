import React, { useState, Fragment } from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const userNameChangeHandler = e => {
        setEnteredUserName(e.target.value)

    }

    const ageChangeHandler = e => {
        setEnteredAge(e.target.value)

    }

    const addUserHandler = (e) => {
        e.preventDefault();

       

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'please enter a valid name and age(values must not be empty)'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter an Age which is bigger than 1 '
            })
            return;// BUNLAR KALACAK ÇÜNKÜ BU ŞART OLDUĞUNDA LİSTEYE EKLEME YAPILMASIN İSTİYORUM
        }


        props.onAddUser(enteredUserName, enteredAge);


        console.log(enteredUserName, enteredAge);

        setEnteredAge('');
        setEnteredUserName('');
    }

    const errorHandler = () => {
        setError(null); // this treaty as a falsy value and so that there will not be a modal 
    }


    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input} >
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">username</label>
                    <input
                        type='text'
                        id="username"
                        placeholder=" please type user name"
                        onChange={userNameChangeHandler}
                        value={enteredUserName} />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type='number'
                        id="age"
                        placeholder=" please type your age"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                    <Button type="submit" >Add User</Button>
                </form>

            </Card>
        </Fragment>
    )
};

export default AddUser;