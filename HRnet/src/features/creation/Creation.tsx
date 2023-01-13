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
import Paper from '@mui/material/Paper';


const Creation : React.FC = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [stateSelected, setStateSelected] = React.useState<string>('');
  const [depSelected, setDepSelected] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setStateSelected(event.target.value as string);
    console.log(stateSelected)
  };

  const handleChangeDep = (eventDep: SelectChangeEvent) => {
    setDepSelected(eventDep.target.value as string);
    console.log(depSelected)
  };

  // profil ref
  const firstNameRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const lastNameRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const birthRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const startDateRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();

  // adress ref
  const streetRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const cityRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const zipRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();

  const save = () => {
    const firstName : string = firstNameRef.current.value;
    const lastName : string = lastNameRef.current.value;
    const birth : string = birthRef.current.value;
    const startDate : string = startDateRef.current.value;
    const street : string = streetRef.current.value;
    const city : string = cityRef.current.value;
    const zip : string = zipRef.current.value;

    console.log( birth, startDate);

    if(firstName.length === 0 || lastName.length === 0 || birth.length === 0 || startDate.length === 0 || 
      depSelected.length === 0 || street.length === 0 || city.length === 0 || stateSelected.length === 0 || zip.length === 0){

      console.log('empty');
      setOpenModal(false);
    } else {

      console.log(firstName, lastName, birth, startDate, depSelected, street, city, stateSelected, zip, openModal);

      dispatch(storeEmployee({ 
        firstName: firstName, 
        lastName: lastName, 
        startDate: birth, 
        department: depSelected, 
        dateOfBirth: startDate, 
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
      <Paper elevation={3} className='title'>
        <h1> Create Employee </h1>
      </Paper>
      <form className='form'>

        <Paper elevation={6} className='form__left'>
          <h2>Profil</h2>

          <div className='blocInput'>
            <label>First Name: </label><br/>
            <input ref={firstNameRef} type="text" name="name" id="firstName" required></input>
          </div>

           <div className='blocInput'>
            <label>Last Name: </label><br/>
            <input ref={lastNameRef} type="text" name="name" id="lastName" required></input>
          </div>

          <div className='blocInput'>
            <label>Date of birth: </label><br/>
            <input ref={birthRef} type="date" name="name" id="birth" required></input>
          </div>

          <div className='blocInput'>
            <label>Start Date: </label><br/>
            <input ref={startDateRef} type="date" name="name" id="startDate" required></input>
          </div>

          <div className='blocInput' id="department">
            <Box sx={{height: 46, minWidth: 300 , backgroundColor: '#2b2a33', border: '1px solid #8f8f9d'}}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: 'white'}} id="demo-simple-select-label">Department</InputLabel>
                <Select
                  sx={{height: 46, color: 'white'}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={depSelected}
                  label="Departement"
                  onChange={handleChangeDep}
                >
                  <MenuItem value={'Sales'}>Sales</MenuItem>
                  <MenuItem value={'Marketing'}>Marketing</MenuItem>
                  <MenuItem value={'Engineering'}>Engineering</MenuItem>
                  <MenuItem value={'Human Resources'}>Human Resources</MenuItem>
                  <MenuItem value={'Legal'}>Legal</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </Paper>

        <Paper elevation={6} className='form__right'>
          <h2>Address</h2>
          <div className='blocInput'>
            <label>Street: </label><br/>
            <input ref={streetRef} type="text" name="name" id="name" required></input>
          </div>

          <div className='blocInput'>
            <label>City: </label><br/>
            <input ref={cityRef} type="text" name="name" id="name" required></input>
          </div>

          <div className='blocInput'>
            <Box sx={{height: 46, minWidth: 300 , backgroundColor: '#2b2a33', border: '1px solid #8f8f9d'}}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: 'white'}} id="demo-simple-select-label">State</InputLabel>
                <Select
                  sx={{height: 46, color: 'white'}}
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

          <div className='blocInput'>
            <label>Zipcode: </label><br/>
            <input ref={zipRef} type="number" name="name" id="name" required></input>
          </div>
        </Paper>
      </form>

      <Button variant="contained" className='saveBtn' onClick={() => save()}> Save </Button>

      <ModalManager
        isOpen={openModal} 
        title={'Employee Creation Form'}
        isRouter={true}
        routerTitle={'To employee display page'}
        routerLink={'/display'}
        size={'medium'}
      >
        <div className='children'>
          <div> Employee Created! </div>
        </div>
      </ModalManager>

    </div>
  )
}

export default Creation;