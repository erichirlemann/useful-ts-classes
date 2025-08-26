
/*
   if the given promise is not resolved/rejected after a given time, it is rejected with a timeout error
*/
export default function timedOutDecorator<T>(promise: Promise<T>, timeout: number): Promise<T> {
  let timeoutId: NodeJS.Timeout;
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {timeoutId = setTimeout(() => {
      reject( new Error('Timeout'));
    }, timeout);})
  ])
  .finally(() => clearTimeout(timeoutId));
}