import {describe, it, expect } from '@jest/globals'
import timedOutPromise from '../timedOutDecorator';

describe('timedOutPromise', ()=> {
  it('should reject if the promise is not resolved after the timeout', ()=> {
    const anAmountOfTime = 50;
    const promiseTakingTooLong = new Promise((resolve)=> {
      setTimeout(()=> {
        resolve('done');
      }, anAmountOfTime);
    });

    return timedOutPromise(promiseTakingTooLong, anAmountOfTime/2).then(()=> {
      return Promise.reject(new Error('Expecting failure!'));
    },(err)=> {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Timeout');
      return "Expected end";
    });
  });

  it('should resolve if the promise is resolved before the timeout', ()=> {
    const amountOfTimeToWait = 10;
    const promiseFastEnough = new Promise((resolve)=> {
      setTimeout(()=> {
        resolve('done');
      }, amountOfTimeToWait);
    });

    return timedOutPromise(promiseFastEnough, amountOfTimeToWait*2)
    .then((result)=> {
      expect(result).toBe('done');
    });
  });
});