import React, { Component } from 'react'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromUser } from 'store/selectors'
import { userSetAmount } from 'store/actions'
import { SendBtcPage } from 'components'


class SendBtcPageContainer extends Component {
  static defaultPropTypes = {
    amount: undefined,
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
  }

  handleGotoDone = () => {
    const { dispatch } = this.props
    dispatch(userSetAmount(0))
    dispatch(push('/'))
  }

  render() {
    const { amount } = this.props
    return amount !== 0 ? <SendBtcPage {...this.props} handleGotoDone={this.handleGotoDone} /> : (<h2>No Data</h2>)
  }
}


const mapStateToProps = (state = {}) => ({
  amount: fromUser.getAmount(state),
})


export default connect(mapStateToProps)(SendBtcPageContainer)
