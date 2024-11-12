import { Router } from "express";
import {
  handleGetCourse,
  handleGetCourses,
} from "../controllers/courseController.js";

const router = Router();

router.route("/").get(handleGetCourses);

router.route("/:slug").get(handleGetCourse);

export default router;
