<template>
    <div>
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
    components: {
        ListItem,
    },
};
</script>

<style scoped>
</style>