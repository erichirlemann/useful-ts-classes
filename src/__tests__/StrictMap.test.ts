import StrictMap from '../StrictMap'
import {describe, it, expect } from '@jest/globals'

describe('StrictMap', ()=>{

    it('should be strict when getting value', ()=>{
        const underTest = new StrictMap<number, string>([[1,'one'],[2,'two']]);
        expect(underTest.has(1)).toBe(true);
        expect(underTest.strictGet(1)).toBe('one');
        expect(underTest.strictGet(2)).toBe('two');

        expect(() => underTest.strictGet(666)).toThrowError();

    });


    it('should be strict when setting value', ()=>{
        const underTest = new StrictMap<number, string>([[1,'one'],[2,'two']]);
        expect(underTest.strictSet(3,'three')).toBe(underTest);
        expect(underTest.strictGet(3)).toBe('three');


        expect(() => underTest.strictSet(2, "value does exist already throw")).toThrowError();

    });
})
