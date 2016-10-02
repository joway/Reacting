import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rest } from '../../../common'

const { actions } = rest;

@connect((state) => ({
  v2ex: state.v2ex,
}))
class HomeContainer extends React.Component {
  constructor (props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(actions.v2ex());
  }

  render () {
    const { v2ex } = this.props
    console.log(v2ex.data)
    if (v2ex.data.length) {
      return <h1>{
        this.props.v2ex.data[0]['login']
      }</h1>;
    }
    return <h1>xxx</h1>
  }
}

HomeContainer.propTypes = {
  v2ex: PropTypes.array.isRequired,
};

HomeContainer.defaultProps = {
  v2ex: []
};

export default HomeContainer;
