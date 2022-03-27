import { DynamicServiceBody, DynamicServiceResponseOutput, DynamicServiceResponseOutputAuthCallback, DynamicServiceResponseOutputListener } from "..";
import { SandboxLib } from "..";
import { DynamicServiceResponseOutputWebhook } from "../dynamic-service";
export declare type ActionReturnValue = Promise<DynamicServiceResponseOutput>;
export declare type PluginModuleActionFactory = () => {
    [n: string]: {
        main: (body?: DynamicServiceBody, lib?: SandboxLib) => ActionReturnValue | ListenerReturnValue;
    };
};
export declare type CredentialReturnValue = Promise<DynamicServiceResponseOutputAuthCallback>;
export declare type PluginModuleCredentialFactory = () => {
    [n: string]: {
        authCallback: (body?: DynamicServiceBody, lib?: SandboxLib) => CredentialReturnValue;
        test: (body?: DynamicServiceBody, lib?: SandboxLib) => CredentialReturnValue;
    };
};
export declare type ListenerReturnValue = Promise<DynamicServiceResponseOutputListener>;
export declare type PluginModuleListenerFactory = () => {
    [n: string]: {
        main: (body?: DynamicServiceBody, lib?: SandboxLib) => ListenerReturnValue;
    };
};
export declare type WebhookReturnValue<B, H, P> = Promise<DynamicServiceResponseOutputWebhook<B, H, P>>;
export declare type PluginModuleWebhookFactory = () => {
    [n: string]: {
        main: <B, H, P>(body?: DynamicServiceBody, lib?: SandboxLib) => WebhookReturnValue<B, H, P>;
    };
};
