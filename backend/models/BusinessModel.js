import { Sequelize } from "sequelize";
import db from "../config/Database.js"
import Categories from "./CategoriesModel.js"

const { DataTypes } = Sequelize;

const Business = db.define('business', {
    id_business: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_categories: {
        type: DataTypes.INTEGER
    },
    alias: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    is_closed: {
        type: DataTypes.BOOLEAN
    },
    url: {
        type: DataTypes.STRING
    },
    review_count: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.STRING
    },
    coordinates: {
        type: DataTypes.STRING
    },
    transactions: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    display_phone: {
        type: DataTypes.STRING
    },
    distance: {
        type: DataTypes.INTEGER
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

// join tabel categories
Business.belongsTo(Categories, {
    foreignKey: 'id_categories'
});

export default Business;



