import { ActionReturnFunction, PluginModuleActionFactory } from "..";

export interface ActionRegisterItem<T = string> {
  provider: T;
  methods: {
    main: ActionReturnFunction;
  };
}

export type ActionRegister = (
  actionsRegisterItemArray: ActionRegisterItem[]
) => PluginModuleActionFactory;
