# Useful classes in Typescript

Classes I find sometime useful to have under the hand

## StrictMap

A `Map<K,V>` which in addition have:
- `strictGet` method that throws whenever the element does not exist.
- `strictSet` method that throws if the value does already exist.

## TypedSingleton

Singleton with a factory is given to the constructor

```typestript
const mySingleton = new TypedSingleton( theFactory );
const theInstance = mySingleton.getSingleton()
```
