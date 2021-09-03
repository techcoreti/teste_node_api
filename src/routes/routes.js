const express = require('express')
const route = express.Router({ caseSensitive: true});
const postClients = require('../dao/clients')
const postOrders = require('../dao/order')
const rulesOrders = require('../rules/orders')

const Routes = class{
    constructor() {
        this.routes = route;

        // Load routes
        this.clients();
        this.orders();

    }

    clients = () =>{
        this.routes.post('/v1/clients', async (req,res) =>{
            try {
                const ret = await postClients(req.body,res)
                res.status(ret.code).send({message: ret.message})
            } catch (error) {
                res.status(error.code).send({message: error.message})
            }
        })
    }

    products = () =>{
        this.routes.post('/v1/products', async (req,res) =>{

        })
    }

    orders = () =>{
        this.routes.post('/v1/orders', rulesOrders, async (req,res) =>{ 
            try {
                const ret = await postOrders(req.body);
                res.status(ret.code).send({message: ret.message})
            } catch (error) {
                res.status(error.code).send({message: error.message})
            }    
        })
    }
}

module.exports = Routes;