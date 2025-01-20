import { resolve } from "path";

export const projRoot = resolve(__dirname, "..", "..", "..");
export const pkgRoot = resolve(projRoot, "packages");
export const docsDirName = "docs";
export const docRoot = resolve(projRoot, docsDirName);
export const docPackage = resolve(docRoot, "package.json");
export const REPO_OWNER = "lonsdor-vue3-component";
export const REPO_NAME = "lonsdor-vue3-component";
export const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`;
export const REPO_BRANCH = "dev";
export const vpRoot = resolve(docRoot, ".vitepress");
