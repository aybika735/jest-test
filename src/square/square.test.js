// const square = require('./square');
const mock = require('./square')


// describe('square', ()=>{
//     beforeEach(()=>{

//     })
//   test('Корректное значение', ()=>{
//     expect(square(2)).toBe(4);
//   })
//   test('Меньше корректного', ()=>{
//     expect(square(2)).toBeLessThan(5);
//   })
//   test('Меньше корректного', ()=>{
//     expect(square(2)).toBeGreaterThan(3);
//   })
//   test('Меньше корректного', ()=>{
//     expect(square(2)).not.toBeUndefined();
//   })
 
// })

describe('square', ()=>{
    beforeEach(()=>{

    })
  
  test('корректного', ()=>{
    const spyMathPow = jest.spyOn(Math, 'pow');
    mock(2)
    expect(spyMathPow).toBeCalledTimes(1);
  })
  test('корректного', ()=>{
    const spyMathPow = jest.spyOn(Math, 'pow');
    mock(1)
    expect(spyMathPow).toBeCalledTimes(0);
  })
  afterEach (()=>{
    jest.clearAllMocks()
  })
 
})



