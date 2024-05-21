<script setup>
import { ref, reactive, computed } from 'vue';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    editIndex: {
        type: Number,
        required: true
    }
})

const { id, ...object } = props.data[0].children[props.editIndex];

const emit = defineEmits(['update', 'deleteItem', 'close'])

function close() {
    emit('close')
}

function update() {
    emit('update', id, object)
}

function deleteItem() {
    emit('deleteItem', id)
}

</script>
<template>
    <div class="modal-mask">
        <div class="modal-wrap">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">
                        <h3>Редактирование записи</h3>
                        <div class='btn-field'>
                            <ButtonComponent color="reset" icon="../src/icons/Close.svg" @click="close" />
                        </div>
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        <div class="editInfo" v-for="(column, index) in object" :key="index">
                            <p><span>{{ index }}</span> : {{ column }}</p>
                            <input v-model="object[index]">
                        </div>
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <ButtonComponent color="delete" title="Удалить" @click="deleteItem" />
                        <ButtonComponent color="save" title="Сохранить" @click="update" />
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
span {
    font-size: 16px;
}

.editInfo {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.btn-field {
    display: flex;
    width: 40px;
}

.input-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: auto;
    width: 170px;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrap {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 450px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    color: black;
    margin: 14px 0;
}

.modal-footer {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.modal-footer>*:not(:last-child) {
    margin-right: 14px;
}
</style>