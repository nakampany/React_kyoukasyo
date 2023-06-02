import ReactDOM from 'react-dom';
import { App } from './App';

// ここでAppコンポーネントをレンダリングしている
// public/index.htmlの<div id="root"></div>にレンダリングされる
ReactDOM.render(<App />, document.getElementById('root'));