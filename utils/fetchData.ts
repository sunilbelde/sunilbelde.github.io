import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import {
  mockPageInfo,
  mockExperiences,
  mockSkills,
  mockProjects,
  mockSocials,
} from "../data/mockData";

export const fetchPageInfo = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const pageInfo: PageInfo = mockPageInfo;
  return pageInfo;
};

export const fetchExperiences = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const experiences: Experience[] = mockExperiences;
  return experiences;
};

export const fetchSkills = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const skills: Skill[] = mockSkills;
  return skills;
};

export const fetchProjects = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const projects: Project[] = mockProjects;
  return projects;
};

export const fetchSocials = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const socials: Social[] = mockSocials;
  return socials;
};
