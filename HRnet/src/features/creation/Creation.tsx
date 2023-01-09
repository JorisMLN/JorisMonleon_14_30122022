import React, { LegacyRef, useRef, useState } from 'react';
import ModalManager from './modalManager';
import './creation.scss'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from '../reducer/hook';
import { storeEmployee } from '../reducer/employeeReducer';


const Creation : React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const [stateSelected, setStateSelected] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setStateSelected(event.target.value as string);
    console.log(stateSelected)
  };

  // profil ref
  const firstNameRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const lastNameRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const birthRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const startDateRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const departmentRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();

  // adress ref
  const streetRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const cityRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const zipRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();

  const save = () => {
    const firstName : string = firstNameRef.current.value;
    const lastName : string = lastNameRef.current.value;
    const birth : string = birthRef.current.value;
    const startDate : string = startDateRef.current.value;
    const department : string = departmentRef.current.value;
    const street : string = streetRef.current.value;
    const city : string = cityRef.current.value;
    const zip : string = zipRef.current.value;

    console.log(birth)

    if(firstName.length === 0 || lastName.length === 0 || birth.length === 0 || startDate.length === 0 || 
      department.length === 0 || street.length === 0 || city.length === 0 || stateSelected.length === 0 || zip.length === 0){

      console.log('empty');
      setOpenModal(false);
    } else {

      console.log(firstName, lastName, birth, startDate, department, street, city, stateSelected, zip, openModal);
      dispatch(storeEmployee({ 
        firstName: firstName, 
        lastName: lastName, 
        startDate: birth, 
        department: startDate, 
        dateOfBirth: department, 
        street: street, 
        city: city, 
        state: stateSelected, 
        zipCode: zip 
        })
      );

      setOpenModal(true);
    }
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

            {/* <TextField
              ref={birthRef}
              id="date"
              label="Birthday"
              type="date"
              defaultValue="01-01-24"
              sx={{ width: 300, marginBottom: '0px' }}
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
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
            <Box sx={{ minWidth: 300 , backgroundColor: '#2b2a33'}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={stateSelected}
                  label="State"
                  onChange={handleChange}
                >
                  <MenuItem value={'Occitanie'}>Occitanie</MenuItem>
                  <MenuItem value={'Provence'}>Provence</MenuItem>
                  <MenuItem value={'Aquitaine'}>Aquitaine</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div>
            <label>Zipcode: </label><br/>
            <input ref={zipRef} type="text" name="name" id="name" required></input>
          </div>
        </div>
      </form>

      <Button variant="contained" className='saveBtn' onClick={() => save()}> Save </Button>

      <ModalManager 
        isOpen={openModal} 
        title={'Employee Creation Form'} 
        isRouter={true}
        routerTitle={'To employee display page'}
        routerLink={'/display'}
        size={'small'}
      >
        <div className='children'>
          
          <div> Employee Created! </div>
          <div> Employee Created! </div>
          <div> Employee Created! </div>
          <div> Employee Created! </div>
          <div> Employee Created! </div>

        </div>
      </ModalManager>

    </div>
  )
}

export default Creation;