const initialState = {
	display: false,
	user: 'Connectez vous'
}

export default function(state = initialState, {type, payload}) {
	switch(type){
		case 'display-submit-box':
			return{
				...state,
				display: true
		}
		case 'ChangeUser':
			return {
				...state,
				user: payload
			}
		default :
			return state;	
	};

};