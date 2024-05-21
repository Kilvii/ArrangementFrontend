<script setup>
import { ref } from 'vue';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

const loginInput = ref("")
const passwordInput = ref("")

const emit = defineEmits(['create', 'close'])

function close() {
    emit('close')
}

function create() {
    const login = loginInput.value
    const password = passwordInput.value
    emit('create', login, password)
}

</script>
<template>
    <div class="modal-mask">
        <div class="modal-wrap">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">
                        <h3>Создание пользователя с доступом</h3>
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        <div class='input-field'>
                            <InputComponent v-model.trim="loginInput" placeholder="Логин" :max-lenght="16"/>
                        </div>
                        <div class='input-field'>
                            <InputComponent v-model.trim="passwordInput" placeholder="Пароль" :max-lenght="16"/>
                        </div>
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <ButtonComponent color="reset" title="Создать" @click="create" />
                        <ButtonComponent color="delete" title="Отмена" @click="close" />
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    justify-content: center;
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    display: flex;
    flex-direction: row;
    align-items: center;
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