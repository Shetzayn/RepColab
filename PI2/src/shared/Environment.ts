export default class Environment{
    private static instance: Environment
    private static HOST: string
    private static PORT: string
    private static PROTOCOL: string

    private static USERNAMEDB: string
    private static PASSWORDDB: string
    private static DATABASE: string
    private static PORTDB: string
    private static CONNECTION: string
    private static CONNECTION2: string


    constructor(){
        Environment.HOST = process.env['HOST'] ?? 'localhost'
        Environment.PORT = process.env['PORT'] ?? '1902'
        Environment.PROTOCOL = process.env['PROTOCOL'] ?? 'http'
        Environment.USERNAMEDB = process.env['USERNAMEDB'] ?? 'admin'
        Environment.PASSWORDDB = process.env['PASSWORDDB'] ?? 'admin'
        Environment.DATABASE = process.env['DATABASE'] ?? 'pi2'
        Environment.PORTDB = process.env['PORTDB'] ?? '27017'
        Environment.CONNECTION2 = `mongodb://${Environment.USERNAMEDB}:${Environment.PASSWORDDB}@${Environment.HOST}:${Environment.PORTDB}/${Environment.DATABASE}`
        Environment.CONNECTION = "mongodb://admin:admin@localhost:27017/pi2?authSource=admin"
    }

    public static getInstance(){
        if(Environment.instance === null || Environment.instance === undefined){
            Environment.instance = new Environment()
        }
        return Environment.instance
    }

    public static getHost(){
        Environment.getInstance()
        return Environment.HOST
    }

    public static getPort(){
        Environment.getInstance()
        return Environment.PORT
    }

    public static getProtocol(){
        Environment.getInstance()
        return Environment.PROTOCOL
    }

    public static getConnection(){
        Environment.getInstance()
        return Environment.CONNECTION
    }

    public static getConnection2(){
        Environment.getInstance()
        return Environment.CONNECTION2
    }

}