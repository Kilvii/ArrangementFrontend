<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: "primary",
    },
    icon: {
        type: String,
        default: "",
    }
})
</script>
<template>
    <div class="btn-wrap">
        <button class="btn" :class="[`btn_${color}`]">
            <img v-if="icon" :src="icon" alt="btn-icon" />
            {{ title }}
        </button>
    </div>
</template>

<style scoped>
.btn-wrap {
    font-size: 16px;
    height: 40px;
    width: inherit;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: inherit;
    width: inherit;
    color: white;
    font-size: 16px;
}

.btn_primary {
    background-color: black;
}

.btn_reset {
    background-color: gray;
}

.btn_delete {
    background-color: red;
}

.btn_save {
    background-color: rgb(186, 11, 11);
}

.btn:hover {
    opacity: 0.7;
}
</style>