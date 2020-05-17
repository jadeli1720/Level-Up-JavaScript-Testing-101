import { add } from './App';

//Unit Test: it only tests one thing
test('add',() => {
//     const value = add(1,2)
//  expect(value).toBe(3);//assertion
//refactoring
expect(add(1 ,2)).toBe(3);
expect(add(5 ,2)).toBe(7);
//redundancy makes sure that there are no false positives.
});



