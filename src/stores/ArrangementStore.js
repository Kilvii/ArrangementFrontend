import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArrangementStore = defineStore('ArrangementStore', () => {

  const placements = reactive([]);
  const participants = reactive([]);
  const organizers = reactive([]);
  const logs = reactive([]);

  async function init() {
    initPlacements()
    initParticipants()
    initOrganizers()
    initLogs()
  }

  async function initPlacements() {
    try {
      placements.splice(0, placements.length)
      const response = await axios.get('http://localhost:3000/api/placements/')
      placements.push(response.data)
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function initParticipants() {
    try {
      participants.splice(0, participants.length)
      const response = await axios.get('http://localhost:3000/api/participants/')
      participants.push(response.data)
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function initOrganizers() {
    try {
      organizers.splice(0, organizers.length)
      const response = await axios.get('http://localhost:3000/api/organizers/')
      organizers.push(response.data)
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function initLogs() {
    try {
      logs.splice(0, logs.length)
      const response = await axios.get('http://localhost:3000/api/logging/')
      logs.push(response.data)
    } catch (error) {
      console.error('Error initializing store:', error)
    }
  }

  async function addPlacement(firstInput, secondInput) {
    if (firstInput.trim() !== '' && secondInput.trim() !== '') {
      try {
        await axios.post('http://localhost:3000/api/placements/store', {
          room_id: parseInt(firstInput),
          number_of_seats: parseInt(secondInput),
          available_seats: parseInt(secondInput)
        });
      } catch (error) {
        console.error('Error initializing store:', error)
      }
    }
  }

  return { placements, participants, organizers, logs, init, addPlacement }
})
