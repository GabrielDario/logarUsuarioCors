import sequelize from "../database.js";
import { DataTypes } from "sequelize";

const Tarefa = sequelize.define('Tarefa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING
    },
    idUsuario : {
        type: DataTypes.INTEGER,
    },
    completed: {
        type: DataTypes.BOOLEAN
    }
})

export  { Tarefa }