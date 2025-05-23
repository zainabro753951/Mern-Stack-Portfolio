import { lazy } from "react";

// Lazy load all admin components
const HomeDashboard = lazy(() =>
  import("../Pages/HomeDashboard/HomeDashboard")
);
const AddAbout = lazy(() => import("../Pages/addAbout/AddAbout"));
const ViewAbout = lazy(() => import("../Pages/ViewAbout/ViewAbout"));
const AddEducationPgae = lazy(() =>
  import("../Pages/addEducation/AddEducationPgae")
);
const ViewEducationPage = lazy(() =>
  import("../Pages/viewEducation/ViewEducationPage")
);
const AddTestimonial = lazy(() =>
  import("../Pages/AddTestimonial/AddTestimonial")
);
const ViewTestmonial = lazy(() =>
  import("../Pages/ViewTestmonial/ViewTestmonial")
);
const AddProject = lazy(() => import("../Pages/AddProject/AddProject"));
const ViewProject = lazy(() => import("../Pages/ViewProject/ViewProject"));
const EditEducation = lazy(() =>
  import("../Pages/editEducation/EditEducation")
);
const EditTestimonial = lazy(() =>
  import("../Pages/editTestimonial/EditTestimonial")
);
const EditProject = lazy(() => import("../Pages/EditProject/EditProject"));
const EditProjectFrom = lazy(() =>
  import("../Pages/EditProject/EditProjectFrom")
);

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
    path: "/edit-testimonial/:id",
    element: <EditTestimonial />,
  },
];
