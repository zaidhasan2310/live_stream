import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);
  const handleDeleteClick = () => {
    props.deleteStream(props.match.params.id);
  };
  const renderActions = () => {
    return (
      <>
        <button className="ui button" onClick={() => history.push("/")}>
          Cancel
        </button>
        <button className="ui primary button" onClick={handleDeleteClick}>
          Delete
        </button>
      </>
    );
  };

  return (
    <Modal
      title="Delete Stream"
      content={`Are you sure you want to delete stream with title - ${
        props.stream && props.stream.title
      }?`}
      actions={renderActions()}
      onDismiss={() => history.push("/")}
    />
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
