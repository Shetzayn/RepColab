import { Router } from "express";
import GameController from "../controller/GameController";

export default class GameView{
    router: Router

    constructor(
        private readonly gameController: GameController
    ){
        this.router = Router()
        this.routes()
    }

    private routes(){
        
    }
}
