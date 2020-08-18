<template>
    <div>
        <p v-for="(item, index) in askItems" v-bind:key="index">
            <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
            <small>{{ item.time_ago }} by {{ item.uesr }}</small>
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