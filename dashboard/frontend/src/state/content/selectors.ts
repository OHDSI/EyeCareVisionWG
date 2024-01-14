import { appContent } from "./types";

export namespace ContentSelectors {
    export const selectContent = (state: any) => state.content as appContent;
}