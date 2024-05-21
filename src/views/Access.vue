<script setup>
import { ref } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import { useArrangementStore } from '@/stores/ArrangementStore';
import NavItemComponent from '@/components/NavItemComponent.vue';
import ModalAddComponent from '@/components/ModalAddComponent.vue';
import ModalEditComponent from '@/components/ModalEditComponent.vue';

const store = useArrangementStore()
store.initInterfaceAccess()
const activeTab = ref('')
const showAddModal = ref(false)
const showEditModal = ref(false)

const handleAddAccess = () => {
    showAddModal.value = true
};

const exitModal = () => {
    showAddModal.value = false
    showEditModal.value = false
}

const handleCreateItem = (login, password) => {
    store.addAccess(login, password)
    showAddModal.value = false
};

const handleEditItem = (index) => {
    showEditModal.value = true
    store.editAccessItem(index)
}

</script>

<template>
    <div class="content">
        <div class="screens">
            <div class="venues">
                <div class="title">
                    <h2 style="color: white;">Interface access</h2>
                    <div class="options">
                        <div class='btn-field'>
                            <ButtonComponent color="delete" icon="../src/icons/Add.svg" @click.stop="handleAddAccess" />
                        </div>
                        <div class='btn-field'>
                            <ButtonComponent color="delete" icon="../src/icons/Update.svg"
                                @click.stop="store.initInterfaceAccess()" />
                        </div>
                    </div>
                </div>
                <div class="scrollable-interface-table">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>login</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="store.interface_access[0] && store.interface_access[0].children.length"
                                v-for="(admin, index) in store.interface_access[0].children" :key="index"
                                @click="handleEditItem(index)">
                                <td>{{ admin.id }}</td>
                                <td>{{ admin.login }}</td>
                                <td>{{ admin.password }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <ModalEditComponent v-if="showEditModal" :data="store.interface_access" :editIndex="store.editingIndex"
            @close="exitModal()" @update="" @delete="" />
        <ModalAddComponent v-if="showAddModal" @close="exitModal()" @create="handleCreateItem" />
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-width: 320px;
    min-height: 200px;

}

.screens {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 16px;

}

.venues {
    display: flex;
    flex-direction: column;
    padding: 16px;
}

.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
}

.options {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.options>*:not(:last-child) {
    margin-right: 10px;
}


.btn-field {
    display: flex;
    width: 40px;
}

.scrollable-interface-table {
    max-height: 440px;
    overflow-y: auto;
}

.styled-table {
    border-collapse: collapse;
    font-family: sans-serif;
    min-width: 568px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border: 2px solid white;
    background-color: #193630
}

.styled-table th {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
    font-size: large;
    position: sticky;
    top: 0;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;

}

.styled-table td {
    font-size: medium;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}
</style>