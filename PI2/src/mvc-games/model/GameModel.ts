import DBInitializer from "./DBInitializer";

export default class GameModel{
    private readonly dbService: DBInitializer;

    constructor() {
        this.dbService = DBInitializer.getInstance();
    }
    
    public async retriveGame(){
        
        await this.dbService.connect('pi2')
        const gamesCollection = this.dbService.getCollection("games");
        console.log(await gamesCollection.find({}).toArray())
        
    }
}
