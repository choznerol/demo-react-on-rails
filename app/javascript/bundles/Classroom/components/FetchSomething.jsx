import React, { useState } from 'react';

export const FetchSomething = (props) => {
  const [url, setUrl] = useState('/lectures/2.json')
  const [optionStr, setOptionStr] = useState('{}')
  const [result, setResult] = useState('(Not fetched)')

  const onSubmit = (e) => {
    e.preventDefault();

    const p = props.fetch(url, JSON.parse(optionStr))
      .then((res) => {
        console.log(res);
        const { status, statusText } = res;
        if (res.ok) {
          res.json().then((body) => {
            setResult(`${res.status} ${res.statusText}\n\n${JSON.stringify(body, null, 4)}`);
          })
        } else {
          res.text().then((text) => {
            setResult(`${res.status} ${res.statusText}\n\n${text}`);
          })
        }
      })
      .catch(console.error)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="url">url</label>
          <input
            id="url"
            type="text"
            value={url}
            onChange={({ target: { value } }) => setUrl(value)}
          />
        </div>

        <div>
          <label htmlFor="optionStr">option (JSON)</label>
          <input
            id="optionStr"
            type="text"
            value={optionStr}
            onChange={({ target: { value } }) => setOptionStr(value)}
          />
        </div>

        <div>
          <button type="submit">
            <code>fetch({url}, {JSON.stringify(optionStr)})</code>
          </button>
        </div>

        <div>
          <label htmlFor="result">Fetch result</label>
          <textarea
            name="result"
            id="result"
            cols="60"
            rows="15"
            value={result}
            disabled
          ></textarea>
        </div>
      </form>
    </div>
  );
}
