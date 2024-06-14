<template>
  <div class="bg-image-1 relative flex flex-col items-center justify-center h-screen">
    <ol class="flex items-center w-full max-w-4xl mx-auto mt-5">
      <!-- First and Second lines -->
      <li v-for="(step, index) in steps.slice(0, 2)" :key="index" :class="{
        'w-full': true,
        'items-center': true,
        'after:content-[\' \']': true,
        'after:w-full': true,
        'after:h-1': true,
        'after:border-b': true,
        'after:border-green-700': index <= activeStepIndex,
        'after:border-white': index > activeStepIndex || activeStepIndex === -1,
        'after:border-4': true,
        'after:inline-block': true,
        'bg-image-2': index === 0,
        'bg-image-3': index === 1,
        'bg-image-4': index === 2
      }" class="flex w-full items-center">
        <span class="flex items-center justify-center w-5 h-5 bg-green-700 rounded-full shrink-0" :class="{
          'bg-image-2': index === 0,
          'bg-image-3': index === 1,
          'bg-image-4': index === 2
        }"></span>
      </li>
        <span class="flex items-center justify-center w-5 h-5 bg-green-700 rounded-full shrink-0 bg-image-3"></span>
    </ol>
    <div class="text-center flex justify-center items-center flex-col mt-5">
      <h1 v-if="activeStepIndex === 0" class="text-center text-3xl text-green-700 font-bold w-[699px]">
        Xabar yuborildi, hamshira tasdiqlashi kutilmoqda
      </h1>
      <h1 v-else-if="activeStepIndex === 1" class="text-center text-3xl text-green-700 font-bold w-[699px]">
        Hamshira xabaringizni ko'rdi va tasdiqladi, Iltimos biroz kuting !
      </h1>
      <h1 v-else-if="activeStepIndex === 2" class="text-center text-3xl text-green-700 font-bold w-[699px]">
        Xamshira yetib keldi. Servisni baxolang
      </h1>
      <img src="@/assets/img/dock.png" alt="" class="w-[900px]" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      activeStepIndex: -1, 
      steps: ['Step 1', 'Step 2', 'Step 3'] 
    };
  },
  mounted() {
    setInterval(() => {
      this.activeStepIndex = (this.activeStepIndex + 1) % this.steps.length;
    }, 1000);
  }
};
</script>

<style scoped>
.bg-image-1 {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/img/bg.png');
  background-size: cover;
  background-position: center;
}

.bg-image-2 {
  background-image: url('@/assets/img/bg2.png');
  background-size: cover;
  background-position: center;
}

.bg-image-3 {
  background-image: url('@/assets/img/bg3.png');
  background-size: cover;
  background-position: center;
}

.bg-image-4 {
  background-image: url('@/assets/img/bg4.png');
  background-size: cover;
  background-position: center;
}

li:last-child .after\:border-b {
  display: none;
}
</style>
