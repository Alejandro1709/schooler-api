import courses from "../data/courses.js";

export const handleGetCourses = (req, res) => {
  res.status(200).json(courses);
};

export const handleGetCourse = (req, res) => {
  const { slug } = req.params;

  const foundCourse = courses.find((c) => c.slug == slug);

  if (!foundCourse) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.status(200).json(foundCourse);
};
