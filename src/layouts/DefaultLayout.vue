<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import NavItemComponent from '@/components/NavItemComponent.vue';
import { useArrangementStore } from '@/stores/ArrangementStore';
import ModaDeleteComponent from '@/components/ModalDeleteComponent.vue';

const router = useRouter()
const route = useRoute()
const store = useArrangementStore()
const isCreated = ref(false)
const showModal = ref(false);
const activeTab = ref(route.path.replace('/', ""))

const handleCreateTables = () => {
    if (isCreated.value == false) {
        isCreated.value = true
        store.createTables()
        alert("Таблицы успешно созданы")
    }
    else {
        alert("Таблицы уже созданы")
    }
}

const handleConfirmDelete = () => {
    showModal.value = true;
};

const handleDropTables = () => {
    isCreated.value = false
    store.dropTables()
    showModal.value = false
    alert("Таблицы успешно удалены")

}

const handleQuestionnaireNavigate = () => {
    activeTab.value = 'questionnaire'
    router.push({ name: 'main.questionnaire' });
}

const handleAddNavigate = () => {
    activeTab.value = 'add'
    router.push({ name: 'main.add' });
}

const handleEditNavigate = () => {
    activeTab.value = 'edit'
    router.push({ name: 'main.edit' });
}

const handleAccessNavigate = () => {
    activeTab.value = 'access'
    router.push({ name: 'main.access' });
}

const exitModal = () => {
    showModal.value = false;
}

</script>

<template>
    <main class="layout">
        <div class="navigation">
            <NavItemComponent title="Создание таблиц" @click="handleCreateTables" />
            <NavItemComponent title="Добавление записей" :color="activeTab === 'add' ? 'active' : 'default'"
                @click="handleAddNavigate" />
            <NavItemComponent title="Редактирование записей таблиц" :color="activeTab === 'edit' ? 'active' : 'default'"
                @click="handleEditNavigate" />
            <NavItemComponent title="Управление доступом" :color="activeTab === 'access' ? 'active' : 'default'"
                @click="handleAccessNavigate" />
            <NavItemComponent title="Удаление таблиц" @click="handleConfirmDelete" />
            <NavItemComponent title="Анкеты участников" :color="activeTab === 'questionnaire' ? 'active' : 'default'"
                @click="handleQuestionnaireNavigate" />
            <ModaDeleteComponent v-if="showModal" @close="exitModal()" @deleteItem="handleDropTables" />
        </div>
        <RouterView />
    </main>
</template>

<style scoped>
.layout {
    background-color: #181818;
    width: 100%;
    height: 100%;
}
</style>