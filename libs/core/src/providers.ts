import { InitApplicationSetup } from './console/commands';
import { HttpExplorer } from './http';
const providers = [
  // commands
  InitApplicationSetup,

  // http providers
  HttpExplorer,

];

const getProviders = function (): any {
  return providers;
};

export { getProviders };
