
export type TypedFactory<T> = () => T;
export default class TypedSingleton<T> {
    private singleton?: T;
    private factory: TypedFactory<T>;

    public constructor( factory: TypedFactory<T> ) {
        this.factory = factory;
    }

    public getSingleton(): T {
        if( !this.singleton ) {
            this.singleton = this.factory();
        }

        return this.singleton;
    }
}
