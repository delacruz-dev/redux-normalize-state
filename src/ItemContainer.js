import Item from './Item'
import { connect } from 'react-redux'
import { getTitle, getDescription, getFieldsInGroup } from './selectors'

function mapStateToProps(state, ownProps) {
  return {
    title: getTitle(state, ownProps.id),
    description: getDescription(state, ownProps.id),
    fields: getFieldsInGroup(state, ownProps.id)
  }
}

export default connect(mapStateToProps)(Item)
