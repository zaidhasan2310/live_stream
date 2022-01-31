import React, { useEffect, useRef } from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
    const flvPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${props.match.params.id}.flv`,
    });
    flvPlayer.attachMediaElement(videoRef.current);
    flvPlayer.load();
    return () => {
      flvPlayer.destroy();
    };
  }, []);
  const videoRef = useRef(null);
  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
      <h1>{props.stream && props.stream.title}</h1>
      <h5>{props.stream && props.stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
