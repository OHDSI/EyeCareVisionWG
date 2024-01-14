import { GeneralState } from "./types"

export const GeneralSelectors = {
    getfontSize: (state: any) => (state.general as GeneralState).fontSize,
}