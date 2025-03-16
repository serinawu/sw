<script setup lang="js">
import { Icon } from '@iconify/vue'
</script>

<template>
  <section id="techStack" class="techStack  scroll-mt-header">
    <div class="section-content w-full m-auto">
      <h2 class="text-2xl text-center text-cyan-500 w-full mt-8 mb-4">技術亮點</h2>
      <h4 class="text-sm text-gray-500 text-center w-full mt-4">擁有前後端開發與 UI 設計經驗，致力於打造直覺、高效的 Web 應用。善於將技術與設計整合，提升使用者體驗優化產品</h4>
      <div class="grid grid-cols-4 gap-5 my-48 mx-48">
        <div class="skill flex">
          <span class="icon w-8 h-8 bg-cyan-50 flex-shrink-0 shadow-sm rounded-lg me-4">
            <Icon icon="ic:twotone-html" width="25" height="25" class="text-cyan-500 m-auto mt-1"/>
          </span>
          <div class="content-group ms-4">
            <p class="skill-title font-bold text-md mb-2 text-slate-500">前端開發經驗</p>
            <p class="skill-info text-sm text-pretty text-gray-700">Vue.js / Bootstrap / Tailwind CSS</p>
            <p class="skill-info text-sm text-pretty text-gray-700">使用 Vue3 和 Nuxt.js 開發 SPA，熟悉 Composition API</p>
            <p class="skill-info text-sm text-pretty text-gray-700">熟悉 localStorage、SessionStorage，應用於夜間模式切換</p>
          </div>
        </div>
        <div class="skill flex">
          <span class="icon w-8 h-8 bg-cyan-50 flex-shrink-0 shadow-sm rounded-lg flex align-items-center justify-center">
            <Icon icon="simple-icons:csharp" width="25" height="25" class="text-cyan-500 m-auto"/>
          </span>
          <div class="content-group ms-4">
            <p class="skill-title font-bold text-md mb-2 text-slate-500">後端開發經驗</p>
            <p class="skill-info text-sm text-pretty text-gray-700"> ASP.NET MVC + SQL Server | Node.js + Express.js</p>
            <p class="skill-info text-sm text-pretty text-gray-700">使用 ASP.NET MVC 開發企業網站，會運用 C# + .NET</p>
            <p class="skill-info text-sm text-pretty text-gray-700">RESTful API 設計，串接前後端數據</p>
          </div>
        </div>
        <div class="skill flex">
          <span class="icon w-8 h-8 bg-cyan-50 flex-shrink-0 shadow-sm rounded-lg flex align-items-center justify-center">
            <Icon icon="solar:figma-linear" width="25" height="25" class="text-cyan-500 m-auto"/>
          </span>
          <div class="content-group ms-4">
            <p class="skill-title font-bold text-md mb-2 text-slate-500">UI優化及設計經驗</p>
            <p class="skill-info text-sm text-pretty text-gray-700">HTML5 / CSS3 / Figma / GSAP</p>
            <p class="skill-info text-sm text-pretty text-gray-700">參與 UI/UX 設計流程，熟悉 Figma 原型設計</p>
            <p class="skill-info text-sm text-pretty text-gray-700">使用 SCSS 設計可重用元件，提升開發效率</p>
          </div>
        </div>
        <div class="skill flex">
          <span class="icon w-8 h-8 bg-cyan-50 flex-shrink-0 shadow-sm rounded-lg flex align-items-center justify-center">
            <Icon icon="ph:pencil-ruler" width="25" height="25" class="text-cyan-500 m-auto"/>
          </span>
          <div class="content-group ms-4">
            <p class="skill-title font-bold text-md mb-2 text-slate-500">產品規劃經驗</p>
            <p class="skill-info text-sm text-pretty text-gray-700">擔任產品測試與優化角色，協助規劃產品功能</p>
            <p class="skill-info text-sm text-pretty text-gray-700">透過使用者回饋提出 UI/UX 改進方案</p>
          </div>
        </div>
      </div>
      <div class="marquee flex items-center justify-center bg-cyan-50 my-16 -rotate-3 p-3">
        <Icon icon="uiw:html5" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="uiw:css3" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="ion:logo-sass" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="mdi:language-javascript" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="mdi:vuejs" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="tabler:brand-nuxt" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="iconoir:adobe-photoshop" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="iconoir:adobe-illustrator" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="solar:figma-linear" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="simple-icons:csharp" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="devicon-plain:azuresqldatabase" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="mdi:git" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="mdi:github" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="simple-icons:rider" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="codicon:vscode-insiders" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="codicon:terminal-cmd" width="30" height="30" class="me-3 text-slate-500"/>
        <Icon icon="teenyicons:docker-outline" width="30" height="30" class="me-3 text-slate-500"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.skill-info {
  margin-bottom: 16px;
  padding-left: 10px;
  position: relative;
  
  &::before {
    content: "・";
    position: absolute;
    left: -2px;
  }
}
</style>