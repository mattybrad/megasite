import fetchival from 'fetchival';
let entries = fetchival('/api/v1/entries');

export const TEST_ACTION = 'TEST_ACTION';
export function testAction() {
  return {
    type: TEST_ACTION
  }
}

export const SET_AMBIENCE = 'SET_AMBIENCE';
export function setAmbience(freq) {
  return {
    type: SET_AMBIENCE,
    freq
  }
}
