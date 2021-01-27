import '../sass/style.scss';
import { routes } from './routes';

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  let pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());