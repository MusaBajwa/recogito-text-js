import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

/** 
 * The basic Place/Person/Event selector from original Recogito
 */
const TypeSelector = props => {

  return (
    <div className="type-selector">
      <div className="type place">
        <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} /> Place
      </div>

      <div className="type person">
        <FontAwesomeIcon className="icon" icon={faUser} /> Person
      </div>

      <div className="type event">
        <FontAwesomeIcon className="icon" icon={faStar} /> Event
      </div>
    </div>
  )

}

export default TypeSelector;