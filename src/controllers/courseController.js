import AppError from "../utils/AppError.js";
import courses from "../data/courses.js";

export const handleGetCourses = (req, res) => {
  res.status(200).json(courses);
};

export const handleGetCourse = (req, res, next) => {
  const { slug } = req.params;

  const foundCourse = courses.find((c) => c.slug == slug);

  if (!foundCourse) {
    return next(new AppError(404, "Course not found"));
  }

  res.status(200).json(foundCourse);
};
