import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  dateCreated: "",
};
const customerSlice = createSlice({
  name: "customer",
  initialState:initialState,
  reducers: {
    createCustomer(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
      state.dateCreated = action.payload.dateCreated;
    },
    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});
export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
/*
const initialCustomerState = {
    fullName: "",
    nationalID: "",
    dateCreated: "",
  };
export default function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        dateCreated: action.payload.dateCreated,
      };
    case "customer/customerUpdateName": {
      return {
        ...state,
        fullName: action.payload,
      };
    }
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, dateCreated: new Date().toISOString() },
  };
}
export function customerUpdateName(fullName) {
  return {
    type: "customer/customerUpdateName",
    payload: fullName,
  };
}

*/