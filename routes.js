const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");
routes.add("about", "/about/:slug");
routes.add("editor", "/editor");
