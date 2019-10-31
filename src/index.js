import './global/global.css';
import home from './views/Home';
import TplEngin from "./utils/tpl-engine";

let app = new TplEngin
app.mount("#app", home)

