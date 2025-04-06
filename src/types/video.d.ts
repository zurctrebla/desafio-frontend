declare type ResponseAPIVideos = {
  items: Item[];
  page: number;
  per_page: number;
  total_pages: number;
};

declare type TVideos = {
  id: number;
  width: number;
  height: number;
  duration: number;
  userName: string;
  videoFiles: VideoFile[];
  videoPictures: VideoPicture[];
};

declare type VideoFile = {
  id: number;
  quality: string;
  file_type: string;
  width: number;
  height: number;
  fps: number;
  link: string;
  size: number;
};

declare type VideoPicture = {
  id: number;
  nr: number;
  picture: string;
};
