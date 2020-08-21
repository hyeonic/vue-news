<template>
    <div>
        <!-- HOC로 인하여 필요 없어짐 -->
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
import ListMixin from "../mixins/ListMixin.js";
// import bus from "../utils/bus.js";
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
    mixins: [ListMixin],
    // created() {
    //     // this.$store.dispatch("FETCH_ASK");
    //     // fetchAskList()
    //     //     .then((response) => {
    //     //         this.ask = response.data;
    //     //     })
    //     //     .catch((error) => {
    //     //         console.log(error);
    //     //     });

    //     bus.$emit("start:spinner");
    //     setTimeout(() => {
    //         this.$store
    //             .dispatch("FETCH_ASK")
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