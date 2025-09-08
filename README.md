# Useful classes in Typescript

Classes I find sometime useful to have under the hand

## StrictMap

A `Map<K,V>` which in addition have:
- `strictGet` method that throws whenever the element does not exist.
- `strictSet` method that throws if the value does already exist.

## TypedSingleton

Singleton with a factory is given to the constructor

```typescript
const mySingleton = new TypedSingleton( theFactory );
const theInstance = mySingleton.getSingleton()
```

## TypedSingleton

Given a promise, if this is not resolved/rejected after a given time, it is rejected with a "Timeout" `Error`

```typescript
timedOutDecorator(longTakingPromise, 1000)
  .then( (data) => {
    // the long taking promise tooks less than 1000ms
    ...
  })
  .catch( (error) => {
    if( error instanceof Error && error.message === 'Timeout' ) {
      // the  promise tooks more than 1000 to resolve
    }    
    ...
  })
```


## Experiment