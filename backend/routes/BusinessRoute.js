import express from "express";
import {getBusiness, postBusiness, updateBusiness, deleteBusiness } from "../controllers/BusinessController.js";

const router = express.Router();

router.get('/search', getBusiness);
router.post('/', postBusiness);
router.patch('/:id', updateBusiness);
router.delete('/:id', deleteBusiness);


export default router;