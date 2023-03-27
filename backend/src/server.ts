import app from "./app";
import env from "./util/validateENV";
import mongoose from "mongoose";

const port=env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(function () {
        console.log("Mogoose connected");
        app.listen(port, function () {
            console.log("Server running on port: " + port)
        });
    })
    .catch(console.error);
