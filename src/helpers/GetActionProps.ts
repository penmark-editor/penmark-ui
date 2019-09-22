import Action from "rpm-editor/lib/actions/Action"; 

export const GetActionProps = (action: Action) => {
    return {
        active: action.isActive(),
        disabled: action.isDisabled(),
        onClick: () => action.execute(),
        name: action.getName,
        shortcut: action.getShortcuts[0],
        shortcuts: action.getShortcuts
    }
}