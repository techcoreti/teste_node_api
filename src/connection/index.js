
const Connection = class{
    constructor(){
        this.conn = undefined;
    }
    
    async conDataBase(){
        if(this.conn){
            return this.conn
        }
        
        const { Pool } = require('pg')

        const pool = new Pool({
            host: 'localhost',
            port: '5432',
            user: 'postgres',
            password: '123mudar',
            database: 'postgres'
        })
        
        this.conn = await pool.connect();
        return this.conn
    
    }
}

module.exports = Connection;

