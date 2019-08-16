import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

const UserInfo = () => {

	const username=useSelector((state)=> state.user.user);

	return (
		<div>
			<p> {username}</p>
		</div>
	)
}

export default UserInfo;