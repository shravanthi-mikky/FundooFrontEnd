const initialDrawerState = {

    title: "Keep",

};

export const drawerReducer = (state = initialDrawerState, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_Title_as_Notes':
            return {
                ...state,
                title: "Notes"
            };
        case 'SET_Title_as_Reminders':
            return {
                ...state,
                title: "Reminders"
            };
        case 'SET_Title_as_EditLabels':
            return {
                ...state,
                title: "Edit_Labels"
            };
        case 'SET_Title_as_Archive':
            return {
                ...state,
                title: "Archive"
            };
        case 'SET_Title_as_Trash':
            return {
                ...state,
                title: "Trash"
            };

        default:
            return state;
    }
};