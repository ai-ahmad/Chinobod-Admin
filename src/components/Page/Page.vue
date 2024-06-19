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
          <button class="bg-[#022511] p-2 rounded" @click="showModal = true">
            <img src="@/assets/img/change.svg" alt="Change Icon" class="w-7 h-7" />
          </button>
        </div>

        <div class="space-y-2 flex flex-col">
          <router-link to="/Navigation" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Sanatoriya xaritasi va navigator
          </router-link>
          <router-link to="/Menu" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Ovqatlanish vaqtlari va menu
          </router-link>
          <router-link class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg" to="/AboutWe">
            Biz haqimizda
          </router-link>
          <router-link class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg" to="/Solution">
            Kasallik va davolanish haqida batafsil
          </router-link>
          <button class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Kontakt
          </button>
          <button class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Elektron kutubxona
          </button>
        </div>
      </div>

      <div>
        <div class="countdown text-center mb-4 bg-[#022511] p-4 rounded-lg">
          <p class="text-white">Muolaja boshlanishiga qoldi:</p>
          <h2 class="text-2xl font-semibold text-white">{{ formattedTime }}</h2>
        </div>
        <router-link to="/Loading" class="block mt-3 w-full bg-[#022511] text-white py-2 rounded-lg text-center">
          Hamshiraga Habar yo'llang !
        </router-link>
      </div>
    </div>
    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded shadow-lg">
        <h2 class="text-xl mb-4">Are you sure?</h2>
        <p class="mb-4">Do you want to send the phone number?</p>
        <div class="flex justify-end space-x-2">
          <button class="bg-red-500 text-white px-4 py-2 rounded" @click="handleModalClose(false)">No</button>
          <button class="bg-green-500 text-white px-4 py-2 rounded" @click="handleModalClose(true)">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import accountImage from '@/assets/img/user.png'

export default {
  data() {
    return {
      accountImage,
      treatmentTime: moment().add(1, 'hours').add(15, 'minutes').add(45, 'seconds'),
      timeRemaining: moment.duration(),
      showSignIn: false,
      showModal: false,
      users: [
        {
          id: 1,
          login: "+998901234567",
          password: "12345678"
        },
        {
          id: 2,
          login: "+998991234567",
          password: "12345678"
        }
      ]
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
    handleModalClose(confirm) {
      this.showModal = false;
      if (confirm) {
        this.sendPhoneNumber();
      }
    },
    sendPhoneNumber() {
      const BOT_TOKEN = '7267506140:AAEHhJBrHmIyiqbqxefjdLMU4yubr9-7dk8';
      const CHAT_ID = -1002240327746;
      const phoneNumber = this.users[0].login;

      const message = `<b>Telefon raqam:</b> ${phoneNumber}`;

      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Message sent:', data);
          alert('Phone number sent successfully!');
        })
        .catch((error) => {
          console.error('Error sending message:', error);
          alert('Failed to send phone number.');
        });
    },
    updateTime() {
      this.timeRemaining = moment.duration(this.treatmentTime.diff(moment()))
    }
  },
  mounted() {
    this.updateTime()
    setInterval(this.updateTime, 1000)
  }
}
</script>

<style>
.bg-admin-dash {
  background-image: url('@/assets/img/Admin-dash.png');
  background-size: cover;
  background-position: center;
}
</style>
