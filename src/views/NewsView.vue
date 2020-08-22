<template>
    <div>
        <!-- HOC로 인하여 필요 없어짐 -->
        <list-item></list-item>
    </div>
</template>
<script>
import ListItem from "../components/ListItem.vue";
// import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin.js";
// import { mapGetters } from "vuex";

export default {
    // computed: {
    //     ...mapGetters(["fetchedNews"]),
    // },
    components: {
        ListItem,
    },
    mixins: [ListMixin],
    // created() {
    //     bus.$emit("start:spinner");
    //     setTimeout(() => {
    //         this.$store
    //             .dispatch("FETCH_NEWS")
    //             .then(() => {
    //                 console.log("fetched");
    //                 bus.$emit("end:spinner");
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }, 2000);
    // this.$store.dispatch("FETCH_NEWS");
    // fetchNewsList()
    //     .then((response) => {
    //         this.users = response.data;
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // },
    // mounted() {
    //     bus.$emit("end:spinner");
    // },
};
</script>

<style scoped>
</style>