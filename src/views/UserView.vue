<template>
    <div>
        <transition name="slice-page">
            <user-profile>
                <div slot="username">{{ userInfo.id }}</div>
                <span slot="time">{{ "Joined " + userInfo.created }},</span>
                <span slot="karma">{{ userInfo.karma }}</span>
            </user-profile>
        </transition>
    </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        },
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch("FETCH_USER", userName);
    },
    components: {
        UserProfile,
    },
};
</script>

<style scoped>
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