import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as helmet from "helmet";
import * as dotenv from "dotenv";
import routes from "./routes";



createConnection().then(async connection => {
    //Create environment variables
    dotenv.config();
    // create express app
    const app = express();
  
    //BODY-PARSER
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //CORS
    app.use(cors());

    //HELMET
    app.use(helmet());
    
    //ROUTES
    app.use("/api/v1",routes)

    //LISTEN
    const port = process.env.PORT || 5000;
    app.listen(port,() => {
        console.log(`App is listening on port ${port}` )
    })

}).catch(error => console.log(error));
