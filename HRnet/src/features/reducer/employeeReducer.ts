import { createSlice, configureStore } from '@reduxjs/toolkit';

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
    { firstName: "jo1", lastName: "Mo1", startDate: "2/08/2022", department: "Sale", dateOfBirth: "2/11/1987", street: "jo", city: "jo", state: "jo", zipCode: 123 },
    { firstName: "jo2", lastName: "Mo2", startDate: "4/08/2022", department: "Dev", dateOfBirth: "3/11/1987", street: "jo", city: "jo", state: "jo", zipCode: 234 },
    { firstName: "jo3", lastName: "Mo3", startDate: "6/08/2022", department: "Sale", dateOfBirth: "6/11/1987", street: "jo", city: "jo", state: "jo", zipCode: 345 },
    { firstName: "jo4", lastName: "Mo4", startDate: "8/08/2022", department: "Dev", dateOfBirth: "8/11/1987", street: "jo", city: "jo", state: "jo", zipCode: 456 },
    { firstName: "jo5", lastName: "Mo5", startDate: "10/08/2022", department: "Sale", dateOfBirth: "12/11/1987", street: "jo", city: "jo", state: "jo", zipCode: 567 },
    { firstName: "jo6", lastName: "Mo6", startDate: "12/08/2022", department: "Dev", dateOfBirth: "25/11/1987", street: "jo", city: "jo", state: "jo", zipCode: 678 },
    { firstName: "jo7", lastName: "Mo7", startDate: "14/08/2022", department: "Sale", dateOfBirth: "15/11/1987", street: "jo", city: "jo", state: "jo", zipCode: 789 },
    { firstName: "jo8", lastName: "Mo8", startDate: "16/08/2022", department: "Dev", dateOfBirth: "28/11/1987", street: "jo", city: "jo", state: "jo", zipCode: 890 },
    { firstName: "jo9", lastName: "Mo9", startDate: "18/08/2022", department: "Sale", dateOfBirth: "15/11/1987", street: "jo", city: "jo", state: "jo", zipCode: 901 },
  ],
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {

    storeLogin: (state, action) => {
      state.employeeList = state.employeeList + action.payload
    },

    clearStore: (state, action) => {
      state.employeeList = action.payload
    }
  }
});

const store = configureStore({
  reducer: employeeSlice.reducer
})

store.subscribe(() => console.log(store.getState()));

export const { storeLogin, clearStore } = employeeSlice.actions;
export default store;
