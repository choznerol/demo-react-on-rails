import React from 'react';
import ReactOnRails from 'react-on-rails';
import Classroom from './components/Classroom';
import { string, shape, arrayOf, number } from 'prop-types';

export class ConnectedClassroom extends React.Component {
  static propTypes = {
    title: string.isRequired,
    lectures: arrayOf(shape({
      id: string,
      title: string,
      coverImageUrl: string,
      path: string,
    })).isRequired,
    initActiveLectureId: string.isRequired,
  };

  state = {
    activeLectureId: this.props.initActiveLectureId,
  }

  onLectureChange = (id) => {
    console.log('onLectureChange()')
    window.history.pushState({}, `Lecture#${id}`, `/classroom/lectures/${id}`)
    this.setState({ activeLectureId: id });
  }

  /**
   * 就是 window.fetch 多加 CSRF token 到 header
   * https://shakacode.gitbooks.io/react-on-rails/content/docs/api/javascript-api.html
   */
  fetch = (url, { headers, ...restOptions }) => {
    return window.fetch(url, {
      ...restOptions,
      headers: ReactOnRails.authenticityHeaders(headers)
    });
  }

  render () {
    return (
      <Classroom
        title={this.props.title}
        lectures={this.props.lectures}
        activeLectureId={this.state.activeLectureId}
        onLectureChange={this.onLectureChange}
        fetch={this.fetch}
      />
    )
  }
}