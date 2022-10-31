import express from "express";
import { home, listAllUni, listUniId, postUni, updateUni, deleteUni } from "./controller.js";
export const router = express.Router();


router.get('/', home);
router.get('/universities', listAllUni);
router.get('/universities/:id', listUniId);

router.post('/universities', postUni);

router.patch('/universities/:id', updateUni);

router.delete('/universities/:id',deleteUni);