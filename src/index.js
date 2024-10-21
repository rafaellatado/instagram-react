/* import ReactDOM from "react-dom";
import App from "./components/App"

ReactDOM.render(<App />, document.querySelector(".root")); */

import ReactDOM from "react-dom/client"; 
import App from "./components/App";

const root = ReactDOM.createRoot(document.querySelector(".root")); 
root.render(<App />);