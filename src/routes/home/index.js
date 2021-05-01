import { h } from 'preact';
import style from './style.css';

import Form from '../../components/form/Form';

const Home = () => (
	<div class={style.home}>
		<div className="container">
			<div className="col-12">
				<h1>Home</h1>
			</div>
			<div className="col-8 offset-2">
				<Form />
			</div>
		</div>
	</div>
);

export default Home;
