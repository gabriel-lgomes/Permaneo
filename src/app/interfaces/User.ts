import { UserCourse } from "./UserCourse";

export interface User {
  id: number;
  name: string;
  courses: UserCourse[];
}
