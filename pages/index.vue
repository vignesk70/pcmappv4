<script lang="ts" setup>

const { data: method2 } = await useFetch('/api/method')

</script>

<template>
    <div class="grid lg:grid-cols-3 mt-4 gap-4 sm:grid-col-1">

        <div v-for="products in method2?.method2.products"
            class="flex flex-row  bg-slate-300 rounded-lg justify-center mx-auto items-stretch">
            <UCard class="w-96 shadow-lg">
                <template #header>
                    <h3 class="text-lg text-center font-medium">{{ products.title }}</h3>
                </template>
                <div class="flex flex-row justify-between mx-auto  content-center ">
                    {{ products.desc }}
                    <div v-for="item in products.images" :key="item.id" class="flex mx-auto justify-center">
                        <img :src="`${item}`" class="w-1/2" alt="">
                    </div>
                </div>
                <template #footer>
                    <h3 class="text-xs text-zinc-600">{{ products.description }}</h3>
                </template>
            </UCard>

        </div>
    </div>
</template>
<style lang="postcss" scoped></style>
