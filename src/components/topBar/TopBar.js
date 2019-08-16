import React from 'react';
import './TopBar.css'
import {useDispatch} from 'react-redux';

const TopBar = () => {
	const dispatch = useDispatch();
	const onClick = (e) => {
		dispatch({type:'display-submit-box',action:true})
	}
	return (
		<div class='topBar'> 
			<button class='button' onClick={onClick}> Sign In </button>
		</div>
		)
	}

export default TopBar;