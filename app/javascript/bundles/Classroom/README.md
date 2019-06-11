# `<Classroom>`
A full feature React.js component running on RoR or SPA
<img width="1132" alt="圖片" src="https://user-images.githubusercontent.com/12410942/59246059-bf380200-8c4d-11e9-850a-a063a0158d1f.png">


## Feature

- [x] 已實驗
- [ ] 未實驗

---

- [x] 可以直接 npm install classroom 更方便模組化，而不是得起另一個 server 串 API
- [x] 相較於以 RESTful API 為介面，以 propTypes 為介面更有彈性也更快
- [x] Controller 直通 React component prop 👉 <MyComp props={Course.find(id: 1)} />
  - [x] 省下所有 dispatchGetXXX 的 code，要什麼東西直接從 prop 拿
  - [x] dispatchPostXXX 可選擇性保留，提高互動性，rails 可直接支援 return JSON
- [x] HMR（使用我們熟悉的 webpack-dev-server）
- [x] 不需要多維護一個服務
- [x] Classroom 不用處理 authentication/authorization
- [ ] `<a>` 與 Turbolink 共生（90% sure）
- [ ] SSR（以 ReactOnRails 為例是 `prerender: true`） (80% sure)
- [ ] Please point out anything I missed？


## TODO（如果決定採用 `<Classroom/>`  方案）

- [ ] 抉擇 `webpacker` or `reactjs/react-rails` or `ReactOnRails`
- [ ] 把這邊的 Classroom.jsx publish 到 npm，改用 `npm install @hahow/classroom`

## Props
```
title: string.isRequired,
lectures: arrayOf(shape({
  id: string,
  title: string,
  coverImageUrl: string,
  path: string,
})).isRequired,
activeLectureId: string.isRequired,
```
