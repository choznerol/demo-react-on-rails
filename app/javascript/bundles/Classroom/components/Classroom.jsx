import React from 'react';
import { string, shape, arrayOf, number, func } from 'prop-types';
import find from 'lodash/find';
import get from 'lodash/get';
import { FetchSomething } from './FetchSomething';

export default class Classroom extends React.Component {
  static propTypes = {
    title: string.isRequired,
    lectures: arrayOf(shape({
      id: string,
      title: string,
      coverImageUrl: string,
    })).isRequired,
    activeLectureId: string.isRequired,
    onLectureChange: func.isRequired,
    fetch: func.isRequired,
  };

  state = {
    enableAutoPlay: false,
  }

  getActiveLecture = () => find(this.props.lectures, ['id', this.props.activeLectureId])

  onAutoPlayToggled = (e) => {
    this.setState({ enableAutoPlay: e.target.checked })
  }

  render() {
    const activeLecture = this.getActiveLecture();

    return (
      <div id="classroom">
        <header>
          <h3>{this.props.title}</h3>
          <details>
            <summary>{"點擊展開 <Classroom/> 的 props"}</summary>
            <pre className="debug">
              this.props={JSON.stringify(this.props, null, 4)}
            </pre>
          </details>
        </header>

        <main>
          <div className="video-container">
            <p className="loader">載入中...</p>
            <img src={activeLecture.coverImageUrl} alt="-"/>
          </div>

          <h4>單元 {activeLecture.id}: {activeLecture.title}</h4>

          <label htmlFor="checkbox-enableAutoPlay">
            自動播放
          </label>
          <input
            id="checkbox-enableAutoPlay"
            type="checkbox"
            value={this.state.enableAutoPlay}
            onChange={this.onAutoPlayToggled}
          />

        </main>

        <aside>
          <ol>
            {this.props.lectures.map((lecture) => (
              <li
              className={this.props.activeLectureId === lecture.id ? 'active': ''}
                key={lecture.id}
              >
                <a onClick={() => this.props.onLectureChange(lecture.id)}>
                  <h4>{lecture.id} - {lecture.title}</h4>
                </a>
              </li>
            ))}
          </ol>

          <div>
            <FetchSomething fetch={this.props.fetch} />
          </div>
        </aside>
      </div>
    );
  }
}
