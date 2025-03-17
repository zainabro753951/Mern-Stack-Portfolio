import React from "react";
import HomeDashboard from "../Pages/HomeDashboard/HomeDashboard";
import AddAbout from "../Pages/addAbout/AddAbout";
import ViewAbout from "../Pages/ViewAbout/ViewAbout";
import AddEducationPgae from "../Pages/addEducation/AddEducationPgae";
import ViewEducationPage from "../Pages/viewEducation/viewEducationPage";
import AddBlog from "../Pages/AddBlog/AddBlog";
import ViewBlogs from "../Pages/ViewBlogs/ViewBlogs";
import AddTestimonial from "../Pages/AddTestimonial/AddTestimonial";
import ViewTestmonial from "../Pages/ViewTestmonial/ViewTestmonial";
import AddProject from "../Pages/AddProject/AddProject";
import ViewProject from "../Pages/ViewProject/ViewProject";
import EditEducation from "../Pages/editEducation/EditEducation";
import EditBlogs from "../Pages/EditBlogs/EditBlogs";
import EditBlogForm from "../Pages/EditBlogFrom/EditBlogForm";
import EditTestimonial from "../Pages/editTestimonial/EditTestimonial";
import EditProject from "../Pages/EditProject/EditProject";
import EditProjectFrom from "../Pages/EditProject/EditProjectFrom";

export const adminRoutes = [
  {
    path: "/",
    element: <HomeDashboard />,
    exact: true,
  },
  {
    path: "/add-about",
    element: <AddAbout />,
  },
  {
    path: "/view-about",
    element: <ViewAbout />,
  },
  {
    path: "/add-Education",
    element: <AddEducationPgae />,
  },
  {
    path: "/view-education",
    element: <ViewEducationPage />,
  },
  {
    path: "/edit-Education/:id",
    element: <EditEducation />,
  },
  {
    path: "/add-blog",
    element: <AddBlog />,
  },
  {
    path: "/view-blog",
    element: <ViewBlogs />,
  },
  {
    path: "/add-testimonial",
    element: <AddTestimonial />,
  },
  {
    path: "/view-testimonial",
    element: <ViewTestmonial />,
  },
  {
    path: "/add-project",
    element: <AddProject />,
  },
  {
    path: "/view-project",
    element: <ViewProject />,
  },
  {
    path: "/view-project/:projectSlug/:id",
    element: <EditProject />,
  },
  {
    path: "/edit-project/:id",
    element: <EditProjectFrom />,
  },
  {
    path: "/edit-blogs/:slug/:id",
    element: <EditBlogs />,
  },
  {
    path: "/edit-blogs/blog",
    element: <EditBlogForm />,
  },
  {
    path: "/edit-testimonial/:id",
    element: <EditTestimonial />,
  },
];
