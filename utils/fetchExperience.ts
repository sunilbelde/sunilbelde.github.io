import { Experience } from "../typings";
import { mockExperiences } from "../data/mockData";

export const fetchExperiences = async() => {
    // Simulate async fetch
    await new Promise(resolve => setTimeout(resolve, 100));

    const experiences: Experience[] = mockExperiences;

    // console.log('fetching', experiences);

    return experiences;
}