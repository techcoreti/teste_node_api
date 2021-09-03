const Connection = require('../connection')
const connect = new Connection();

const postOrders = async (req,res) =>{
    const conn = await connect.conDataBase();
    let count = 0;

    try {
        for(i = 0; i < req.products.length; i++){
            const Query = {
                name: 'post-order',
                text: 'insert into orders(clientid,productid,quantity)values($1,$2,$3)',
                values:[
                    req.clientId,
                    req.products[i].productId,
                    req.products[i].quantity
                ]
            }
    
            await conn.query(Query);
            count++;
        }        
    } catch (error) {
        if(count > 0){
            return {code: 201, message: `Inserted ${count} from ${i} order(s)`}
        }else{
            throw {code: 500, message: `Order(s) not inserted`}
        }
    }
    return {code: 201, message: `Inserted ${count} from ${i} order(s)`}
}

module.exports = postOrders