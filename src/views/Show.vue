<script setup>
import { ref } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useArrangementStore } from '@/stores/ArrangementStore';
import NavItemComponent from '@/components/NavItemComponent.vue';

const showPlacements = ref(false)
const showOrganizers = ref(false)
const showParticipants = ref(false)
const showLogs = ref(false)
const activeTab = ref('')
const store = useArrangementStore()
store.init()

const handleShowPlacements = () => {
    showOrganizers.value = false
    showParticipants.value = false
    showLogs.value = false
    showPlacements.value = true
    activeTab.value = 'place'
};

const handleShowOrganizers = () => {
    showParticipants.value = false
    showLogs.value = false
    showPlacements.value = false
    showOrganizers.value = true
    activeTab.value = 'organiz'
};

const handleShowParticipants = () => {
    showOrganizers.value = false
    showLogs.value = false
    showPlacements.value = false
    showParticipants.value = true
    activeTab.value = 'partic'
};

const handleShowLogs = () => {
    showOrganizers.value = false
    showParticipants.value = false
    showPlacements.value = false
    showLogs.value = true
    activeTab.value = 'log'
};

const handleUpdate = () => {
    store.init()
};

</script>

<template>
    <div class="content">
        <div class="screens">
            <div class="tabs">
                <div class='btn-field'>
                    <NavItemComponent :color="activeTab === 'place' ? 'active' : 'default'" title="Помещения" @click="handleShowPlacements" />
                </div>
                <div class='btn-field'>
                    <NavItemComponent :color="activeTab === 'organiz' ? 'active' : 'default'" title="Организаторы" @click="handleShowOrganizers" />
                </div>
                <div class='btn-field'>
                    <NavItemComponent :color="activeTab === 'partic' ? 'active' : 'default'" title="Участники" @click="handleShowParticipants" />
                </div>
                <div class='btn-field'>
                    <NavItemComponent :color="activeTab === 'log' ? 'active' : 'default'" title="Логи" @click="handleShowLogs" />
                </div>
                <div class='btn-field'>
                    <ButtonComponent color="delete" title="Обновить данные" @click="handleUpdate" />
                </div>
            </div>
            <div v-if="showPlacements" class="placements">
                <h2 class="placements-title" style="color: white;">Placements</h2>
                <div class="scrollable-placements-table">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>room_id</th>
                                <th>number_of_seats</th>
                                <th>available_seats</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="store.placements[0] && store.placements[0].children.length"
                                v-for="placement in store.placements[0].children" :key="placement.id">
                                <td>{{ placement.id }}</td>
                                <td>{{ placement.room_id }}</td>
                                <td>{{ placement.number_of_seats }}</td>
                                <td>{{ placement.available_seats }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-if="showOrganizers" class="organizers">
                <h2 class="organizers-title" style="color: white;">Organizers</h2>
                <div class="scrollable-organizers-table">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>surname</th>
                                <th>firstname</th>
                                <th>patronymic</th>
                                <th>faculty</th>
                                <th>student_group</th>
                                <th>email</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="store.organizers[0] && store.organizers[0].children.length"
                                v-for="organizer in store.organizers[0].children" :key="organizer.id">
                                <td>{{ organizer.id }}</td>
                                <td>{{ organizer.surname }}</td>
                                <td>{{ organizer.firstname }}</td>
                                <td>{{ organizer.patronymic }}</td>
                                <td>{{ organizer.faculty }}</td>
                                <td>{{ organizer.student_group }}</td>
                                <td>{{ organizer.email }}</td>
                                <td>{{ organizer.password }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-if="showParticipants" class="participants">
                <h2 class="participants-title" style="color: white;">Participants</h2>
                <div class="scrollable-participants-table">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>surname</th>
                                <th>firstname</th>
                                <th>patronymic</th>
                                <th>gender</th>
                                <th>birthdate</th>
                                <th>age</th>
                                <th>phone</th>
                                <th>email</th>
                                <th>school</th>
                                <th>address</th>
                                <th>classroom</th>
                                <th>subject</th>
                                <th>citizenship</th>
                                <th>passport_series</th>
                                <th>passport_number</th>
                                <th>room_id</th>
                                <th>seat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="store.participants[0] && store.participants[0].children.length"
                                v-for="participant in store.participants[0].children" :key="participant.id">
                                <td>{{ participant.id }}</td>
                                <td>{{ participant.surname }}</td>
                                <td>{{ participant.firstname }}</td>
                                <td>{{ participant.patronymic }}</td>
                                <td>{{ participant.gender }}</td>
                                <td>{{ participant.birthdate.split('T')[0] }}</td>
                                <td>{{ participant.age }}</td>
                                <td>{{ participant.phone }}</td>
                                <td>{{ participant.email }}</td>
                                <td>{{ participant.school }}</td>
                                <td>{{ participant.address }}</td>
                                <td>{{ participant.classroom }}</td>
                                <td>{{ participant.subject }}</td>
                                <td>{{ participant.citizenship }}</td>
                                <td>{{ participant.passport_series }}</td>
                                <td>{{ participant.passport_number }}</td>
                                <td>{{ participant.room_id }}</td>
                                <td>{{ participant.seat }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-if="showLogs" class="logging">
                <h2 class="logging-title" style="color: white;">Logs</h2>
                <div class="scrollable-logging-table">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>log_message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="store.logs[0] && store.logs[0].children.length"
                                v-for="log in store.logs[0].children" :key="log.id">
                                <td>{{ log.id }}</td>
                                <td>{{ log.log_message }}</td>
                            </tr>
                        </tbody>
                    </table>
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

.btn-field {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: auto;
    width: 200px;
}

.placements {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 600px;
}

.organizers {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 1000px;
}

.participants {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 1428px;
}

.logging {
    display: flex;
    flex-direction: column;
    padding: 16px;
}

p {
    color: black;
    font-size: 20px;
}

.scrollable-placements-table {
    max-height: 440px;
    width: 600px;
    overflow-y: auto;
    overflow-x: hidden;
}

.scrollable-organizers-table {
    width: 986px;
    overflow-y: auto;
}

.scrollable-participants-table {
    max-height: 420px;
    width: 1412px;
    overflow-y: auto;
}

.scrollable-logging-table {
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