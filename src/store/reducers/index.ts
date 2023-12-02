import { combineReducers } from "redux";
import { SET_FULL_NAME, SET_PERIODIC_ELEMENTS } from "../actions";

interface InitialStateProps {
  periodicElements: PeriodicElements;
  fullName: {
    firstName: string;
    lastName: string;
  }
}

export interface PeriodicElements {
  [key: string]: string;
}

const initialState: InitialStateProps = {
  fullName: {
    firstName: 'Breaking',
    lastName: 'Bad'
  },
  periodicElements: {
    H: 'reactive-non-metals',
    He: 'noble-gases',
    Li: 'alkali-metals',
    Be: 'alkaline-earth-metals',
    B: 'metalloids',
    C: 'metalloids',
    N: 'reactive-non-metals',
    O: 'reactive-non-metals',
    F: 'reactive-non-metals',
    Ne: 'noble-gases',
    Na: 'alkali-metals',
    Mg: 'alkaline-earth-metals',
    Al: 'post-transition-metals',
    Si: 'metalloids',
    P: 'metalloids',
    S: 'reactive-non-metals',
    Cl: 'reactive-non-metals',
    K: 'alkali-metals',
    Ar: 'noble-gases',
    Ca: 'alkaline-earth-metals',
    Sc: 'transition-metals',
    Ti: 'transition-metals',
    V: 'transition-metals',
    Cr: 'transition-metals',
    Mn: 'transition-metals',
    Fe: 'transition-metals',
    Ni: 'transition-metals',
    Co: 'transition-metals',
    Cu: 'transition-metals',
    Zn: 'transition-metals',
    Ga: 'post-transition-metals',
    Ge: 'metalloids',
    As: 'metalloids',
    Se: 'reactive-non-metals',
    Br: 'reactive-non-metals',
    Kr: 'noble-gases',
    Rb: 'alkali-metals',
    Sr: 'alkaline-earth-metals',
    Y: 'transition-metals',
    Zr: 'transition-metals',
    Nb: 'transition-metals',
    Mo: 'transition-metals',
    Tc: 'transition-metals',
    Ru: 'transition-metals',
    Rh: 'transition-metals',
    Pd: 'transition-metals',
    Ag: 'transition-metals',
    Cd: 'alkaline-earth-metals',
    In: 'post-transition-metals',
    Sn: 'post-transition-metals',
    Sb: 'metalloids',
    Te: 'reactive-non-metals',
    I: 'reactive-non-metals',
    Xe: 'noble-gases',
    Cs: 'alkali-metals',
    Ba: 'alkaline-earth-metals',
    La: 'lanthanides',
    Ce: 'lanthanides',
    Pr: 'lanthanides',
    Nd: 'lanthanides',
    Pm: 'lanthanides',
    Sm: 'lanthanides',
    Eu: 'lanthanides',
    Gd: 'lanthanides',
    Tb: 'lanthanides',
    Dy: 'lanthanides',
    Ho: 'lanthanides',
    Er: 'lanthanides',
    Tm: 'lanthanides',
    Yb: 'lanthanides',
    Lu: 'lanthanides',
    Hf: 'transition-metals',
    Ta: 'transition-metals',
    W: 'transition-metals',
    Re: 'transition-metals',
    Os: 'transition-metals',
    Ir: 'transition-metals',
    Pt: 'transition-metals',
    Au: 'transition-metals',
    Hg: 'transition-metals',
    Tl: 'post-transition-metals',
    Pb: 'post-transition-metals',
    Bi: 'post-transition-metals',
    Th: 'actinides',
    Pa: 'actinides',
    U: 'actinides',
    Np: 'actinides',
    Pu: 'actinides',
    Am: 'actinides',
    Cm: 'actinides',
    Bk: 'actinides',
    Cf: 'actinides',
    Es: 'actinides',
    Fm: 'actinides',
    Md: 'actinides',
    No: 'actinides',
    Lr: 'actinides',
  }
}

export const periodicElementsReducer = (state = initialState.periodicElements, action: any) => {
  switch (action.type) {
    case SET_PERIODIC_ELEMENTS:
      return { ...state, periodicElements: action.payload.periodicElements }
    default:
      return state
  }
}

export const fullNameReducer = (state = initialState.fullName, action: any) => {
  switch (action.type) {
    case SET_FULL_NAME:
      return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName }
    default:
      return state
  }
}

export default combineReducers({
  periodicElements: periodicElementsReducer,
  fullName: fullNameReducer,
});

