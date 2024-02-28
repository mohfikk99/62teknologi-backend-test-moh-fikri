import Business from "../models/BusinessModel.js";
import Categories from "../models/CategoriesModel.js";
import {Op} from "sequelize"

export const getBusiness = async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || null;
    const name = req.query.name || "";
    const price = req.query.price || "";
    const categories = req.query.categories || "";
    const offset = limit * page;
    
    try {
        const business = await Business.findAll({
            where:{
                [Op.and]: [{name:{
                    [Op.like]: '%'+name+'%'
                }}, {price:{
                    [Op.like]: '%'+price+'%'
                }}]
            },
            include: [{
                model: Categories,
                where: {
                    [Op.or]: [{alias:{
                        [Op.like]: '%'+categories+'%'
                    }}, {title:{
                        [Op.like]: '%'+categories+'%'
                    }}]
                }
            }],
            offset: offset,
            limit: limit
        });
        res.json({businesses: business});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const postBusiness = async (req, res) => {
    try {
        const postBusiness = await Business.create(req.body);
        res.status(201).json(postBusiness);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateBusiness = async (req, res) => {
    try {
        await Business.update(req.body, {
            where: {
                id_business: req.params.id
            }
        });
        res.json({ "message": "Update Success" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteBusiness = async (req, res) => {
    try {
        await Business.destroy({
            where: {
                id_business: req.params.id
            }
        });
        res.json({ "message": "Deleted Success" });
    } catch (error) {
        res.json({ message: error.message });
    }
}
