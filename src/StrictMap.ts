export default class StrictMap<K,V> extends Map<K,V> {

    public strictGet(key: K):V {
        if( this.has(key)) {
            return this.get(key)!;
        } else {
            throw new Error("Can't find element");
        }
    }

    public strictSet(key: K, value: V): this {
        if( ! this.has(key)) {
            return this.set(key, value);
        } else {
            throw new Error(`Can't find element ${key}`) ;
        }
    }
}
