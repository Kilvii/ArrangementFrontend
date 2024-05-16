<script setup>
import { ref } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import { useArrangementStore } from '@/stores/ArrangementStore';

const store = useArrangementStore()
const roomIdInput = ref('');
const numberSeatsInput = ref('');

const handleAdd = (firstInput, secondInput) => {
    store.addPlacement(firstInput, secondInput)
    roomIdInput.value = '';
    numberSeatsInput.value = '';

};

</script>

<template>
    <div class="content">
        <div class="screens">
            <div class="create-placements">
                <div class="title">
                    <h2 style="color: white;">Номер аудитории</h2>
                    <h2 style="color: white;">Количество мест</h2>
                </div>
                <div class="main">
                    <div class='input-field'>
                        <InputComponent v-model.trim="roomIdInput" placeholder="Ввод" :max-lenght="4" />
                    </div>
                    <div class='input-field'>
                        <InputComponent v-model.trim="numberSeatsInput" placeholder="Ввод" :max-lenght="3" />
                    </div>
                    <div class='btn-field'>
                        <ButtonComponent color="primary" title="Добавить" @click="handleAdd(roomIdInput, numberSeatsInput)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

.input-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: auto;
    width: 100px;
}

.btn-field {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: auto;
    width: 100px;
}

.create-placements {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 600px;
    background-color: #193630;
    border-radius: 16px;
}

.title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom:16px;
}

.title>*:not(:last-child) {
    margin-right: 16px;
}

.main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.main>*:not(:last-child) {
    margin-right: 16px;
}
</style>