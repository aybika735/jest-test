const mapArrToStrings = require('./mapArrToString');

describe('mapArrToStrings', ()=>{
    test('Передача целых чисел', ()=>{
      expect(mapArrToStrings([1,2,3,4])).toEqual(['1', '2', '3','4']);
    })
    test('Передача чисел и строк', ()=>{
      expect(mapArrToStrings([1, 'd', '1',2])).toEqual(['1', '2']);
    })
    test('Передача чисел и строк', ()=>{
        expect(mapArrToStrings([1, 2])).not.toEqual([1,2]);
      })
    
  })