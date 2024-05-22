<script setup>
import { ref } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useArrangementStore } from '@/stores/ArrangementStore';
import NavItemComponent from '@/components/NavItemComponent.vue';
import ModalEditComponent from '@/components/ModalEditComponent.vue';

const showPlacements = ref(false)
const showOrganizers = ref(false)
const showParticipants = ref(false)
const showVenues = ref(false)
const showEditPlacementModal = ref(false)
const showEditOrganizertModal = ref(false)
const showEditVenueModal = ref(false)
const showEditParticipantModal = ref(false)
const activeTab = ref('')
const store = useArrangementStore()
store.initPlacements()
store.initOrganizers()
store.initParticipants()
store.initVenues()

const exitModal = () => {
    showEditPlacementModal.value = false
    showEditOrganizertModal.value = false
    showEditParticipantModal.value = false
    showEditVenueModal.value = false
}

const handleEditPlacement = (index) => {
    showEditPlacementModal.value = true
    store.editItem(index)
}

const handleEditOrganizer = (index) => {
    showEditOrganizertModal.value = true
    store.editItem(index)
}

const handleEditParticipant = (index) => {
    showEditParticipantModal.value = true
    store.editItem(index)
}

const handleEditVenue = (index) => {
    showEditVenueModal.value = true
    store.editItem(index)
}

const handleUpdatePlacement = (index, object) => {
    store.updatePlacementItem(index, object)
    showEditPlacementModal.value = false
}

const handleDeletePlacement = (index) => {
    store.deletePlacementItem(index)
    showEditPlacementModal.value = false
}

const handleUpdateOrganizer = (index, object) => {
    store.updateOrganizerItem(index, object)
    showEditOrganizertModal.value = false
}

const handleDeleteOrganizer = (index) => {
    store.deleteOrganizerItem(index)
    showEditOrganizertModal.value = false
}

const handleUpdateVenue = (index, object) => {
    store.updateVenueItem(index, object)
    showEditVenueModal.value = false
}

const handleDeleteVenue = (index) => {
    store.deleteVenueItem(index)
    showEditVenueModal.value = false
}

const handleUpdateParticipant = (index, object) => {
    store.updateParticipantItem(index, object)
    showEditParticipantModal.value = false
}

const handleDeleteParticipant = (index) => {
    store.deleteParticipantItem(index)
    showEditParticipantModal.value = false
}

const handleShowPlacements = () => {
    showOrganizers.value = false
    showParticipants.value = false
    showVenues.value = false
    showPlacements.value = true
    activeTab.value = 'place'
};

const handleShowOrganizers = () => {
    showParticipants.value = false
    showVenues.value = false
    showPlacements.value = false
    showOrganizers.value = true
    activeTab.value = 'organiz'
};

const handleShowParticipants = () => {
    showOrganizers.value = false
    showVenues.value = false
    showPlacements.value = false
    showParticipants.value = true
    activeTab.value = 'partic'
};

const handleShowVenues = () => {
    showOrganizers.value = false
    showParticipants.value = false
    showPlacements.value = false
    showVenues.value = true
    activeTab.value = 'venue'
};

</script>

