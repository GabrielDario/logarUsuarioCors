import { Sequelize } from "sequelize"

const banco = process.env.DATABASE
const sequelize = new Sequelize(banco)

export default sequelize