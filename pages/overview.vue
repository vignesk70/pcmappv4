<template>
    <div>
      <h1 class="text-3xl">Page</h1>  
   
            <UInput v-model="name" placeholder="Enter name ..."></UInput>
            <UButton @click="findname">Search</UButton>
       
        
      <!-- <ul v-for="item in members.members" :key="item.id">
        {{ item.member_name }}
      </ul> -->

      <!-- <ul v-for="item in searchresult" :key="item.id">
        {{ item.member_name }}
      </ul> -->
      <UTable :rows="searchresult" :columns="columns"></UTable>
    </div>
</template>

<script setup>

const name = ref()
const searchresult = ref()
// const {data: members} = await useFetch('/api/member/')

const columns = [
    {
        key: 'id',
        label:'ID'
    },
    {
        key: 'member_name',
        label:'Members Name',
        sortable: true
    },
    {
        key: 'member_status',
        label:'Members Status'
    },
    {
        key: 'member_expiry_date',
        label: 'Expiry Date',
        sortable: true,
        direction: 'desc',
    }
]

 async function findname() {
    // console.log('Button clicked',name.value)
    let namelike = ""//{"name":"%"+name.value+"%"}
    if (name.value){
        namelike = {"name":"%"+name.value+"%"}
    }
    else {
        namelike = {"name":"%"}
    }
    
    // console.log(namelike)
    const membername = await $fetch("/api/membername",{
        method:'POST',
        body:namelike
    })
    searchresult.value = membername
    // console.log(membername)
    // console.log(searchresult)
}

</script>

