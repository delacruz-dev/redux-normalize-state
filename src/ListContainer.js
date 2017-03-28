import List from './List'
import { connect } from 'react-redux'
import { getFields } from './selectors'

function mapStateToProps (state, ownProps) {
  return {
    fields: getFields(state)
  }
}

export default connect(mapStateToProps)(List)
