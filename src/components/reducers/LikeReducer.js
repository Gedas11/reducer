
function LikeReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'add':
            newState = {likes:state.likes + 1}
            break;

            case 'remove':
            newState = {likes:state.likes - 1}
            break;

            default: throw new Error()
    }

    return newState

}

export default LikeReducer