import { connect } from 'react-redux';
import Map from '../components/Map';
import { bindActionCreators } from 'redux';

import { updateIssPosition, toggleLock } from '../actions';

function mapStateToProps({ iss }) {
  return { iss };
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateIssPosition, toggleLock }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
