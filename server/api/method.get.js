export default defineEventHandler(async (event) => {
    async function getdata() {if(event.node.req.method == "GET"){
                const method = await $fetch('https://dummyjson.com/products/')
                return method
            }}

    return {
      method2: await getdata()
    }
  })