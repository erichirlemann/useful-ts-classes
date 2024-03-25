import StrictMap from '../StrictMap'
import {describe, it, expect } from '@jest/globals'

describe('StrictMap', ()=>{

    it('should return value if exists', ()=>{
        const underTest = new StrictMap<number, string>([[1,'one'],[2,'two']]);
        expect(underTest.has(1)).toBe(true);
        expect(underTest.strictGet(1)).toBe('one');
        expect(underTest.strictGet(2)).toBe('two');

        expect(() => underTest.strictGet(666)).toThrowError();

    })
})
