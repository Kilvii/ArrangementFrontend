<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useArrangementStore } from '@/stores/ArrangementStore';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const store = useArrangementStore()
store.initInterfaceAccess()
const router = useRouter()

const showConfirmationCode = ref(false);
const loginInput = ref("")
const passwordInput = ref("")

const handleAuth = () => {
    if (loginInput.value !== "" && passwordInput.value !== "") {
        if (store.checkAuth(loginInput.value, passwordInput.value)) {
            router.push({  name: 'main'})
        }
        else {
            alert('Неверный логин или пароль');
        }
        resetInputs();
    }
}

const resetInputs = () => {
    loginInput.value = '';
    passwordInput.value = '';
};

</script>

<template>
    <div class="auth">
        <div v-if="!showConfirmationCode" class="auth_login">
            <div class="inputWrap">
                <InputComponent v-model.trim="loginInput" type="text" placeholder="Логин" />
                <InputComponent v-model.trim="passwordInput" type="text" placeholder="Пароль" />
            </div>
            <div class="btnWrap">
                <ButtonComponent color="primary" title="Войти" @click="handleAuth" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(183, 175, 175);
    width: 100%;
    height: 100vh;
}

.auth_login,
.auth_code {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.inputWrap>*,
.codeWrap>* {
    margin-bottom: 12px;
}

.btnWrap {
    width: 100%;
}

.codeWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

p {
    color: black;
}
</style>