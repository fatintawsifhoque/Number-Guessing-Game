<template>
  <section class="h-[90vh] w-screen gb flex flex-col items-center justify-center">
    <h1 class="text-white font-bold text-2xl mb-10">Number Guessing Game (1-100)</h1>
    
    <label for="input" class="text-white text-lg font-semibold">Input Your Guessed Number:</label>
    
    <input 
      v-model.number="gn" 
      type="number" 
      id="input" 
      class="text-white h-12 w-25 rounded-full text-center text-2xl font-bold border-3 border-dashed outline-none my-5 bg-transparent disabled:opacity-50" 
      min="1" 
      max="100"
      :disabled="isWon"
    >
    
    <button 
      @click="butt" 
      type="button" 
      class="gbb cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="isWon"
    >
      Guess
    </button>

    <button 
      v-if="isWon" 
      @click="resetGame" 
      class="mt-5 px-6 py-3 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition cursor-pointer"
    >
      Play Again 🔄
    </button>
    
    <p v-if="msg" class="text-2xl mb-3 text-white font-semibold">{{ msg }}</p>
    
    <div v-if="guessed.length" class="flex flex-col items-center mt-2">
      <p class="text-xl text-white">
        You have guessed: <span class="text-violet-200 text-3xl font-bold">{{ guessed.length }}</span> times
      </p>
      <div class="text-white mt-1 text-lg">
        History: <span class="text-violet-200">{{ guessed.join(', ') }}</span>
      </div>
    </div>
  </section>
  <section class="h-[10vh] w-screen">
    <div class=" text-center">
      <p class="text-gray-700 text-sm">Developed by</p>
      <a
        href="https://github.com/fatintawsifhoque"
        target="_blank"
        rel="noopener noreferrer"
        class="text-lg font-bold text-violet-600 hover:text-black transition"
      >
        Fatin Tawsif Hoque
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const comNum = ref(0)
const msg = ref('')
const gn = ref(null)
const guessed = ref([])
const isWon = ref(false)

const genNum = () => {
  comNum.value = Math.floor(Math.random() * 100) + 1
}
genNum()

const butt = () => {
  const n = gn.value

  if (n === null || n === undefined || isNaN(n) || n < 1 || n > 100) {
    return window.alert(`Please enter a valid number between 1 to 100`)
  }

  if (comNum.value > n) {
    msg.value = '⬇️ Your guess is low'
  } 
  else if (comNum.value < n) {
    msg.value = '⬆️ Your guess is high'
  } 
  else {
    msg.value = '🎉 Yippie! You win!!!'
    isWon.value = true 
  }

  guessed.value.push(n)
  gn.value = null 
}

const resetGame = () => {
  msg.value = ''
  guessed.value = []
  isWon.value = false
  gn.value = null
  genNum()
}
</script>

<style scoped>
.gb {
  background-image: linear-gradient(177.6deg, rgba(20, 0, 113, 1) 15.3%, rgba(1, 0, 62, 1) 91.3%);
}

.gbb {
  background-image: linear-gradient(to right, #DA22FF 0%, #9733EE 51%, #DA22FF 100%);
  margin: 10px;
  padding: 15px 25px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  outline: none;
  border: none;
  font-weight: bold;
}

.gbb:hover:not(:disabled) {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>