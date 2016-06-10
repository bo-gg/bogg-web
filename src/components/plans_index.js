import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlans } from '../actions/index';
import { Link } from 'react-router';

class PlansIndex extends Component {
  componentWillMount() {
    this.props.fetchPlans();
  }
  
  renderPlans() {
    console.log(this.props.plans);
    return this.props.plans.map((plan) => {
      return (
        <li className="list-group-item" key={plan.id}>
          {plan.id}
        </li>
      )
    });
  }
  
  render() {
    return (
      <div>
        <Link to="new" className="btn btn-primary">Create new</Link>
        Plans Index
        <h3>Plans</h3>
        <ul className="list-group">
          {this.renderPlans()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state!');
  console.log(state);
  return { plans: state.plans.all };
}

export default connect(mapStateToProps, { fetchPlans })(PlansIndex);
