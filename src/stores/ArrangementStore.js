import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArrangementStore = defineStore('ArrangementStore', () => {

  const placements = reactive([]);
  const participants = reactive([]);
  const organizers = reactive([]);
  const venues = reactive([]);
  const interface_access = reactive([]);

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

  return { placements, participants, organizers, venues, interface_access, createTables, initPlacements, initParticipants, initOrganizers, initVenues, initInterfaceAccess, dropTables, addPlacement, addVenue, addAccess }
})
