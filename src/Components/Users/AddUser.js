import React from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";

const AddUser = props => {

    const addUserHandler = (e) => {
        e.preventDefault();
    }
    return (
        <Card className={styles.input} >
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">username</label>
                <input type='text' id="username" placeholder=" please type user name" />
                <label htmlFor="age">Age (Years)</label>
                <input type='number' id="age" placeholder=" please type your age" />
                <button type="submit" >Add User</button>
            </form>

        </Card>

    )
};

export default AddUser;