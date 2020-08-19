<template>
    <div>
        <list-item></list-item>
        <!-- <ul class="ask-list">
            <li class="post" v-for="(item, index) in askItems" v-bind:key="index">
                
                <div class="points">{{ item.points }}</div>

                <div>
                    <p class="ask-title">
                        <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>/p>
                    </p>
                    <small class="link-text">{{ item.time_ago }} by {{ item.user }}</small>
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
    //     ...mapGetters({
    //         askItems: "fetchedAsk",
    //     }),
    // },
    // computed: {
    //     ...mapGetters(["fetchedAsk"]),
    // },

    // computed: {
    //     ...mapState({
    //         ask: (state) => state.ask,
    //     }),
    // },

    // created() {
    //     this.$store.dispatch("FETCH_ASK");

    // fetchAskList()
    //     .then((response) => {
    //         this.ask = response.data;
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // },
    components: {
        ListItem,
    },
};
</script>

<style scoped>
</style>