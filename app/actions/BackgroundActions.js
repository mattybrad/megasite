import fetchival from 'fetchival';
let entries = fetchival('/api/v1/entries');

export const TEST_ACTION = 'TEST_ACTION';
export function testAction() {
  return {
    type: TEST_ACTION
  }
}

export const SET_COLORS = 'SET_COLORS';
export function setColors(primaryColor, secondaryColor) {
  return {
    type: SET_COLORS,
    primaryColor,
    secondaryColor
  }
}
