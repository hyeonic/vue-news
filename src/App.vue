<template>
    <div id="app">
        <tool-bar></tool-bar>
        <router-view></router-view>
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