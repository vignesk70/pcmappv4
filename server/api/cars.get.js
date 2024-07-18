import { Cars } from '../models/cars'

// Member.sync({alter:true})

export default defineEventHandler(async (event) => {
  const cars = await Cars.findAll();
  // const membername = await Member.findAll({attributes: ['id','member_name','member_email']})
  return {cars};
  // return 'test'
}); 