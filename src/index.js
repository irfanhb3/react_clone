import ApnaReact from './apna-react';
import ApnaReactDOM from './apna-react-dom';

const Comp = ( { type } ) => { return (<h3>Functional Component { type }</h3>)}

const App = (
	<div>
		<h1 property="Yo">Heading hai</h1>
		<p>Paragraph hai</p>
		<Comp type={"React"}/>
	</div>
);

ApnaReactDOM.render(App, document.getElementById("root"));