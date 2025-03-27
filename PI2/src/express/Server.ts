import express, { Application } from "express";
import Environment from "../shared/Environment";
import GameView from "../mvc-games/view/GameView";

export default class Server{
    private readonly app: Application

    constructor(
        private readonly gameView: GameView
    ){
        this.app = express()
        this.configure()
        this.routes()
    }

    public routes() {
        this.app.use('/', this.gameView.router)
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
