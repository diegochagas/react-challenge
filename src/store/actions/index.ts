import { PeriodicElements } from "../reducers"

export const SET_PERIODIC_ELEMENTS = 'SET_PERIODIC_ELEMENTS'
export const SET_FULL_NAME = 'SET_FULL_NAME'

export const setPeriodicElements = (periodicElements: PeriodicElements) => {
  return {
    type: SET_PERIODIC_ELEMENTS,
    payload: {
      periodicElements
    }
  }
}

export const setFullName = (firstName: string, lastName: string) => {
  return {
    type: SET_FULL_NAME,
    payload: {
      firstName,
      lastName
    }
  }
}