const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("dist"));
app.use("/sites", express.static("sites"));

app.listen(port, () => {
	console.log(`Server Running on port ${port}`);
});
