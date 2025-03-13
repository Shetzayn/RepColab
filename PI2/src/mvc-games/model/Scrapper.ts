import axios from "axios";
import fs from "fs";

//import Game from "../types/Game";

export default class Scrapper{
    private readonly apiKey = "e1e82998ca874af28d8ba8dd237ebe70"

    public async getData(){
        this.addAdditionalData()
    }

    public countJson(){
        const rawData = fs.readFileSync("games.json", "utf-8");

        const gamesData = JSON.parse(rawData);

        console.log(gamesData[0])
        
    }

    public cleanData(){
        const rawData = fs.readFileSync("games.json", "utf-8");

        const gamesData = JSON.parse(rawData);

        gamesData.forEach((game: any) => {
            delete game.slug
            delete game.tba
            delete game.ratings
            delete game.ratings_count
            delete game.reviews_text_count
            delete game.added
            delete game.added_by_status
            delete game.suggestions_count
            delete game.saturated_color
            delete game.dominant_color
            delete game.platforms
            delete game.clip
        });

        fs.writeFileSync("games.json", JSON.stringify(gamesData, null, 2), "utf-8");
    }

    private async getAdditionalData(gameId: number){
        const response = await axios.get(`https://api.rawg.io/api/games/${gameId}`, {
            params: { key: this.apiKey },
        });

        return {
            developers: response.data.developers.map((dev: any) => dev.name), 
            publishers: response.data.publishers.map((pub: any) => pub.name),
            description: response.data.description_raw 
        }
    }

    public async addAdditionalData(){
        const rawData = fs.readFileSync("games.json", "utf-8");

        const gamesData = JSON.parse(rawData);

        for (const game of gamesData) {
            game.additionalData = await this.getAdditionalData(game.id);
            console.log(`Updated ${game.name}`);
        }

        fs.writeFileSync("games.json", JSON.stringify(gamesData, null, 2), "utf-8");
    }


    
    private async fetchGameDataRawg(page: number = 452): Promise<void> {
        try {
            const apiKey = "e1e82998ca874af28d8ba8dd237ebe70";
            const filePath = "games.json";
            const response = await axios.get(`https://api.rawg.io/api/games`, {
                params: {
                    key: apiKey,
                    esrb_rating: "everyone,teen,mature",
                    page_size: 40,
                    page: page,
                },
            });
            const games = response.data.results;
            if (fs.existsSync(filePath)) {
                const existingData = JSON.parse(fs.readFileSync(filePath, "utf8"));
                existingData.push(...games);
                fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
            } else {
                fs.writeFileSync(filePath, JSON.stringify(games, null, 2));
            }
            console.log(`Page ${page} saved successfully!`);
            if (response.data.next) {
                await this.fetchGameDataRawg(page + 1); 
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } 
    }
    
    
}
