<template>
    <div>
        <list-item></list-item>
    </div>
</template>
<script>
import ListItem from "../components/ListItem.vue";
// import { mapGetters } from "vuex";

export default {
    // computed: {
    //     ...mapGetters(["fetchedNews"]),
    // },
    components: {
        ListItem,
    },
    // created() {
    // this.$store.dispatch("FETCH_NEWS");
    // fetchNewsList()
    //     .then((response) => {
    //         this.users = response.data;
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // },
};
</script>

<style scoped>
</style>