import { createSlice, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

// Define a type for the slice state
export interface EmployeeState {
  firstName: string
  lastName: string
  startDate: string
  department: string
  dateOfBirth: string
  street: string
  city: string
  state: string
  zipCode: number
};

export interface ListOfEmployeeState {
  employeeList: EmployeeState[]
};


// Define the initial state of the this Reducer
const initialState: ListOfEmployeeState = {
  employeeList: [
    { firstName: "Jo", lastName: "Monleon", startDate: "2-08-2022", department: "Sale", dateOfBirth: "2-11-1987", street: "jo", city: "jo", state: "CL", zipCode: 123 },
    { firstName: "Lise", lastName: "Lase", startDate: "4-08-2022", department: "Dev", dateOfBirth: "3-11-1987", street: "jo", city: "jo", state: "AZ", zipCode: 234 },
    { firstName: "Dorian", lastName: "Perere", startDate: "6-08-2022", department: "Sale", dateOfBirth: "6-11-1987", street: "jo", city: "jo", state: "AZ", zipCode: 345 },
    { firstName: "Salome", lastName: "Clem", startDate: "8-08-2022", department: "Dev", dateOfBirth: "8-11-1987", street: "jo", city: "jo", state: "MI", zipCode: 456 },
    { firstName: "Lulu", lastName: "Brack", startDate: "10-08-2022", department: "Sale", dateOfBirth: "12-11-1987", street: "jo", city: "jo", state: "CL", zipCode: 567 },
    { firstName: "Lawrence", lastName: "Moille", startDate: "12-08-2022", department: "Dev", dateOfBirth: "25-11-1987", street: "jo", city: "jo", state: "FL", zipCode: 678 },
    { firstName: "Theo", lastName: "Delaplace", startDate: "14-08-2022", department: "Sale", dateOfBirth: "15-11-1987", street: "jo", city: "jo", state: "CL", zipCode: 789 },
    { firstName: "Theu", lastName: "Delaroute", startDate: "16-08-2022", department: "Dev", dateOfBirth: "28-11-1987", street: "jo", city: "jo", state: "AZ", zipCode: 890 },
    { firstName: "Romain", lastName: "Debout", startDate: "18-08-2022", department: "Sale", dateOfBirth: "15-11-1987", street: "jo", city: "jo", state: "FL", zipCode: 901 },
  ],
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {

    storeEmployee: (state, action) => {
      console.log(state.employeeList, action.payload)
      state.employeeList.push(action.payload)
    },

    clearStore: (state, action) => {
      state.employeeList = action.payload
    }
  }
});


const persistedReducer = persistReducer(persistConfig, employeeSlice.reducer)

const store = configureStore({
  reducer: persistedReducer,
})

store.subscribe(() => console.log(store.getState()));

export const { storeEmployee, clearStore } = employeeSlice.actions;
export const persistor = persistStore(store)
export default store;
