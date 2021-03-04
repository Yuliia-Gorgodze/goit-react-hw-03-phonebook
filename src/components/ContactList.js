
import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.css'

const ContactList = ({contacts, deleteCantact}) => {
 
    return(
     <div>
         <ul class={styles.contactList}> 
     {contacts.map(({id, name, number})=> <li class={styles.contactCard} key={id}>{name} : {number}
     <button  onClick={() => deleteCantact(id)}>Удалить</button>
     </li>)}
     </ul>
     </div>
    )
}
 export default ContactList;

 ContactList.propTypes = {
    contacts: propTypes.array.isRequired,
    deleteCantact: propTypes.func.isRequired
 }