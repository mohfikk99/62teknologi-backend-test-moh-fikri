import express from "express";
import {getCategories, postCategories, updateCategories, deleteCategories } from "../controllers/CategoriesController.js";

const router = express.Router();

router.get('/', getCategories);
router.post('/', postCategories);
router.patch('/:id', updateCategories);
router.delete('/:id', deleteCategories);


export default router;