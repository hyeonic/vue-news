<template>
    <div>
        <section>
            <!-- 사용자 정보 -->
            <user-profile>
                <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
                <router-link
                    slot="username"
                    :to="`/user/${fetchedItem.user}`"
                >{{ fetchedItem.user }}</router-link>
                <template slot="time">{{ "Posted " + fetchedItem.time_ago }}</template>
            </user-profile>
            <!-- <div class="user-contaioner">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to=" `/user/${fetchedItem.user}` ">{{ fetchedItem.user }}</router-link>
                    <div class="time">{{ fetchedItem.time_ago }}</div>
                </div>
            </div>
            <h2>{{ fetchedItem.title }}</h2>-->
        </section>
        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글  -->
            <div v-html="fetchedItem.content"></div>
        </section>
    </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["fetchedItem"]),
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch("FETCH_ITEM", itemId);

        const userName = this.$route.params.user;
        this.$store.dispatch("FETCH_USER", userName);
    },
    components: {
        UserProfile,
    },
};
</script>

<style scoped>
.user-contaioner {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>