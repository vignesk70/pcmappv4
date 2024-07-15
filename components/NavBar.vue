v:
<script lang="ts" setup>

</script>

<template>
  <div
    class="flex mr-4 h-16  items-center justify-between  w-full bg-white bg-opacity-80 dark:bg-slate-400 rounded-t-lg p-4">
    <div class="flex justify-between">
      <ULink class="text-md text-center w-20 p-2  rounded-t-lg  hover:border-b-blue-600 border-b-4   mx-4" to="/">MYPAGE
      </ULink></div>
    <div class="flex justify-end">
      <ULink class="text-md text-center w-20 p-2  rounded-t-lg  hover:border-b-blue-600 border-b-4   mx-4" to="/">Home
      </ULink>
      <ULink class="text-md text-center w-20 p-2  rounded-t-lg  hover:border-b-blue-600 border-b-4   mx-4"
        to="/activities">Activities</ULink>
      <ULink class="text-md  text-center w-20 p-2  rounded-t-lg  hover:border-b-blue-600 border-b-4   mx-4" to="/overview">
        Overview</ULink>

    </div>
  </div>

</template>
