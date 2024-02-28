import Categories from "../models/CategoriesModel.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const postCategories = async (req, res) => {
    try {
        const postCategories = await Categories.create(req.body);
        res.status(201).json(postCategories);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateCategories = async (req, res) => {
    try {
        await Categories.update(req.body, {
            where: {
                id_categories: req.params.id
            }
        });
        res.json({ "message": "Update Success" });
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const deleteCategories = async (req, res) => {
    try {
        await Categories.destroy({
            where: {
                id_categories: req.params.id
            }
        });
        res.json({ "message": "Deleted Success" });
    } catch (error) {
        res.json({ message: error.message });
    }
}
