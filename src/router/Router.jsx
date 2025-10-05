import {
  createBrowserRouter,
} from "react-router";
import HomeLayOut from "../layout/HomeLayOut";
import ProjectDetailsLayOut from "../layout/ProjectDetailsLayOut";
import CourseManagementProject from "../compnents/CourseManagementProject";
import RoommateFinderProject from "../compnents/RoommateFinderProject";
import DevForumProject from "../compnents/DevForumProject";
import AllProject from "../compnents/AllProject";


export const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
  },
   {
    path: "/contact",
    element: <HomeLayOut />,
  },
  {
    path: '/projectDetails',
    element : <ProjectDetailsLayOut></ProjectDetailsLayOut>,
    children: [
      {
        path: 'course-management',
        element: <CourseManagementProject></CourseManagementProject>
      },
      {
        path : 'roommate-finder',
        element: <RoommateFinderProject></RoommateFinderProject>
      },
      {
        path: 'dev-forum',
        element: <DevForumProject></DevForumProject>
      },
      {
        path: 'allProject',
        element: <AllProject></AllProject>
      }
    ]
  }
]);