import React, { useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const Main = () => {
  const [recordingChoice, setRecordingChoice] = useState({
    videoChoice: false,
    audioChoice: false,
    screenChoice: false,
  });

  const videoRef = useRef(null);

  const { videoChoice, audioChoice, screenChoice } = recordingChoice;

  const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
    useReactMediaRecorder({
      video: videoChoice,
      audio: audioChoice,
      screen: screenChoice,
    });

  const mediaHandler = (value) => {
    if (value === "video") {
      setRecordingChoice({
        videoChoice: true,
        audioChoice: false,
        screenChoice: false,
      });
    } else if (value === "audio") {
      setRecordingChoice({
        audioChoice: true,
        videoChoice: false,
        screenChoice: false,
      });
    } else if (value === "screen") {
      setRecordingChoice({
        screenChoice: true,
        videoChoice: false,
        audioChoice: false,
      });
    } else if (value === "video-audio") {
      setRecordingChoice({
        audioChoice: true,
        videoChoice: true,
        screenChoice: false,
      });
    } else if (value == "screen-audio") {
      setRecordingChoice({
        audioChoice: true,
        videoChoice: false,
        screenChoice: true,
      });
    }
  };

  useEffect(() => {
    if (previewStream && videoRef.current) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);

  return (
    <main className="flex flex-col md:flex-row items-center justify-between">
      <div className="border-slate-50 w-full md:w-[25%] m-8">
        <h2 className="text-2xl ml-5 font-medium mb-4 md:mb-0">
          Recorded Item Show here ⏺️
        </h2>

        <div>
          {mediaBlobUrl && (
            <div className="flex flex-col items-center">
              <video
                src={mediaBlobUrl}
                controls
                autoPlay
                loop
                className="w-full md:w-auto h-auto md:h-[240px] mt-6 mb-4"
              />
              <a
                href={mediaBlobUrl}
                download
                className="bg-purple-700 p-2 text-white mt-4 font-serif rounded-md inline-block text-center"
              >
                Download
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#fcffff] flex flex-col h-auto md:h-[89.5vh] w-full md:w-[75%]">
        <div className="m-6 flex flex-col items-center">
          <h3 className="font-bold text-xl">RECORDING STATUS: {status}</h3>
          <span className="m-2 font-serif text-xl">Preview 👇</span>

          {status === "recording" ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              className="w-[90%] md:w-[490px] h-[278px] relative top-4 border-dashed border-2 border-black bg-slate-800 m-auto"
            />
          ) : (
            <div className="w-[90%] md:w-[490px] h-[278px] relative top-4 border-dashed border-2 m-auto border-black"></div>
          )}
        </div>

        <div className="flex flex-col items-center md:flex-row gap-3 justify-center mt-4 font-serif text-xl">
          <label>
            <input
              type="radio"
              name="media-option"
              value="audio"
              onChange={(e) => mediaHandler(e.target.value)}
            />{" "}
            Audio
          </label>
          <label>
            <input
              type="radio"
              name="media-option"
              value="screen"
              onChange={(e) => mediaHandler(e.target.value)}
            />{" "}
            Screen
          </label>
          <label>
            <input
              type="radio"
              name="media-option"
              value="video"
              onChange={(e) => mediaHandler(e.target.value)}
            />{" "}
            Video
          </label>
          <label>
            <input
              type="radio"
              name="media-option"
              value="video-audio"
              onChange={(e) => mediaHandler(e.target.value)}
            />{" "}
            Video + Audio
          </label>
          <label>
            <input
              type="radio"
              name="media-option"
              value="screen-audio"
              onChange={(e) => mediaHandler(e.target.value)}
            />{" "}
            Screen + Audio
          </label>
        </div>

        <div className="flex items-center mt-4 justify-center font-serif">
          <button
            onClick={startRecording}
            className="m-2 p-2 bg-green-600 hover:bg-green-800 rounded-md text-yellow-50"
          >
            Start Recording
          </button>
          <button
            onClick={stopRecording}
            className="bg-red-600 hover:bg-red-700 p-2 rounded-md text-yellow-50"
          >
            Stop Recording
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
