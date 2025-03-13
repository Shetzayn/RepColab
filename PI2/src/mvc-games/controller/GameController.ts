import GameModel from "../model/GameModel";
import { Request, Response } from "express";

export default class GameController{
    constructor(private readonly gameModel: GameModel){}

    public getGames(_req: Request, res: Response){
        res.status(200).json( { games: this.gameModel})
    }

}
