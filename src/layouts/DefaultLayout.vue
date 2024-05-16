<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import NavItemComponent from '@/components/NavItemComponent.vue';

const router = useRouter()
const route = useRoute()

const activeTab = ref(route.path.replace('/', ""))

const handleShowNavigate = () => {
    activeTab.value = 'show'
    router.push({ name: 'main.show' });
}

const handleCreateNavigate = () => {
    activeTab.value = 'create'
    router.push({ name: 'main.create' });
}

const handleEditNavigate = () => {
    activeTab.value = 'edit'
    router.push({ name: 'main.edit' });
}

</script>

<template>
    <main class="layout">
        <div class="navigation">
            <NavItemComponent title="Просмотр" :color="activeTab === 'show' ? 'active' : 'default'"
                @click="handleShowNavigate" />
            <NavItemComponent title="Создание" :color="activeTab === 'create' ? 'active' : 'default'"
                @click="handleCreateNavigate" />
            <NavItemComponent title="Редактирование" :color="activeTab === 'edit' ? 'active' : 'default'"
                @click="handleEditNavigate" />
        </div>
        <RouterView />
    </main>
</template>

<style scoped>
.layout {
    background-color: #181818;
    width: 100%;
    height: 100vh;
}
</style>