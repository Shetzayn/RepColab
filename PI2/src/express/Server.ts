import express, { Application } from "express";
import Environment from "../shared/Environment";

export default class Server{
    private readonly app: Application

    constructor(

    ){
        this.app = express()
        this.configure()
    }

    private configure(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    public start(){
        const HOST = Environment.getHost()
        const PORT = Environment.getPort()
        const PROTOCOL = Environment.getProtocol()
        this.app.listen(PORT, () => 
            console.log(`Server is running on ${PROTOCOL}://${HOST}:${PORT}`)
        )
    }
}
