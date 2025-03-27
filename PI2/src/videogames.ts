import Server from "./express/Server";
import GameController from "./mvc-games/controller/GameController";
import GameModel from "./mvc-games/model/GameModel";
import GameView from "./mvc-games/view/GameView";

const gameModel = new GameModel()
const gameController = new GameController(gameModel)
const gameView = new GameView(gameController)

const server = new Server(gameView)
server.start()