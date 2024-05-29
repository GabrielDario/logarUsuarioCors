import sequelize from "../database.js";
import { DataTypes } from "sequelize";

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    senha : {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    }
})

export  { Usuario }