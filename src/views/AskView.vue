<template>
    <div>
        <p v-for="(item, index) in askItems" v-bind:key="index">
            <a v-bind:href="item.url">{{ item.title }}</a>
            <small>{{ item.uesr }}</small>
            <small>{{ item.time_ago }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            askItems: "fetchedAsk",
        }),
    },

    // computed: {
    //     ...mapGetters(["fetchedAsk"]),
    // },

    // computed: {
    //     ...mapState({
    //         ask: (state) => state.ask,
    //     }),
    // },

    created() {
        this.$store.dispatch("FETCH_ASK");

        // fetchAskList()
        //     .then((response) => {
        //         this.ask = response.data;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    },
};
</script>

<style>
</style>