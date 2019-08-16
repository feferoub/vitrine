import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './LoginForm.css'

const LoginForm = () => {

	const user = useSelector((state)=> state.user.user)
	const dispatch = useDispatch();
	const [entree, setEntree]=useState('');

	const onChange = event => {
		setEntree(event.target.value);
	}

	const onSubmit = event => {
		event.preventDefault();
		dispatch({type:'ChangeUser', payload:event.target.name.value})
		console.log(user)
	}

	return (
		<div class="form-style">
				<form onSubmit={onSubmit} class='form'>
					<fieldset>
						<legend>
						<span class="number">1</span> Candidate Info
						</legend>
						<input type='text' name='name' onChange={onChange} placeholder="Your Username *"/>
						<input type='text' name='password' onChange={onChange} placeholder="Your Password *"/>
						<label for="age">Age</label>
						<select id="age" name="ageSelect">
							<optgroup label="Young">
								  <option>0 - 10 years</option>
								  <option>11 - 20 years</option>
							</optgroup>
							<optgroup label="Old">
								  <option>21 - 40 years</option>
								  <option>41 - 80 years</option>
								  <option> 81+ years </option>
							</optgroup>
						</select>      
					</fieldset>
					<fieldset>
						<legend><span class="number">2</span> Additional Info</legend>
						<textarea name="field3" placeholder="About Your School"></textarea>
					</fieldset>
					<input type="submit" value="Apply" />
				</form>
			</div>
	)
}

export default LoginForm;