import { Router } from "express";
import * as pagerController from "../controllers/pagerController";
import * as searchController from "../controllers/searchController";


const router = Router()

router.get('/',pagerController.home)
router.get('/dogs',pagerController.dogs)
router.get('/cats',pagerController.cats)
router.get('/fishes',pagerController.fishes)

router.get('/search',searchController.search)

export default router