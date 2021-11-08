import Joi from 'joi'
import knex from '../database/'

const userController = {
    async register(req, res, next) {

        const userSchema = Joi.object({
            name: Joi.string().max(30).min(3).required(),
            email: Joi.string().email().required(),
            password: Joi.string().max(50).min(3).required(),
            conpassword: Joi.any().valid(Joi.ref('password')).required()
        })

        const { error } = await userSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { name, email, password } = req.body;

        try {
            const exist = await knex('users').where('email', email)
            if (exist.length !== 0) {
                return next(exist);
            }
        } catch (err) {
            return next(err);
        }

        const data = await knex('users').insert({
            name,
            email,
            password
        })
        res.json({ id: data })
    },

    async login(req, res, next) {
        const userSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().max(50).min(3).required(),
        })

        const { error } = await userSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const data = await knex('users').where('email', req.body.email).first();
        if (data.password !== req.body.password) {
            return next("data");
        }

        res.json(data)
    }
}

export default userController;