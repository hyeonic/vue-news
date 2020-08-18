<template>
    <div>
        <p v-for="(job, index) in this.$store.state.jobs" v-bind:key="index">
            <a v-bind:href="job.url">{{ job.title }}</a>
            <small>{{ job.domain }}</small>
            <small>{{ job.time_ago }}</small>
        </p>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("FETCH_JOBS");

        // fetchJobsList()
        //     .then((response) => {
        //         this.jobs = response.data;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    },
};
</script>

<style>
</style>