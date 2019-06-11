# `<Classroom>`
A full feature React.js component running on RoR or SPA

## Feature

- [x] 已實驗
- [ ] 未實驗

---

- [x] 相較於以 RESTful API 為介面，可以直接 npm install classroom 更方便模組化
- [x] Controller 直通 React component prop 👉 <MyComp props={Course.find(id: 1)} />
  - [x] 省下所有 dispatchGetXXX 的 code，要什麼東西直接從 prop 拿
  - [x] dispatchPostXXX 可選擇性保留，提高互動性，rails 可直接支援 return JSON
- [x] HMR（使用我們熟悉的 webpack-dev-server）
- [x] 不需要多維護一個服務
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