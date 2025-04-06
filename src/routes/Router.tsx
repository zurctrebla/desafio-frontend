import { Routes, Route } from "react-router-dom";
import VideoGallery from "../pages/VideoGallery";
import VideoPage from "@pages/VideoPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<VideoGallery />} />
      <Route path="/videos/:id" element={<VideoPage />} />
    </Routes>
  );
};

export default Router;
