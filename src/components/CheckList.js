import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faCheck} from '@fortawesome/free-solid-svg-icons';

export default function CheckList({title}) {
  return <>

        <li className="text-primary mb-4"> 
                    <FontAwesomeIcon icon={faCheck}/>
                    <span className="text-white ml-4">{title}</span>  
        </li>

  </>;
}
