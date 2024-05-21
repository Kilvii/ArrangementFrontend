<script setup>
import { ref } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import { useArrangementStore } from '@/stores/ArrangementStore';
import NavItemComponent from '@/components/NavItemComponent.vue';

const store = useArrangementStore()
const roomIdInput = ref('')
const numberSeatsInput = ref('')
const venueNameInput = ref('')
const selectedVenue = ref('')
const selectedPeopleDesk = ref('')

const activeTab = ref('')
const createPlacements = ref(false)
const createVenues = ref(false)

const handleShowPlacements = () => {
    store.initPlacements()
    createVenues.value = false
    createPlacements.value = true
    activeTab.value = 'placements'
};

const handleShowVenues = () => {
    store.initVenues()
    createPlacements.value = false
    createVenues.value = true
    activeTab.value = 'venues'
};

const handleAddPlacement = (firstInput, secondInput, thirdInput, fourthInput) => {
    store.addPlacement(firstInput, secondInput, thirdInput, fourthInput)
    alert("Аудитория успешно добавлена")
    selectedVenue.value = ''
    roomIdInput.value = ''
    selectedPeopleDesk.value = ''
    numberSeatsInput.value = ''
};

const handleAddVenue = (firstInput) => {
    store.addVenue(firstInput)
    alert("Место успешно добавлено")
    venueNameInput.value = ''
};

</script>

<template>
    <div class="content">
        <div class="screens">
            <div class="tabs">
                <div class='nav-btn-field'>
                    <NavItemComponent :color="activeTab === 'venue' ? 'active' : 'default'" title="Места проведения"
                        @click="handleShowVenues" />
                </div>
                <div class='nav-btn-field'>
                    <NavItemComponent :color="activeTab === 'placement' ? 'active' : 'default'" title="Аудитории"
                        @click="handleShowPlacements" />
                </div>
            </div>
            <div v-if="createVenues" class="create-venues">
                <div class="title">
                    <h2 style="color: white;">Название места проведения</h2>
                </div>
                <div class="main">
                    <div class='input-field' id="venueInput">
                        <InputComponent v-model.trim="venueNameInput" placeholder="Ввод" />
                    </div>
                    <div class='btn-field'>
                        <ButtonComponent color="primary" title="Добавить" @click="handleAddVenue(venueNameInput)" />
                    </div>
                </div>
            </div>
            <div v-if="createPlacements" class="create-placements">
                <div class="title">
                    <h2 style="color: white;">Место проведения</h2>
                    <h2 style="color: white;">Номер аудитории</h2>
                    <h2 style="color: white;">Кол-во человек за партой</h2>
                    <h2 style="color: white;">Кол-во мест</h2>
                </div>
                <div class="main">
                    <div class='input-field' id="selectedVenue">
                        <select v-model="selectedVenue" v-for="venue in store.venues[0].children" :key="venue.id">
                            <option disabled value="">Выберите один из вариантов</option>
                            <option>{{ venue.venue }}</option>
                        </select>
                    </div>
                    <div class='input-field'>
                        <InputComponent v-model.trim="roomIdInput" placeholder="Ввод" :max-lenght="3" />
                    </div>
                    <div class='input-field' id="selectedPeopleDesk">
                        <select v-model="selectedPeopleDesk" >
                            <option disabled value="">Выберите один из вариантов</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div class='input-field'>
                        <InputComponent v-model.trim="numberSeatsInput" placeholder="Ввод" :max-lenght="3" />
                    </div>
                    <div class='btn-field'>
                        <ButtonComponent color="primary" title="Добавить"
                            @click="handleAddPlacement(selectedVenue, roomIdInput, selectedPeopleDesk, numberSeatsInput)" />
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

.tabs {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.tabs>*:not(:last-child) {
    margin-right: 16px;
}

#venueInput {
    width: 290px;
}

#selectedVenue, #selectedPeopleDesk {
    width: 204px;
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

.nav-btn-field {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: auto;
    width: 200px;
}

.create-placements {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: max-content;
    min-width: 1100px;
    background-color: #193630;
    border-radius: 16px;
}

.create-venues {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 460px;
    background-color: #193630;
    border-radius: 16px;
}

.title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 16px;
}

.title>*:not(:last-child) {
    margin-right: 40px;
}

.main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.main>*:not(:last-child) {
    margin-right: auto;
}
</style>