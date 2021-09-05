import React from 'react';
import { Link } from 'react-router-dom';

const Confirm: React.FC = () => (
	<div className='confirm blue lighten-5'>
		<h5>Verify your email address</h5>
		<p>
			Thank you for using Graph App! Please confirm that you want to use this
			address in your Graph App account.
		</p>
		<Link to='/login'>Back to login</Link>
	</div>
);

export default Confirm;
