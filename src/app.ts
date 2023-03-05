import express, { Express } from "express"

/* ----------------------------------------------------------------- */
/* ------------------------- Import Routes ------------------------- */
/* ----------------------------------------------------------------- */
import RoutesIndex      from './routes/routes'
import RoutesProviders  from './routes/providers.routes'
import RoutesCategories from './routes/categories.routes'
import RoutesProducts   from './routes/products.routes'



const app: Express = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/* ------------------------------------------------------------------ */
/* ----------------------------- Routes ----------------------------- */
/* ------------------------------------------------------------------ */
app.use('/',                RoutesIndex)
app.use('/api/providers',   RoutesProviders)
app.use('/api/categories',  RoutesCategories)
app.use('/api/products',    RoutesProducts)

export default app