import Joi from 'joi'
import knex from '../database/'

const productController = {
    async add(req, res, next) {
        const userSchema = Joi.object({
            name: Joi.string().max(30).min(3).required(),
            price: Joi.number().required(),
            quantity: Joi.number().required(),
            expiry: Joi.string().required()
        })

        const { error } = await userSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { name, price, quantity, expiry } = req.body;

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        const data = await knex('products').insert({
            name,
            price,
            quantity,
            expiry: today,
            createdAt: today
        })

        res.json(data)
    },

    async getOne(req, res, next) {
        const data = await knex('products').where('id', req.params.id).first();
        res.json(data)
    },

    async getAll(req, res, next) {

        const data = await knex.select().table('products')

        res.json(data)
    },

    async update(req, res, next) {
        const userSchema = Joi.object({
            name: Joi.string().max(30).min(3).required(),
            price: Joi.number().required(),
            quantity: Joi.number().required(),
            expiry: Joi.string().required()
        })

        const { error } = await userSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { name, price, quantity, expiry } = req.body;

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        const data = await knex('products').where({ id: req.params.id })
            .update({
                name,
                price,
                quantity,
                expiry: today,
            })



        res.json({ data: "update" })
    },

    async delete(req, res, next) {
        const data = await knex('products').where({ id: req.params.id }).del()
        res.json(data)
    },
}

export default productController