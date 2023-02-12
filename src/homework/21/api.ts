import axios from "axios";
import mockup from "./mockup.json";

const REACT_APP_YOUTUBE_API_KEY = "AIzaSyBXCxK8OhZQdHbEZhRT-xZA3JRXOvz5nl8";

const axiosClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: REACT_APP_YOUTUBE_API_KEY,
  },
});

interface ISearchItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    channelId?: string;
    videoId?: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      high: { url: string };
      medium: { url: string };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export interface ISearchedResult {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ISearchItem[];
}
let countFetching = 0;
export const search = (keyword: string): Promise<ISearchedResult> => {
  const mockupData = new Promise<ISearchedResult>((resolve) => {
    resolve(mockup);
  });

  if (keyword === "") return mockupData;

  return axiosClient
    .get(`/search?part=snippet&maxResults=10&q=${keyword}`)
    .then((result) => result.data)
    .catch((error) => {
      console.log("search에러발생", error);
      return mockupData;
    })
    .finally(() => {
      console.log(`검색요청: ${keyword} / 요청수: ${++countFetching}`);
    });
};
