// importing other files 
const db = require("./config/connection");
const routes = require("./routes");
const express = require(express);

const cwd = process.cwd();

// creating port
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

// server communicates with user by reading requests and sending responses.
db.once("open", () => {
    app.listen(PORT, () =>{
        console.log(`server running on port ${PORT}!`);
    });
});
