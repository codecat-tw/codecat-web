<div align="center">
  <a href="https://www.codecat.tw">
    <picture>
      <img alt="logo" src="https://www.codecat.tw/img/logo.jpg" height="64">
    </picture>
  </a>
  <h1>codecat-tw 程式貓社群官網</h1>

<a href="https://github.com/codecat-tw/codecat-web/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/badge/license-MIT-green"></a>
<a href="https://github.com/codecat-tw/codecat-web/blob/main/package.json"><img alt="version" src="https://img.shields.io/badge/docusaurus-3.7-blue"></a>
<a href="https://github.com/codecat-tw/codecat-web/blob/main/package.json"><img alt="version" src="https://img.shields.io/badge/React-19-blue"></a>

</div>

## 專案介紹

這是一個基於 Docusaurus 的開源網站，專案同步作為程式貓社群的官方網站。專案採用 MIT 開源，因此你可以使用這項專案來做任何你所想要的事，只需要標註來源出處即可。如果你是一個程式新手，正在研究如何建立一個實際能夠使用的網站，我們認為這個專案是很好的起點。

我們推薦你能夠做的事:
- 閱讀原始碼來了解網站架構
- 複製我們的「程式貓科技週刊」並以標註來源的方式轉發
- 拉取我們的整個網站，並將內容替換成你所需要的

做為以科技教育為核心的社群，如果你在使用上遇到任何困難也都可以直接聯繫我們，團隊將免費的回答您的問題。

## 網站架構

本專案的網站是基於 Docusaurus 架構的靜態網站生成器所建置。Docusaurus 是一個專為技術文件設計的框架，支援 Markdown 撰寫，且具備靈活的插件擴展能力。我們在專案中實作與運用了以下的功能，你能夠直接點選連結來查看對應的檔案。

- [網站首頁](./src/pages/index.js): 提供社群的簡介及最新動態，並放置熱門內容。
- [科技週刊](./docs): 放置每週發佈於官網的「程式貓科技週刊」，該週刊為科技類週刊的領導品牌。
- [公告系統](./blog): 用於放置活動、公告、宣傳等雜項的文章檔案。
- [社群介紹](./src/pages/about.md): 透過可自訂的網頁你可以提供長住的資訊頁面，如我們撰寫的「關於我們」、「服務條款」等頁面。

## 製作你的網站

如果你想要基於我們的專案來建立自己的網站，以下是簡單的步驟：

1. 拉取專案: 透過 git clone 指令將程式貓社群的網站專案拉取到本地。
2. 安裝依賴: 使用 npm install 來安裝專案所需的依賴項。
3. 修改內容: 打開 src 資料夾，將裡面的 Markdown 文件及靜態資源替換成你自己的內容。
4. 部署網站: 當你完成所有修改後，即可部屬到像是 GitHub Pages、Netlify 或 Vercel 這樣的伺服器上。

程式貓社群提供了完整的技術支援，如果你在建置過程中遇到任何問題，都可以透過社群平台與我們聯繫，社群成員會熱心協助你解決。

## 加入我們

「程式貓」是由一群喜愛科技新知的高中生所經營，每週固定分享一則精選科技週刊，除此之外還會不定期分享有趣的小專案和議題討論。歡迎任何有興趣的人向我們詢問細節，並加入我們的大家庭，一起創建下一個奇蹟。
