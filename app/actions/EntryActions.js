import fetchival from 'fetchival';
let entries = fetchival('/api/v1/entries');

export const TEST_ACTION = 'TEST_ACTION';
export function testAction() {
  return {
    type: TEST_ACTION
  }
}
