
import { BehaviorSubject } from 'rxjs';
import { EnvironmentInterface } from './environment.interface';
import { environment } from 'src/environments/environment';

const behaviorEnvironment: BehaviorSubject<EnvironmentInterface> = new BehaviorSubject(null);

export const setEnvironment = (env: EnvironmentInterface) => {
    behaviorEnvironment.next(env);
}

export const getEnvironment = (): EnvironmentInterface => behaviorEnvironment.getValue();

export const loadEnvironment = async (): Promise<EnvironmentInterface> => {
    try {
        const response = await fetch(environment.urlFetch);
        const dynamicEnv: EnvironmentInterface = await response.json();
        const newEnv: EnvironmentInterface = {
            ...dynamicEnv,
            ...environment
        }
        setEnvironment(newEnv);
        return newEnv;
    } catch (error) {
        console.error('Cannot load environment', error);
        setEnvironment(environment as any);
        return environment as any;
    }
}