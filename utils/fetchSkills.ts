import { Skill } from "../typings";
import { mockSkills } from "../data/mockData";

export const fetchSkills = async() => {
    // Simulate async fetch
    await new Promise(resolve => setTimeout(resolve, 100));

    const skills: Skill[] = mockSkills;

    // console.log('fetching', skills);

    return skills;
}