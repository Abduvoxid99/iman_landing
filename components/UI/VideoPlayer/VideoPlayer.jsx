import cls from "./VideoPlayer.module.scss";
export default function VideoPlayer({ source }) {
  return (
    <div className={cls.player}>
      <iframe
        className={cls.iframe}
        width="450px"
        height="270"
        src={source}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      ></iframe>
    </div>
  );
}
