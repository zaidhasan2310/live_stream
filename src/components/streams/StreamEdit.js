import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);
  const onSubmit = (formValues) => {
    props.editStream(props.match.params.id, formValues);
  };
  return (
    <div>
      <h3>
        Edit a Stream
        <StreamForm
          onSubmit={onSubmit}
          initialValues={_.pick(props.stream, "title", "description")}
        />
      </h3>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
