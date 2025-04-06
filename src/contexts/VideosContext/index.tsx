import React, { useEffect } from "react";
import { useFilter } from "../FilterContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export interface IVideosContext {
  videos: TVideos[];
  viewMode: "list" | "grid";
  setViewMode: React.Dispatch<React.SetStateAction<"list" | "grid">>;
  fetchVideos: (page: number) => Promise<void>;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VideosContext = React.createContext<IVideosContext>({
  videos: [],
  viewMode: "grid",
  setViewMode: () => {},
  fetchVideos: async () => {},
  currentPage: 1,
  totalPages: 0,
  loading: true,
  setLoading: () => {},
});

export const useVideos = () => React.useContext(VideosContext);

export const VideosProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [videos, setVideos] = React.useState<TVideos[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [viewMode, setViewMode] = React.useState<"list" | "grid">("grid");
  const { searchParam, filters } = useFilter();

  const urlBuilder = (page: number) => {
    const quantityPerPage = viewMode === "grid" ? 16 : 10;
    const searchQuery = searchParam || "nature";
    const filterResolution = filters.resolutions?.length
      ? `&size=${filters.resolutions}`
      : "";
    return `${API_BASE_URL}?query=${searchQuery}&per_page=${quantityPerPage}&page=${page}${filterResolution}`;
  };

  const fetchVideos = async (page: number = 1) => {
    setLoading(true);
    const url = urlBuilder(page);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: API_TOKEN,
      },
    });

    const data: ResponseAPIVideos = await response.json();

    if (!data) {
      setLoading(false);
      return;
    }

    setTotalPages(data.total_pages);
    setVideos(data.items);
    setCurrentPage(data.page);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos(1);
  }, [viewMode]);

  return (
    <VideosContext.Provider
      value={{
        videos,
        loading,
        setLoading,
        viewMode,
        setViewMode,
        totalPages,
        currentPage,
        fetchVideos,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
