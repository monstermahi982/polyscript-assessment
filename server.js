import express from 'express'
import { PORT } from './config'
import cors from 'cors'
import errorhandler from './middleware/errorHandler'
import routes from './router'
import knex from './database'

const app = express()

app.use(cors({ origin: ['http://localhost:4200'] }))
app.use(express.json())
app.use('/api', routes);
app.use(errorhandler);

async function table() {
    // user table
    await knex.schema.createTableIfNotExists("users", function (table) {
        table.increments(); // integer id
        table.string('name', 50);
        table.string('email', 100);
        table.string('password', 100);
    })
    // product table
    const data = await knex.schema.createTableIfNotExists("prods", function (table) {
        table.increments(); // integer id
        table.string('name', 50);
        table.integer('price', 100);
        table.integer('quantity', 100);
        table.date('createdAt');
        table.string('expiry', 100)
    })
    console.log(data);
}

// table();

app.listen(PORT, () => console.log(`app running on ${PORT} port`))
