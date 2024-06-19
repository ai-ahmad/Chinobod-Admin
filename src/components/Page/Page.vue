<template>
  <div class="flex min-h-screen bg-cover bg-admin-dash">
    <div class="container mx-auto items-center mt-10 flex justify-between">
      <div>
        <div class="flex items-center space-x-4 mb-6">
          <img :src="accountImage" alt="Account Image" class="w-12 h-12 rounded-full" />
          <div>
            <p class="font-bold text-xl">YULDASHEV SHOXRUX</p>
            <p class="text-gray-600">Oshqozon osti bezi</p>
          </div>
        </div>
        <div class="flex items-center space-x-2 mb-6">
          <button class="bg-[#022511] text-white px-6 py-3 rounded">A75 XONA</button>
          <button class="bg-[#022511] p-2 rounded" @click="openModal">
            <img src="@/assets/img/change.svg" alt="Change Icon" class="w-7 h-7" />
          </button>
        </div>

        <!-- Modal -->
        <div
          v-if="showModal"
          class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          <div class="container p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-5xl font-bold text-gray-800 mb-4">Call Center</h2>
            <textarea
              v-model="feedback"
              class="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
              placeholder="SMS BILAN TELEFON RAQAMINGIZNI KIRITING TEZ ORAGA BIZNING ADMINISTRATORIMIZA SIZ BILAN BOG'LANADI"
            ></textarea>
            <div class="flex justify-end">
              <button
                @click="closeModal"
                class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 transition-colors duration-300"
              >
                YOQ
              </button>
              <button
                @click="sendFeedback"
                class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                HA
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-2 flex flex-col">
          <router-link
            to="/Navigation"
            class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg"
          >
            Sanatoriya xaritasi va navigator
          </router-link>
          <router-link
            to="/Menu"
            class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg"
          >
            Ovqatlanish vaqtlari va menu
          </router-link>
          <router-link
            to="/AboutWe"
            class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg"
          >
            Biz haqimizda
          </router-link>
          <button class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Kasallik va davolanish haqida batafsil
          </button>
          <button
            class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg"
            @click="openModal"
          >
            Kontakt
          </button>
          <router-link
            to="/Book"
            class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg"
          >
            Elektron kutubxona
          </router-link>
        </div>
      </div>

      <div>
        <div class="countdown text-center mb-4 bg-[#022511] p-4 rounded-lg">
          <p class="text-white">Muolaja boshlanishiga qoldi:</p>
          <h2 class="text-2xl font-semibold text-white">{{ formattedTime }}</h2>
        </div>
        <router-link
          to="/Loading"
          class="block mt-3 w-full bg-[#022511] text-white py-2 rounded-lg text-center"
        >
          Hamshiraga Habar yo'llang !
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import ContactModal from '@/components/ContactModal/ContactModal.vue' // Adjust path as needed
import accountImage from '@/assets/img/user.png'

export default {
  components: {
    ContactModal // Register the ContactModal component
  },
  data() {
    return {
      accountImage,
      treatmentTime: moment().add(1, 'hours').add(15, 'minutes').add(45, 'seconds'),
      timeRemaining: moment.duration(),
      showModal: false, // Initialize showModal to control modal visibility
      feedback: ''
    }
  },
  computed: {
    formattedTime() {
      return this.timeRemaining
        ? moment.utc(this.timeRemaining.asMilliseconds()).format('HH:mm:ss')
        : '00:00:00'
    }
  },
  methods: {
    updateTime() {
      this.timeRemaining = moment.duration(this.treatmentTime.diff(moment()))
    },
    openModal() {
      this.showModal = true // Set showModal to true to open the modal
    },
    closeModal() {
      this.showModal = false // Set showModal to false to close the modal
    },
    sendFeedback() {
      const message = `Feedback: ${this.feedback}`
      // Replace with your bot token and chat ID
      const BOT_TOKEN = '7267506140:AAEHhJBrHmIyiqbqxefjdLMU4yubr9-7dk8'
      const CHAT_ID = -1002240327746
      axios
        .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: CHAT_ID,
          text: message
        })
        .then((response) => {
          console.log('Message sent:', response.data)
          this.closeModal() // Close modal after sending
        })
        .catch((error) => {
          console.error('Error sending message:', error)
          // Handle error
        })
    }
  },
  mounted() {
    this.updateTime()
    setInterval(this.updateTime, 1000)
  }
}
</script>

<style scoped>
.bg-admin-dash {
  background-image: url('@/assets/img/Admin-dash.png');
  background-size: cover;
  background-position: center;
}
</style>
