<template>
#comment
  <div class="bg-image-1 relative">
    <ol class="flex items-center w-full mt-5">
      <li class="flex items-center w-full">
        <span
          class="flex items-center justify-center w-2 h-2 bg-blue-bg-green-700 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
        >
        </span>
      </li>
      <li
        class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-green-700 after:border-4 after:inline-block dark:after:border-gray-700"
      >
      
        <span
          class="flex items-center justify-center w-5 h-5 bg-green-700 rounded-full dark:bg-gray-700 shrink-0 bg-image-2"
        >
        </span>
      </li>
      <li
        class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-white after:border-4 after:inline-block dark:after:border-gray-700"
      >
        <span
          class="flex items-center justify-center w-5 h-5 bg-green-700 rounded-full dark:bg-gray-700 shrink-0 bg-image-3"
        >
        </span>
      </li>
      <li class="flex items-center w-full">
        <span
          class="flex items-center justify-center w-5 h-5 bg-white rounded-full dark:bg-gray-700 shrink-0 bg-image-3"
        >
        </span>
      </li>
    </ol>
    <div class="text-center flex justify-center items-center flex-col">
      <h1 class="text-center text-3xl text-green-700 font-bold w-[699px] mt-5">
        Hamshira xabaringizni ko'rdi va tasdiqladi,iltimos biroz kuting !
      </h1>
      <img src="@/assets/img/dock.png" alt="" class="w-[900px]" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline'
}
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
</style>
