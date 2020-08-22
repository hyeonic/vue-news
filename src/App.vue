<template>
    <div id="app">
        <tool-bar></tool-bar>
        <transition name="slice-page">
            <router-view></router-view>
        </transition>
        <Spinner :loading="loadingStatus"></Spinner>
    </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";

export default {
    name: "App",
    data() {
        return {
            loadingStatus: false,
        };
    },
    methods: {
        startSpinner() {
            this.loadingStatus = true;
        },
        endSpinner() {
            this.loadingStatus = false;
        },
    },
    created() {
        console.log(process.env.VUE_APP_TITLE);
        bus.$on("start:spinner", this.startSpinner);
        bus.$on("end:spinner", this.endSpinner);
    },
    beforeDestroy() {
        bus.$off("start:spinner", this.startSpinner);
        bus.$off("end:spinner", this.endSpinner);
    },
    components: {
        ToolBar,
        Spinner,
    },
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

a {
    color: #34495e;
    text-decoration: none;
}

a.router-link-exact-active {
    text-decoration: underline;
}

a:hover {
    color: #42b883;
    text-decoration: underline;
}

/* Router Transition */
.slice-page-enter-active {
    transition: all 0.3s ease;
}
.slice-page-leave-active {
    transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.slice-page-enter, .slice-page-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(5px);
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

<!--
    [데이터 호출 시점]
    1. 컴포넌트 라이프 사이클 훅
     - created: (컴포넌트가 생성)되자마자 호출되는 로직

    2. 라우터 네비게이션 가드
     - 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)
 -->

 <!--
    1. 외부 라이브러리 모듈화
     - 이유
        1) Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 한다.
     - 종류
        1) 차트
        2) 데이터 피커
        3) 테이블
        4) 스피너
 -->