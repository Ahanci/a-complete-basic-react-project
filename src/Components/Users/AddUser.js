import React, {useState} from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = props => {
    const [enteredUserName, setEnteredUserName]= useState('');
    const [enteredAge, setEnteredAge]= useState('');

    const addUserHandler = (e) => {
        e.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
       props.onAddUser(enteredUserName, enteredAge);       

        setEnteredAge('');
        setEnteredUserName('');
    }

    const userNameChangeHandler = e=>{
        setEnteredUserName(e.target.value)

    }

    const ageChangeHandler = e=>{
        setEnteredAge(e.target.value)
        
    }
    return (
        <Card className={styles.input} >
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">username</label>
                <input 
                type='text' 
                id="username" 
                placeholder=" please type user name" 
                onChange={userNameChangeHandler}
                value={enteredUserName}/>

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

    )
};

export default AddUser;