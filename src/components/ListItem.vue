<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="(item, index) in items" v-bind:key="index">
                <!-- 포인트 영역 -->
                <div class="points">{{ item.points || 0 }}</div>

                <!-- 기타 정보 영역 -->
                <div>
                    <!-- 타이틀 영역 -->
                    <p class="news-title">
                        <template v-if="item.domain">
                            <a :href="item.url">{{ item.title }}</a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }}
                        by
                        <router-link
                            v-if=" item.user "
                            class="link-text"
                            :to=" `/user/${item.user}` "
                        >{{ item.user }}</router-link>
                        <a v-else :href="item.url">{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        const name = this.$route.name;
        let fetchName = "";
        if (name === "news") {
            fetchName = "FETCH_NEWS";
        } else if (name === "ask") {
            fetchName = "FETCH_ASK";
        } else if (name === "jobs") {
            fetchName = "FETCH_JOBS";
        }
        this.$store.dispatch(fetchName);
    },
    computed: {
        items() {
            const name = this.$route.name;
            if (name === "news") {
                return this.$store.state.news;
            } else if (name === "ask") {
                return this.$store.state.ask;
            } else if (name === "jobs") {
                return this.$store.state.jobs;
            } else {
                return null;
            }
        },
    },
};
</script>

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}

.post {
    display: flex;
    list-style: none;
    align-items: center;
    border-bottom: 1px solid #ccc;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.news-title {
    margin: 0;
}

.link-text {
    color: #828282;
}
</style>