import PropTypes from 'prop-types';
import React from 'react';

export default class HelloWorld extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  render() {
    return (
      <div>
        <h3>
          {this.props.title}
        </h3>

        <pre className="debug">
          this.props={JSON.stringify(this.props, null, 4)}
        </pre>
      </div>
    );
  }
}
