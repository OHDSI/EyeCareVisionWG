import { GeneralState } from "./types"

export const GeneralSelectors = {
    getExampleStateItme: (state: any) => (state.general as GeneralState).exampleStateItem,
}