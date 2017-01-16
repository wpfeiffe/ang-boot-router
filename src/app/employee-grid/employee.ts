import {Department} from "./department";
export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    active: boolean;
    startDate: string;
    title: string;
    department: Department;
}