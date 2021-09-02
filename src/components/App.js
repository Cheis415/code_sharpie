import React, { useEffect, useState } from 'react';
import Editor from './Editor';

function App() {
	const [html, setHtml] = useState('');
	const [css, setCss] = useState('');
	const [js, setJs] = useState('');
	const [srcDoc, setSrcDoc] = useState('');

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setSrcDoc(`
			<!doctype html>
			<head></head>
			<BODY>${html}</BODY>
			<style>${css}</style>
			<script>${js}</script>
		</html>
		`);
		}, 250);

		return () => clearTimeout(timeOut);
	}, [html, css, js]);

	return (
		<>
			<div className="pane top-pane">
				<Editor
					className="editor"
					name="HTML"
					lang="xml"
					value={html}
					onChange={setHtml}
				/>
				<Editor
					className="editor"
					name="CSS"
					lang="css"
					value={css}
					onChange={setCss}
				/>
				<Editor
					className="editor"
					name="JS"
					lang="js"
					value={js}
					onChange={setJs}
				/>
			</div>
			<div className="pane">
				<iframe
					srcDoc={srcDoc}
					title="output"
					sandbox="allow-scripts"
					frameBorder="0"
					width="100%"
					height="100%"
				/>
			</div>
		</>
	);
}

export default App;
