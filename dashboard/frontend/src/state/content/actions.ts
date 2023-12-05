import contentSlice from './reducer'

export namespace ContentActions {
    export const setContent = contentSlice.actions.setAppContent
    export const reset = contentSlice.actions.reset
}