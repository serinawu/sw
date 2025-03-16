<script>
export default {
  name: "Projects"
}
</script>

<template>
  <section id="projects" class="projects scroll-mt-header">
    <div class="section-content w-full m-auto">
      <h2 class="text-2xl text-center w-full mb-2 text-cyan-500">作品集</h2>
      <h4 class="text-sm text-gray-500 text-center w-full mb-8">專注於技術與設計整合，提升產品的易用性與視覺美感。</h4>
      <div class="grid grid-cols-3 gap-5 mx-48">
        <div class="project-item group border border-primary rounded-xl relative overflow-hidden p-5 cursor-pointer">
          <img
              src="/SportMatch.png"
              alt="SportMatch 運動配對網"
              class="rounded-lg w-full transition-transform  group-hover:scale-105"
          />
          <span class="n-badge inline-flex items-center rounded-md text-xs px-2 py-1 gap-1 bg-cyan-200  text-cyan-500 border-1 border-cyan-900  dark:bg-primary-400 dark:bg-opacity-20 dark:text-primary-400 mt-4">合作專案</span>
          <h3 class="text-md font-bold mt-2 text-slate-700 group-hover:text-cyan-500">SportMatch 運動配對網</h3>
          <p class="info text-base text-gray-800 dark:text-gray-400 mt-1">此專案為資展課程團體專題，採用 ASP.NET Core 開發後端 API，並搭配 SQL 建立資料庫架構。我負責 前後端整合開發，涵蓋 會員中心、場地介紹、聯絡我們 等功能，透過統整前後端開發，我確保系統架構完整、資料流順暢，並提升整體開發效率與可維護性。</p>
          <div class="flex items-center mt-4 text-sm">
            <a href="https://github.com/1Serina1" rel="noopener noreferrer" target="_blank" class="flex items-center focus:outline-none" tabindex="-1">
              <img
                  src="https://avatars.githubusercontent.com/1Serina1"
                  alt="Serina Wu"
                  class="avatar w-8 h-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-800 transition-transform duration-300 cursor-pointer hover:border-primary dark:hover:border-primary"
              />
            </a>
            <time class="ml-2">Mar 31, 2025</time>
          </div>
        </div>
        <div class="project-item border border-primary rounded-xl group relative overflow-hidden p-5 cursor-pointer">
          <img
              src="/TAI-Zhi.png"
              alt="TAI-Zhi 旅遊雜誌"
              class="rounded-lg w-full transition-transform  group-hover:scale-105"
          />
          <span class="n-badge inline-flex items-center rounded-md text-xs px-2 py-1 gap-1 bg-cyan-200  text-cyan-500 border-1 border-cyan-900  dark:bg-primary-400 dark:bg-opacity-20 dark:text-primary-400 mt-4">獨立製作</span>
          <h3 class="text-md font-bold mt-2 text-slate-700 group-hover:text-cyan-500">TAI-Zhi 旅遊雜誌</h3>
          <p class="info text-base text-gray-800 dark:text-gray-400 mt-1">打造虛擬旅遊雜誌品牌官網，使用 原生 HTML/CSS、SCSS 搭配 Bootstrap 進行風格化調整與響應式設計。網站提供 套裝行程購物車 與 行程管理功能，並整合 歷史天氣數據與貨幣匯率 API，根據氣候趨勢與即時匯率提供旅遊建議，幫助用戶規劃更完善的行程。</p>
          <div class="flex items-center mt-4 text-sm">
            <a href="https://github.com/SerinaWu" rel="noopener noreferrer" target="_blank" class="flex items-center focus:outline-none" tabindex="-1">
              <img
                  src="https://avatars.githubusercontent.com/SerinaWu"
                  alt="Serina Wu"
                  class="avatar w-8 h-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-800 transition-transform duration-300 cursor-pointer hover:border-primary dark:hover:border-primary"
              />
            </a>
            <time class="ml-2">Dec 17, 2024</time>
          </div>
        </div>
        <div class="project-item border border-primary rounded-xl group relative overflow-hidden p-5 cursor-pointer">
          <img
              src="/vue_backstage.png"
              alt="Vue3 後台專案"
              class="rounded-lg w-full transition-transform  group-hover:scale-105"
          />
          <span class="n-badge inline-flex items-center rounded-md text-xs px-2 py-1 gap-1 bg-cyan-200  text-cyan-500 border-1 border-cyan-900  dark:bg-primary-400 dark:bg-opacity-20 dark:text-primary-400 mt-4">獨立製作</span>
          <h3 class="text-md font-bold mt-2 text-slate-700 group-hover:text-cyan-500">後台管理專案</h3>
          <p class="info text-base text-gray-800 dark:text-gray-400 mt-1">使用VUE3搭配Element UI搭建後台管理系統，並使用ECharts將數據視覺化呈現；搭配Mock.js獲取隨機token進行簡易登入及帳號權限機制，使用Mock api獲取隨機數據生成會員表單資料。透過此專案熟悉了解Vue架構的運作及實作上的使用方式。</p>
          <div class="flex items-center mt-4 text-sm">
            <a href="https://github.com/SerinaWu" rel="noopener noreferrer" target="_blank" class="flex items-center focus:outline-none" tabindex="-1">
              <img
                  src="https://avatars.githubusercontent.com/SerinaWu"
                  alt="Serina Wu"
                  class="avatar w-8 h-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-800 transition-transform duration-300 cursor-pointer hover:border-primary dark:hover:border-primary"
              />
            </a>
            <time class="ml-2">Apr 24, 2024</time>
          </div>
        </div>
        <div class="project-item border border-primary rounded-xl group relative overflow-hidden p-5 cursor-pointer">
          <img
              src="/weather.png"
              alt="天氣API"
              class="rounded-lg w-full transition-transform  group-hover:scale-105"
          />
          <span class="n-badge inline-flex items-center rounded-md text-xs px-2 py-1 gap-1 bg-cyan-200  text-cyan-500 border-1 border-cyan-900  dark:bg-primary-400 dark:bg-opacity-20 dark:text-primary-400 mt-4">獨立製作</span>
          <h3 class="text-md font-bold mt-2 text-slate-700 group-hover:text-cyan-500">天氣API串接練習</h3>
          <p class="info text-base text-gray-800 dark:text-gray-400 mt-1">使用JavaScript串接 Open Weather API，實現當前定位、搜尋地理位置顯示該區域當下的各種氣候細節以及未來五日的氣候資訊。其中也搭配POSTMAN進行測試API請求狀態。</p>
          <div class="flex items-center mt-4 text-sm">
            <a href="https://github.com/SerinaWu" rel="noopener noreferrer" target="_blank" class="flex items-center focus:outline-none" tabindex="-1">
              <img
                  src="https://avatars.githubusercontent.com/SerinaWu"
                  alt="Serina Wu"
                  class="avatar w-8 h-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-800 transition-transform duration-300 cursor-pointer hover:border-primary dark:hover:border-primary"
              />
            </a>
            <time class="ml-2">Apr 24, 2024</time>
          </div>
        </div>
        <div class="project-item border border-primary rounded-xl group relative overflow-hidden p-5 cursor-pointer">
          <img
              src="/movie_TMDB.png"
              alt="電影平台-TMDB"
              class="rounded-lg w-full transition-transform  group-hover:scale-105"
          />
          <span class="n-badge inline-flex items-center rounded-md text-xs px-2 py-1 gap-1 bg-cyan-200  text-cyan-500 border-1 border-cyan-900  dark:bg-primary-400 dark:bg-opacity-20 dark:text-primary-400 mt-4">獨立製作</span>
          <h3 class="text-md font-bold mt-2 text-slate-700 group-hover:text-cyan-500">電影平台-TMDB API</h3>
          <p class="info text-base text-gray-800 dark:text-gray-400 mt-1">運用 TMDB API獲取簡易近期熱門電影、影集相關簡易資訊，如：評分、語言、電影視覺..等。</p>
          <div class="flex items-center mt-4 text-sm">
            <a href="https://github.com/SerinaWu" rel="noopener noreferrer" target="_blank" class="flex items-center focus:outline-none" tabindex="-1">
              <img
                  src="https://avatars.githubusercontent.com/SerinaWu"
                  alt="Serina Wu"
                  class="avatar w-8 h-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-800 transition-transform duration-300 cursor-pointer hover:border-primary dark:hover:border-primary"
              />
            </a>
            <time class="ml-2">Feb 26, 2024</time>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>