<template>
    <div id="app">
        <tool-bar></tool-bar>
        <transition name="slice-page">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
    name: "App",
    components: {
        "tool-bar": ToolBar,
    },
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

/* Router Transition */
.slice-page-enter-active {
    transition: all 0.3s ease;
}
.slice-page-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slice-page-enter, .slice-page-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>

<!--

CLI 2.x vs CLI 3.x

 - 명령어
    - 2.x : vue init '프로젝트 템플릿 이름' '파일 위치'
    - 3.x : vue create '프로젝트 이름'

 - 웹팩 설정 파일
     - 2.x : 노출 o
     - 3.x : 노출 x

 - 프로젝트 구성
     - 2.x : 깃헙의 템플릿 다운로드
     - 3.x : 플러그인 기반으로 기능 추가

 - ES6 이해도
     - 2.x : 필요 x
     - 3.x : 필요 o

-->