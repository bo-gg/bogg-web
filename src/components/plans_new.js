import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPlan } from '../actions/index'

class PlansNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPlan(props)
      .then(() => {
        this.context.router.push('/');
    });
  }
  
  render () {
    const { fields: { repository, build, sha }, handleSubmit, errors } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a Plan</h3>
        <div className={`form-group ${repository.touched && repository.invalid ? 'has-danger' : ''} `}>
          <label>Repository</label>
          <input type="text" className="form-control" {...repository} />
          <div className="text-help">
            {repository.touched ? errors.repository : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Build</label>
          <input type="text" className="form-control"  {...build} />
        </div>
        <div className="form-group">
          <label>Sha</label>
          <input type="text" className="form-control"  {...sha} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.repository) {
    errors.repository = 'Enter a repository (like "1")';
  }
  return errors;
}

export default reduxForm({
  form: 'PlanForm',
  fields: ['repository', 'build', 'sha'],
  validate
}, null, { createPlan })(PlansNew);