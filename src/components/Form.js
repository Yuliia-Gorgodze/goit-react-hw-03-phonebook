import React, { Component } from 'react';
 import propTypes from 'prop-types';
  import shortid from 'shortid';
  import styles from './styles.module.css'
class AddNameContact extends Component {
    
    state = {
        name: '',
        number: ''
    }
    nameInputId = shortid.generate();
    numberInputId = shortid.generate();
    inputChange = event => {
        const {currentTarget} = event;
        this.setState({[currentTarget.name]: currentTarget.value})
    }
    addContact= event => {
    event.preventDefault();
    this.props.formSabmit(this.state)
   
    this.resetForm()
    }
    resetForm = () =>{
    this.setState({name: '', number: ''})
    }
    render(){
        return (
            <form class={styles.form} onSubmit={this.addContact}>
                <label class={styles.input}>
                Введите имя контакта: <input class={styles.inputValue} type='text' name='name' value={this.state.name} onChange={this.inputChange} ></input>
                </label>
                <label class={styles.input}>
                Введите номер контакта: <input class={styles.inputValue} type='text' name='number' value={this.state.number} onChange={this.inputChange} ></input>
                </label>
                <button class={styles.buttonAddContact} type='submit'>Добавить в контакты</button>
            </form>
            
          )
    }
}
export default AddNameContact;

AddNameContact.propTypes = {
    formSabmit: propTypes.func
}