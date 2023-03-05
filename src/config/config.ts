import { config } from "dotenv"
config()


export const SERVER_PORT         = process.env.SERVER_PORT        || 3000

export const DB_CONNECT_URL         = process.env.DB_CONNECT_URL     || "error"
export const DB_NAME                = process.env.DB_NAME            || "ecommerce"
export const DB_PRODUCTS_NAME       = process.env.DB_PRODUCTS_NAME   || "products"
export const DB_PROVIDERS_NAME      = process.env.DB_PROVIDERS_NAME  || "providers"
export const DB_CATEGORIES_NAME     = process.env.DB_CATEGORIES_NAME || "categories"
export const DB_USERS_NAME          = process.env.DB_USERS_NAME      || "users"