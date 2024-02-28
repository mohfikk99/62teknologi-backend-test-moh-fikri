import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const { DataTypes } = Sequelize;

const Categories = db.define('categories', {
    id_categories: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    alias: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    },
    deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DATE,
    },
});

export default Categories;



