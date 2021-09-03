const Connection = require('../connection')
const connect = new Connection();

const postClients = async (req,res) =>{
    const conn = await connect.conDataBase();
    
    try {
        const Query = {
            name: 'post-clients',
            text: 'insert into clients(name)values($1)',
            values : [
                req.name
            ]
        }

        await conn.query(Query);
        return {code: 201, message: 'Client inserted'}
    } catch (error) {
        throw {code: 500, message: 'Client not inserted'}
    }
}

module.exports = postClients