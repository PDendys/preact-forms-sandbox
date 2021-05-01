import { h } from 'preact';
import style from './style.css';

import Form from '../../components/form/Form';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<Form />
		<p>This is the Home component.</p>
	</div>
);

export default Home;
