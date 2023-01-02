import React, { LegacyRef, useRef, useState } from 'react';
import ModalManager from './modalManager';
import './creation.scss'

const Creation : React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  // profil ref
  const firstNameRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const lastNameRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const birthRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const startDateRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const departmentRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();

  // adress ref
  const streetRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const cityRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const stateRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const zipRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();

  const save = () => {
    const firstName : string = firstNameRef.current.value;
    const lastName : string = lastNameRef.current.value;
    const birth : string = birthRef.current.value;
    const startDate : string = startDateRef.current.value;
    const department : string = departmentRef.current.value;
    const street : string = streetRef.current.value;
    const city : string = cityRef.current.value;
    const state : string = stateRef.current.value;
    const zip : string = zipRef.current.value;

    if(firstName.length === 0 || lastName.length === 0 || birth.length === 0 || startDate.length === 0 || 
      department.length === 0 || street.length === 0 || city.length === 0 || state.length === 0 || zip.length === 0){

      console.log('empty');
      setOpenModal(false);
    } else {

      setOpenModal(true);
    }

    console.log(firstName.length, lastName, birth, startDate, department, street, city, state, zip, openModal);
  }

  return (
    <div className='creation'>
      <h1> Create Employee </h1>

      <form className='form'>
        <div className='form__left'>

          <h2>Profil</h2>

          <div>
            <label>First Name: </label><br/>
            <input ref={firstNameRef} type="text" name="name" id="name" required></input>
          </div>

           <div>
            <label>Last Name: </label><br/>
            <input ref={lastNameRef} type="text" name="name" id="name" required></input>
          </div>

          <div>
            <label>Date of birth: </label><br/>
            <input ref={birthRef} type="text" name="name" id="name" required></input>
          </div>

          <div>
            <label>Start Date: </label><br/>
            <input ref={startDateRef} type="text" name="name" id="name" required></input>
          </div>

          <div>
            <label>Department: </label><br/>
            <input ref={departmentRef} type="text" name="name" id="name" required></input>
          </div>
        </div>

        <div className='form__right'>
          <h2>Address</h2>

          <div>
            <label>Street: </label><br/>
            <input ref={streetRef} type="text" name="name" id="name" required></input>
          </div>

          <div>
            <label>City: </label><br/>
            <input ref={cityRef} type="text" name="name" id="name" required></input>
          </div>

          <div>
            <label>State: </label><br/>
            <input ref={stateRef} type="text" name="name" id="name" required></input>
          </div>

          <div>
            <label>Zipcode: </label><br/>
            <input ref={zipRef} type="text" name="name" id="name" required></input>
          </div>
        </div>
      </form>

      <button onClick={() => save()}> Save </button>
      
      {openModal ===  true ? <ModalManager /> : null}
    </div>
  )
}

export default Creation;