import React from 'react'
import './List.css'


import {FaTrash} from 'react-icons/fa6'

function List({persons, deleteUser}) {

    return (
        <ul>{persons && persons.map((person) => {
        const {id, name, age, image } = person
        return (
            <li key={id}>
                <img src={image} alt="" width={75} height={75}/>
                <div>
                <h3>{name}</h3>
                <p>{age} years</p>
                </div>
                <FaTrash onClick={() => {deleteUser(id)}} className="trash-icon"/>
            </li>
        )
    })}</ul>
  )
}

export default List