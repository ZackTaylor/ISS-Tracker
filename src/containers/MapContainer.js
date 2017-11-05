import { connect } from 'react-redux';
import Map from '../components/Map';
import { bindActionCreators } from 'redux';

import { updateIssPosition } from '../actions';

function mapStateToProps({ iss }) {
  return { iss };
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateIssPosition }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
