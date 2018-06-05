const expect = require('expect');

const utils = require('./utils.js');

it('should add two numbers', () => {
  const res = utils.add(33, 11);
  
  expect(res).toBe(44);
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7);
    done();
  })
})

it('should square a number', () => {
  const res = utils.square(3);
  expect(res).toBe(9);
});

it('should async square a number', (done) => {
  utils.asyncSquare(4, (res) => {
    expect(res).toBe(16);
    done();
  });
});

it('should set first and last names', () => {
  const person = {
    age: 29,
    hobbies: ['coding', 'really', 'well'],
  };
  const res = utils.setName(person, 'Mark Tice');

  expect(res).toMatchObject({
    firstName: 'Mark',
    lastName: 'Tice',
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   // expect([2,3,4]).toInclude(5);
//   expect({
//     name: 'Mark',
//     age: 29,
//     location: 'Melbourne'
//   }).toInclude({
//     age: 29
//   });
// });
