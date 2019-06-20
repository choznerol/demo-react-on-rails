import React from 'react';
import find from 'lodash/find';
import { string, shape, arrayOf, number } from 'prop-types';

export default class Classroom extends React.Component {
  static propTypes = {
    title: string.isRequired,
    lectures: arrayOf(shape({
      id: string,
      title: string,
      coverImageUrl: string,
      path: string,
    })).isRequired,
    activeLectureId: string.isRequired,
  };

  getActiveLecture = () => find(this.props.lectures, ['id', this.props.activeLectureId])

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
        </main>

        <aside>
          <ol>
            {this.props.lectures.map((lecture) => (
              <li
                className={this.props.activeLectureId === lecture.id ? 'active': ''}
                key={lecture.id}
              >
                <a href={lecture.path}>
                  <h4>{lecture.id} - {lecture.title}</h4>
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    );
  }
}
