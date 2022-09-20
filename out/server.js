import express from "express";
import { readFileSync, readdirSync } from "fs";
import { writeFile } from "fs/promises";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use("/sites", express.static("sites"));
app.get("/test", (req, res) => {
    res.sendFile("/home/luke/student-web/public/test.html");
});
app.get("/list", (req, res) => {
    try {
        const cache = readFileSync("sites-cache.json", { encoding: "utf8" });
        res.send(JSON.parse(cache));
    }
    catch {
        res.status(503).set("Retry-After", "10").send("Still Starting Up");
    }
});
function getSites() {
    const hours = readdirSync("sites");
    const hourMap = hours.map((hour) => {
        const students = readdirSync(`sites/${hour}`);
        return {
            hour,
            students,
        };
    });
    return hourMap;
}
setInterval(async () => {
    writeFile("sites-cache.json", JSON.stringify(getSites()));
}, 10000);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
