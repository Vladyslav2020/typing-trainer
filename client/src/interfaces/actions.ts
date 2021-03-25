export interface ActionInterface<T> {
    type: string;
    payload?: T;
}