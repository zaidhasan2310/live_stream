import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);
  return (
    <div>
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