<template>
    <div class="content">
        <div class="screens">
            <div class="tabs">
                <div class='btn-field'>
                    <NavItemComponent :color="activeTab === 'place' ? 'active' : 'default'" title="Помещения"
                        @click="handleShowPlacements" />
                </div>
                <div class='btn-field'>
                    <NavItemComponent :color="activeTab === 'organiz' ? 'active' : 'default'" title="Организаторы"
                        @click="handleShowOrganizers" />
                </div>
                <div class='btn-field'>
                    <NavItemComponent :color="activeTab === 'partic' ? 'active' : 'default'" title="Участники"
                        @click="handleShowParticipants" />
                </div>
                <div class='btn-field'>
                    <NavItemComponent :color="activeTab === 'log' ? 'active' : 'default'" title="Места проведения"
                        @click="handleShowVenues" />
                </div>
            </div>
            <div v-if="showPlacements" class="placements">
                <div class="title">
                    <h2 class="placements-title" style="color: white;">Placements</h2>
                    <div class='btn-field' id="update">
                        <ButtonComponent color="delete" icon="../src/icons/Update.svg"
                            @click.stop="store.initPlacements()" />
                    </div>
                </div>
                <div class="scrollable-placements-table">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>room_id</th>
                                <th>people_at_desk</th>
                                <th>number_of_tables</th>
                                <th>available_seats</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="store.placements[0] && store.placements[0].children.length"
                                v-for="(placement, index) in store.placements[0].children" :key="index" @click="handleEditPlacement(index)">
                                <td>{{ placement.id }}</td>
                                <td>{{ placement.room_id }}</td>
                                <td>{{ placement.people_at_desk }}</td>
                                <td>{{ placement.number_of_tables }}</td>
                                <td>{{ placement.available_seats }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-if="showOrganizers" class="organizers">
                <div class="title">
                    <h2 class="organizers-title" style="color: white;">Organizers</h2>
                    <div class='btn-field' id="update">
                        <ButtonComponent color="delete" icon="../src/icons/Update.svg"
                            @click.stop="store.initOrganizers()" />
                    </div>
                </div>
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
                                v-for="(organizer, index) in store.organizers[0].children" :key="index" @click="handleEditOrganizer(index)">
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
                <div class="title">
                    <h2 class="participants-title" style="color: white;">Participants</h2>
                    <div class='btn-field' id="update">
                        <ButtonComponent color="delete" icon="../src/icons/Update.svg"
                            @click.stop="store.initParticipants()" />
                    </div>
                </div>
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
                                <th>venue</th>
                                <th>room_id</th>
                                <th>seat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="store.participants[0] && store.participants[0].children.length"
                                v-for="(participant, index) in store.participants[0].children" :key="index" @click="handleEditParticipant(index)">
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
                                <td>{{ participant.venue }}</td>
                                <td>{{ participant.room_id }}</td>
                                <td>{{ participant.seat }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-if="showVenues" class="venues">
                <div class="title">
                    <h2 class="venues-title" style="color: white;">Venues</h2>
                    <div class='btn-field' id="update">
                        <ButtonComponent color="delete" icon="../src/icons/Update.svg"
                            @click.stop="store.initVenues()" />
                    </div>
                </div>
                <div class="scrollable-venues-table">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="store.venues[0] && store.venues[0].children.length"
                                v-for="(venue, index) in store.venues[0].children" :key="index" @click="handleEditVenue(index)">
                                <td>{{ venue.id }}</td>
                                <td>{{ venue.venue }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <ModalEditComponent v-if="showEditPlacementModal" :data="store.placements" :editIndex="store.editingIndex"
            @close="exitModal()" @update="handleUpdatePlacement" @deleteItem="handleDeletePlacement" />
        <ModalEditComponent v-if="showEditOrganizertModal" :data="store.organizers" :editIndex="store.editingIndex"
            @close="exitModal()" @update="handleUpdateOrganizer" @deleteItem="handleDeleteOrganizer" />
        <ModalEditComponent v-if="showEditParticipantModal" :data="store.participants" :editIndex="store.editingIndex"
            @close="exitModal()" @update="handleUpdateParticipant" @deleteItem="handleDeleteParticipant" />
        <ModalEditComponent v-if="showEditVenueModal" :data="store.venues" :editIndex="store.editingIndex"
            @close="exitModal()" @update="handleUpdateVenue" @deleteItem="handleDeleteVenue" />
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
    height: 100%;
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


.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
}

#update {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: auto;
    width: 40px;
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
}

.organizers {
    display: flex;
    flex-direction: column;
    padding: 16px;
}

.participants {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 1428px;
}

.venues {
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
    overflow-y: auto;
    overflow-x: hidden;
}

.scrollable-organizers-table {
    overflow-y: auto;
}

.scrollable-participants-table {
    max-height: 420px;
    width: 1412px;
    overflow-y: auto;
}

.scrollable-venues-table {
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