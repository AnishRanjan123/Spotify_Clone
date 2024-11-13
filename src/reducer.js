export const initialState = {
    user: null,
    playlists:[],
    playing : false,
    item: null,
   // token: 'BQDQjDlf71JTVYnhBgqwKhTXKXwGLDUgqwRhTnfXHxr5XZNp_SYLcY-xNDurc1C-Oc-dHkHXl30s7Do5WWNeP0G7u09Bf-k7dtxPoba_6i37EX38BnKo2WAg6sL5SL0PsIL45JBUR9zujpCpBcOI9oC9oc-6Cy73Es0aTyam9EHUFDayMuDiKXOQEmPs6ouKaA6V2-_ttcMAM_apTs5XsCr_NtCy',

};


const reducer = (state,action)=>{
 console.log(action);

 switch(action.type)
 {
    case 'SET_USER' : 
    return { 
        ...state,
        user: action.user,
    };
    case 'SET_TOKEN':
        return {
            ...state,
            token:action.token,
        };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            };
            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly:action.discover_weekly,
                }
    default:
        return state;
 }
}
export default reducer;