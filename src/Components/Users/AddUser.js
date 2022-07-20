import React, {useState} from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = props => {
    const [enteredUserName, setEnteredUserName]= useState('');
    const [enteredAge, setEnteredAge]= useState('');

    const addUserHandler = (e) => {
        e.preventDefault();
        console.log(enteredUserName, enteredAge);
    }

    const userNameChangeHandler = e=>{
        setEnteredUserName(e.target.value.trim())

    }

    const ageChangeHandler = e=>{
        setEnteredAge(e.target.value.trim())
        
    }
    return (
        <Card className={styles.input} >
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">username</label>
                <input 
                type='text' 
                id="username" 
                placeholder=" please type user name" 
                onChange={userNameChangeHandler}/>

                <label htmlFor="age">Age (Years)</label>
                <input 
                type='number' 
                id="age" 
                placeholder=" please type your age" 
                onChange={ageChangeHandler}
                
                />
                <Button type="submit" >Add User</Button>
            </form>

        </Card>

    )
};

export default AddUser;