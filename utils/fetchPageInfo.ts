import { PageInfo } from "../typings";
import { mockPageInfo } from "../data/mockData";

export const fetchPageInfo = async() => {
    // Simulate async fetch
    await new Promise(resolve => setTimeout(resolve, 100));

    const pageInfo: PageInfo = mockPageInfo;

    // console.log('fetching', pageInfo);

    return pageInfo;
}