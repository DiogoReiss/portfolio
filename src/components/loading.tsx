import { connect } from 'react-redux';

let Loading = ({ loading }) =>
  loading ? (
    <img
      className="animate-spin"
      src="https://img.icons8.com/fluent-systems-regular/24/000000/loading-circle--v1.png"
    />
  ) : null;
const mapStateToProps = (state) => ({ loading: state.loading });
Loading = connect(mapStateToProps, null)(Loading);

export default Loading;
