import installer from "./defaults";
export * from "./components/index";

import "./style/index";

export const install = installer.install;
export const version = installer.version;
export default installer;

//Cannot find type definition file for 'sass'. The file is in the program because: Entry point for implicit type library 'sass'
