import { Member } from '../models/members'

// Member.sync({alter:true})

export default defineEventHandler(async (event) => {
    
console.log(event)
  const membername = await Member.findAll({
    attributes: ['id','member_name','member_email'],
    where:{
        id: 2,
    }
})
  return membername;
  // return 'test'
}); 