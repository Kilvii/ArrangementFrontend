import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArrangementStore = defineStore('ArrangementStore', () => {

  const placements = reactive([]);
  const participants = reactive([]);
  const organizers = reactive([]);
  const venues = reactive([]);
  const interface_access = reactive([]);
  const editingIndex = ref(null)

  function checkAuth(firstInput, secondInput) {
    const user = interface_access[0].children.find(
      (user) => user.login === firstInput && user.password === secondInput
    );
    return user !== undefined;
  }

  async function createTables() {
    createPlacements()
    createParticipants()
    createOrganizers()
    createVenues()
  }

  async function createPlacements() {
    try {
      const response = await axios.post('http://5.42.220.6:3000/api/placements/create')
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function createParticipants() {
    try {
      const response = await axios.post('http://5.42.220.6:3000/api/participants/create')
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function createOrganizers() {
    try {
      const response = await axios.post('http://5.42.220.6:3000/api/organizers/create')
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function createVenues() {
    try {
      const response = await axios.post('http://5.42.220.6:3000/api/venues/create')
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function dropTables() {
    dropPlacements()
    dropParticipants()
    dropOrganizers()
    dropVenues()
  }

  async function dropPlacements() {
    try {
      const response = await axios.post('http://5.42.220.6:3000/api/placements/drop')
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function dropParticipants() {
    try {
      const response = await axios.post('http://5.42.220.6:3000/api/participants/drop')
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function dropOrganizers() {
    try {
      const response = await axios.post('http://5.42.220.6:3000/api/organizers/drop')
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function dropVenues() {
    try {
      const response = await axios.post('http://5.42.220.6:3000/api/venues/drop')
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function initPlacements() {
    try {
      placements.splice(0, placements.length)
      const response = await axios.get('http://5.42.220.6:3000/api/placements/')
      placements.push(response.data)
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function initParticipants() {
    try {
      participants.splice(0, participants.length)
      const response = await axios.get('http://5.42.220.6:3000/api/participants/')
      participants.push(response.data)
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function initOrganizers() {
    try {
      organizers.splice(0, organizers.length)
      const response = await axios.get('http://5.42.220.6:3000/api/organizers/')
      organizers.push(response.data)
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function initVenues() {
    try {
      venues.splice(0, venues.length)
      const response = await axios.get('http://5.42.220.6:3000/api/venues/')
      venues.push(response.data)
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function initInterfaceAccess() {
    try {
      interface_access.splice(0, interface_access.length)
      const response = await axios.get('http://5.42.220.6:3000/api/interface_access/')
      interface_access.push(response.data)
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function updateOrganizerItem(id, object) {
    try {
      await axios.put(`http://5.42.220.6:3000/api/organizers/${id}`, {
        surname: object.surname,
        firstname: object.firstname,
        patronymic: object.patronymic,
        faculty: object.faculty,
        student_group: object.student_group,
        venue: object.venue,
        email: object.email,
        password: object.password
      });
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function deleteOrganizerItem(index) {
    try {
      await axios.delete(`http://5.42.220.6:3000/api/organizers/${index}`);
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function updateParticipantItem(id, object) {
    try {
      await axios.put(`http://5.42.220.6:3000/api/participants/${id}`, {
        surname: object.surname,
        firstname: object.firstname,
        patronymic: object.patronymic,
        gender: object.gender,
        birthdate: object.birthdate,
        age: object.age,
        phone: object.phone,
        email: object.email,
        school: object.school,
        address: object.address,
        classroom: object.classroom,
        subject: object.subject,
        citizenship: object.citizenship,
        passport_series: object.passport_series,
        passport_number: object.passport_number,
        password: object.password,
        venue: object.venue
      });
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function deleteParticipantItem(index) {
    try {
      await axios.delete(`http://5.42.220.6:3000/api/participants/${index}`);
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function addPlacement(firstInput, secondInput, thirdInput, fourthInput) {
    if (firstInput.trim() !== '' && secondInput.trim() !== '' && thirdInput.trim() !== '' && fourthInput.trim() !== '') {
      try {
        await axios.post('http://5.42.220.6:3000/api/placements/store', {
          venue: firstInput,
          room_id: parseInt(secondInput),
          people_at_desk: parseInt(thirdInput),
          number_of_tables: parseInt(fourthInput),
          available_seats: (parseInt(thirdInput) * parseInt(fourthInput))
        });
      } catch (error) {
        console.error('Error initializing store:', error)
      }
    }
  }

  async function updatePlacementItem(id, object) {
    try {
      await axios.put(`http://5.42.220.6:3000/api/placements/${id}`, {
        venue: object.venue,
        room_id: object.room_id,
        people_at_desk: object.people_at_desk,
        number_of_tables: object.number_of_tables,
        available_seats: object.available_seats
      });
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function deletePlacementItem(index) {
    try {
      await axios.delete(`http://5.42.220.6:3000/api/placements/${index}`);
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function addVenue(firstInput) {
    if (firstInput.trim() !== '') {
      try {
        await axios.post('http://5.42.220.6:3000/api/venues/store', {
          venue: firstInput
        });
      } catch (error) {
        console.error('Error initializing store:', error)
      }
    }
  }

  async function updateVenueItem(id, object) {
    try {
      await axios.put(`http://5.42.220.6:3000/api/venues/${id}`, {
        venue: object.venue
      });
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function deleteVenueItem(index) {
    try {
      await axios.delete(`http://5.42.220.6:3000/api/venues/${index}`);
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function addAccess(firstInput, secondInput) {
    if (firstInput.trim() !== '' && secondInput.trim() !== '') {
      try {
        await axios.post('http://5.42.220.6:3000/api/interface_access/store', {
          login: firstInput,
          password: secondInput
        });
      } catch (error) {
        console.error('Error initializing store:', error)
      }
    }
  }

  async function updateAccessItem(id, object) {
    try {
      await axios.put(`http://5.42.220.6:3000/api/interface_access/${id}`, {
        login: object.login,
        password: object.password
      });
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function deleteAccessItem(index) {
    try {
      await axios.delete(`http://5.42.220.6:3000/api/interface_access/${index}`);
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  function editItem(index) {
    editingIndex.value = index
  }

  return { editingIndex, checkAuth, editItem, placements, participants, organizers, venues, interface_access, createTables, initPlacements, initParticipants, initOrganizers, initVenues, initInterfaceAccess, dropTables, updateOrganizerItem, deleteOrganizerItem, updateParticipantItem, deleteParticipantItem, addPlacement, updatePlacementItem, deletePlacementItem, addVenue, updateVenueItem, deleteVenueItem, addAccess, updateAccessItem, deleteAccessItem, }
})
