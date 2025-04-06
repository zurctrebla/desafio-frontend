import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PlayIcon from "@assets/icons/play.svg?react";
import ButtonComponent from "@components/Button";
import { useVideos } from "../../contexts/VideosContext";
import { Container, Thumbnail, Details } from "./styles";

const VideoPage: React.FC = () => {
  const { id } = useParams();
  const { videos } = useVideos();

  const [currentVideo, setCurrentVideo] = React.useState<null | TVideos>(null);
  const [currentVideoFile, setCurrentVideoFile] =
    React.useState<null | VideoFile>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = id ? videos.find((video) => video.id === +id) : null;
    const videoFile = video?.videoFiles.find((file) =>
      isMobile ? file.quality === "sd" : file.quality === "hd"
    );
    video && setCurrentVideo(video);
    videoFile && setCurrentVideoFile(videoFile);
  }, [id, videos, isMobile]);

  const handlePlay = () => {
    setShowVideo(true);
  };

  if (!currentVideo || !currentVideoFile) return <div>Video not found</div>;

  return (
    <Container>
      {showVideo ? (
        <video
          controls
          muted
          autoPlay
          playsInline
          poster={currentVideo.videoPictures[0].picture}
          style={{
            width: "100%",
            aspectRatio: "16/9",
            height: "auto",
            objectFit: "cover",
          }}
        >
          <source
            src={currentVideoFile.link}
            type={currentVideoFile.file_type}
          />
          Seu navegador não suporta o elemento <code>video</code>.
        </video>
      ) : (
        <Thumbnail bgImage={currentVideo.videoPictures[0].picture}>
          <ButtonComponent
            icon={<PlayIcon />}
            bcColor="transparent"
            onClick={handlePlay}
          />
        </Thumbnail>
      )}
      <Details>
        <h2>{currentVideo.userName}</h2>
        <p>
          <strong>ID:</strong> {currentVideo.id}
        </p>
        <p>
          <strong>Resolução:</strong> {currentVideoFile.quality}
        </p>
        <p>
          <strong>Duração:</strong> {currentVideo.duration}
        </p>
      </Details>
    </Container>
  );
};

export default VideoPage;
