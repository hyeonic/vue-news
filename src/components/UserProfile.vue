<template>
    <div class="user-contaioner">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <!-- <div>username: {{ userInfo.id }}</div> -->
            <slot name="username">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            <!-- <div class="time">time: {{ userInfo.created }}</div> -->
            <div>
                <slot name="time">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
            </div>
            <slot name="karma">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    // computed: {
    //     userInfo() {
    //         return this.$store.state.user;
    //     },
    // },
};
</script>

<style scoped>
.user-contaioner {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>