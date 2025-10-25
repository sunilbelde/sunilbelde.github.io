import { Project } from "../typings";
import { mockProjects } from "../data/mockData";

export const fetchProjects = async() => {
    // Simulate async fetch
    await new Promise(resolve => setTimeout(resolve, 100));

    const projects: Project[] = mockProjects;

    // console.log('fetching', projects);

    return projects;
}