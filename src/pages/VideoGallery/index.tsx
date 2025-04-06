import {
  FilterBar,
  VideoCard,
  VideoList,
  Container,
  Thumbnail,
  VideoDetails,
  Author,
  Meta,
} from "./styles";

import ButtonComponent from "@components/Button";
import PlayIcon from "@assets/icons/play.svg?react";
import theme from "src/theme/theme";
import ViewToggle from "./components/ViewToggle";
import { useVideos } from "../../contexts/VideosContext";

import { useNavigate } from "react-router-dom";
import PaginationComponent from "./components/Pagination";

const VideoGallery = () => {
  const navigate = useNavigate();
  const {
    viewMode,
    setViewMode,
    currentPage,
    totalPages,
    videos,
    fetchVideos,
  } = useVideos();

  const itemsPerPage = viewMode === "grid" ? 16 : 10;

  const handleThumbnailClick = (videoId: number) => {
    navigate(`/videos/${videoId}`);
  };

  return (
    <Container>
      <FilterBar>
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      </FilterBar>

      <VideoList viewMode={viewMode}>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            viewMode={viewMode}
            onClick={() => handleThumbnailClick(video.id)}
          >
            <Thumbnail
              viewMode={viewMode}
              bgImage={video.videoPictures[0].picture}
            >
              <ButtonComponent
                icon={<PlayIcon />}
                bcColor={theme.colors.Transparent}
              />
            </Thumbnail>
            {viewMode === "list" && (
              <VideoDetails>
                <Author>{video.userName}</Author>
                <Meta>ID: {video.id}</Meta>
                <Meta>Duração:{video.duration}</Meta>
              </VideoDetails>
            )}
          </VideoCard>
        ))}
      </VideoList>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) => fetchVideos(page)}
      />
    </Container>
  );
};

export default VideoGallery;
