import React, { useReducer, createContext, useContext, useRef } from 'react';

//초기상태
const initialHouseholds = [
  {
    id: 1,
    category: 'meal',
    text: '중국집',
    amount: 7000,
  },
  {
    id: 2,
    category: 'bmw',
    text: '버스',
    amount: 10000,
  },
  {
    id: 3,
    category: 'hospital',
    text: '병원감',
    amount: 9000,
  },
];

/* Create, modify(EDIT), remove */
function householdReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.household);
    case 'EDIT':
      console.log(initialHouseholds);
      return state.map(household =>
        household.id === action.household.id
          ? {
              ...household,
              category: action.household.category,
              text: action.household.text,
              amount: action.household.amount,
            }
          : household
      );
    case 'REMOVE':
      return state.filter(household => household.id !== action.id);
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}

//Context state, dispatch, nextId
const HouseholdStateContext = createContext();
const HouseholdDispatchContext = createContext();
const HouseholdNextIdContext = createContext();

export function HouseProvider({ children }) {
  const [state, dispatch] = useReducer(householdReducer, initialHouseholds);
  const nextId = useRef(4);
  return (
    <HouseholdStateContext.Provider value={state}>
      <HouseholdDispatchContext.Provider value={dispatch}>
        <HouseholdNextIdContext.Provider value={nextId}>
          {children}
        </HouseholdNextIdContext.Provider>
      </HouseholdDispatchContext.Provider>
    </HouseholdStateContext.Provider>
  );
}

//커스텀 훅
export function useHouseholdState() {
  const context = useContext(HouseholdStateContext);
  if (!context) {
    throw new Error('Cannot find HouseholdStateContext');
  }
  return context;
}

export function useHouseholdDispatch() {
  const context = useContext(HouseholdDispatchContext);
  if (!context) {
    throw new Error('Cannot find HouseholdDispatchContext');
  }
  return context;
}

export function useHouseholdNextId() {
  const context = useContext(HouseholdNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
