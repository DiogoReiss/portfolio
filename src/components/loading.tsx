import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

let Loading = ({ loading }) =>
  loading ? <CircularProgress color="secondary" /> : null;
const mapStateToProps = (state) => ({ loading: state.loading });
Loading = connect(mapStateToProps, null)(Loading);

export default Loading;
