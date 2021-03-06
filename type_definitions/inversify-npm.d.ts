// Type definitions for inversify 1.2.2
// Project: https://github.com/inversify/InversifyJS
// Definitions by: inversify <https://github.com/inversify>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface TypeBindingInterface<TServiceType> {
  runtimeIdentifier : string;
  implementationType : { new(): TServiceType ;};
  cache : TServiceType;
  scope : number; // TypeBindingScopeEnum
}

interface KernelInterface {
  bind(typeBinding : TypeBindingInterface<any>) : void;
  unbind(runtimeIdentifier : string) : void;
  unbindAll() : void;
  resolve<TImplementationType>(runtimeIdentifier : string) : TImplementationType;
}

export enum TypeBindingScopeEnum {
    Transient = 0,
    Singleton = 1,
}

export class TypeBinding<TServiceType> implements TypeBindingInterface<TServiceType> {
    runtimeIdentifier: string;
    implementationType: {
        new (): TServiceType;
    };
    cache: TServiceType;
    scope: TypeBindingScopeEnum;
    constructor(runtimeIdentifier: string, implementationType: {
        new (...args: any[]): TServiceType;
    }, scopeType?: TypeBindingScopeEnum);
}

export class Kernel implements KernelInterface {
    private _bindings;
    bind(typeBinding: TypeBindingInterface<any>): void;
    unbind(runtimeIdentifier: string): void;
    unbindAll(): void;
    resolve<TImplementationType>(runtimeIdentifier: string): TImplementationType;
    private _validateBinding(typeBinding);
    private _getConstructorArguments(func);
    private _injectDependencies<TImplementationType>(func);
    private _construct<TImplementationType>(constr, args);
    constructor();
}

interface InjectableConstructorInterface {
    argumentTypes: Array<string>;
}

export function Inject(typeIdentifier: string): (typeConstructor: InjectableConstructorInterface, propertyName: string, argumentIndex: number) => void;
