<template>
    <div>
        <!-- HOC로 인하여 필요 없어짐 -->
        <list-item></list-item>
        <!-- <ul class="jobs-list">
            <li class="post" v-for="(job, index) in this.$store.state.jobs" v-bind:key="index">
               
                <div class="points">{{ job.points || 0 }}</div>

               
                <div>
                    <p class="jobs-title">
                        <a v-bind:href="job.url">{{ job.title }}</a>
                    </p>
                    <small>
                        {{ job.time_ago }} by
                        <a :href="job.url">{{ job.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>-->
    </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin.js";
// import bus from "../utils/bus.js";
// import { mapGetters } from "vuex";

export default {
    // computed: {
    //     ...mapGetters(["fetchedJobs"]),
    // },
    // created() {
    //     this.$store.dispatch("FETCH_JOBS");
    //     fetchJobsList()
    //         .then((response) => {
    //             this.jobs = response.data;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },
    mixins: [ListMixin],
    // created() {
    //     // this.$store.dispatch("FETCH_JOBS");

    //     bus.$emit("start:spinner");
    //     setTimeout(() => {
    //         this.$store
    //             .dispatch("FETCH_JOBS")
    //             .then(() => {
    //                 console.log("fetched");
    //                 bus.$emit("end:spinner");
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }, 2000);
    // },
    components: {
        ListItem,
    },
};
</script>

<style scoped>
</style>