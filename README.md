# Useful classes in Typescript

Classes I find sometime useful to have under the hand

## StrictMap

A `Map<K,V>` with a `safeGet` method that throws whenever the element does not exist.

## TypedSingleton

Singleton with a factory is given to the constructor

```typestript
const mySingleton = new TypedSingleton( factory );
const theInstance = mySingleton.getSingleton()
```
