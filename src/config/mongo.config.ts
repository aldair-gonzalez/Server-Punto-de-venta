import { connect } from "mongoose"

import { DB_CONNECT_URL, DB_NAME } from './config';

export const mongoConnect = () => connect(DB_CONNECT_URL, {
    dbName: DB_NAME
})