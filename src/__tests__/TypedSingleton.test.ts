import TypedSingleton from "../TypedSingleton";
import {describe, it, expect, jest } from '@jest/globals'

describe( "TypedSingleton", () => {
    it('should act as singleton', () => {
        const factory = jest.fn().mockImplementation(() => Object.create(null));

        const underTest = new TypedSingleton(factory);
        const firstCall = underTest.getSingleton();
        expect(factory).toHaveBeenCalledTimes(1)
        const secondCall = underTest.getSingleton();
        expect(factory).toHaveBeenCalledTimes(1)
        expect(firstCall).toBe(secondCall);

    })
});
