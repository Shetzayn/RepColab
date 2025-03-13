import { Db, MongoClient } from "mongodb"
import Environment from "../../shared/Environment"

export default class DBInitializer{
    private static instance: DBInitializer
    private readonly client: MongoClient
    private db!: Db

    constructor(){
        const uri = Environment.getConnection()
        console.log(uri)
        this.client = new MongoClient(uri);
    }

    public static getInstance(){
        if(DBInitializer.instance === null || DBInitializer.instance === undefined){
            DBInitializer.instance = new DBInitializer()
        }
        return DBInitializer.instance
    }

    async connect(dbName: string) {
        if (!this.db) {
            await this.client.connect();
            this.db = this.client.db(dbName);
        }
    }

    public getCollection(collectionName: string) {
        if (!this.db) throw new Error("Database not connected.");
        return this.db.collection(collectionName);
    }
}
