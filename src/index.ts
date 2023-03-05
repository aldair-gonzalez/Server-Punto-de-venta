import app from './app'
import { SERVER_PORT } from './config/config'
import { mongoConnect } from './config/mongo.config'

const server = app.listen(SERVER_PORT, () => console.log(`Server listening on http://localhost:${SERVER_PORT}`))
server.on('error', (err: Error) => console.error(err))

mongoConnect()