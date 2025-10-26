import { Social } from "../typings";
import { mockSocials } from "../data/mockData";

export const fetchSocials = async () => {
  // Simulate async fetch
  await new Promise(resolve => setTimeout(resolve, 100));

  const socials: Social[] = mockSocials;

  // console.log('fetching', socials);

  return socials;
};
