import Action from "rpm-editor/lib/actions/Action"; 

export const GetToolbarButtonProps = (action: Action) => {
    return {
        active: action.isActive(),
        disabled: action.isDisabled(),
        onClick: () => action.execute()
    }
}