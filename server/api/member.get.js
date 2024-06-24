export default defineEventHandler(async (event) => {
    async function getdata() {
        return 'test'
    }
    return {
      members: await getdata()
    }
  })