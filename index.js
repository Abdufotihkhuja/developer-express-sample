const Application = require("./framerwork/Application");
const PORT = process.env.PORT || 3000;
const app = new Application();
const userRouter = require("./src/user-router");
const jsonParser = require("./framerwork/parseJson");
const parseUrl = require("./framerwork/parseUrl");

app.use(jsonParser);
app.use(parseUrl(`http://localhost:${PORT}`));
app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
