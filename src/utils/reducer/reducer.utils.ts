import { AnyAction } from "redux";

// type narrowing
type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type']
    match(action: AnyAction): action is ReturnType<AC>
}
//Each  part explained 
//This code defines a type called Matchable. Here's an explanation of each part:

// type Matchable<AC extends () => AnyAction>: 
//This declares a generic type Matchable that takes a type parameter AC. The AC parameter is a function that returns an AnyAction.

// = AC & { ... }: 
//This is an intersection type that combines the AC type with an object type.

    // type: ReturnType<AC>['type']: 
    //This adds a type property to the intersection type. The ReturnType<AC> utility type is used to retrieve the return type of the AC function, and ['type'] accesses the type property of that return type.

    // match(action: AnyAction): action is ReturnType<AC>: 
    //This adds a match method to the intersection type. It takes an action parameter of type AnyAction and returns a type predicate. The ReturnType<AC> is used again to get the return type of AC, and action is ReturnType<AC> specifies that the action parameter is of that specific return type.


export function withMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;
//Each part explained
// export function withMatcher<AC extends () => AnyAction & { type: string }>: 
// This declares a function withMatcher that takes a generic type parameter AC. The AC parameter is a function that returns an AnyAction and has a type property of type string.

// (actionCreator: AC): 
// This declares a parameter actionCreator of type AC, which is the provided action creator function.

// : Matchable<AC>: 
// This specifies the return type of the function as Matchable<AC>. It indicates that the function returns a value that matches the Matchable type with the same AC type parameter.

// In summary, the `withMatcher function` is a utility function that takes an action creator function as a parameter and returns a value of type Matchable<AC>. It essentially enhances the provided action creator with additional type narrowing capabilities, allowing you to perform type-safe matching on the actions created by that action creator.

export function withMatcher<AC extends (...args: any[])  => AnyAction & {type: string}>(actionCreator: AC) : Matchable<AC>;
// Each part explained
// export function withMatcher<AC extends (...args: any[]) => AnyAction & {type: string}>: 
// This declares a function withMatcher that takes a generic type parameter AC. The AC parameter is a function type that can accept any number of arguments (...args: any[]) and returns an AnyAction object with a type property of type string.

// (actionCreator: AC): 
// This declares a parameter actionCreator of type AC, which is the provided action creator function.

// : Matchable<AC>: 
// This specifies the return type of the function as Matchable<AC>. It indicates that the function returns a value that matches the Matchable type with the same AC type parameter.

// In summary, the withMatcher function is a utility function that takes an action creator function as a parameter and returns a value of type Matchable<AC>. The provided action creator function can accept any number of arguments and must return an AnyAction object with a type property of type string. The withMatcher function enhances the action creator with additional type narrowing capabilities, allowing you to perform type-safe matching on the actions created by that action creator.

export function withMatcher(actionCreator: Function) {
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match ( action: AnyAction) {
            return action.type === type;
        }
    })
}
// Each part explained
// export function withMatcher(actionCreator: Function): 
// This declares a function withMatcher and exports it. The actionCreator parameter has a type of Function, indicating that it can accept any function as an argument.

// const type = actionCreator().type;: 
// This line invokes the actionCreator function and accesses the type property of the returned object. It assigns the value of type to a variable called type.

// return Object.assign(actionCreator, { type, match (action: AnyAction) { return action.type === type; } }): 
// This line returns an object that combines the actionCreator function with additional properties and methods. The Object.assign() method is used to merge the properties into a new object.

// type property: 
// It assigns the type value obtained from the actionCreator invocation to the returned object.

// match method: 
// It defines a match method that takes an action parameter of type AnyAction. This method compares the type property of the action object with the type value obtained earlier. It returns true if they match, indicating that the action matches the action type produced by the actionCreator, and false otherwise.

// In summary, the withMatcher function takes an actionCreator function as an argument and enhances it by adding a type property and a match method. The type property holds the action type produced by the actionCreator, and the match method allows you to check if a given action matches that type. This utility function provides a convenient way to extend action creators with type narrowing capabilities.



export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
}



//Function Overloading
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return {type, payload};
}



//PRE-TYPESCRIPT
//export const createAction = (type, payload) => ({ type, payload });