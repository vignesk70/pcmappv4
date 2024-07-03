import { Member } from '../models/members'
import { Op } from 'sequelize';

// Member.sync({alter:true})

export default defineEventHandler(async (event) => {
    
console.log(event.context.params)
const memberid = await readBody(event)
console.log(memberid.name.toUpperCase())

  const membername = await Member.findAll({
    // attributes: ['id','member_name','member_email',member_],
    where:{
        // id: memberid.id,
        member_name: {
          [Op.like]: memberid.name.toUpperCase(),
        },
        member_status: {
          [Op.eq]:true
        }
    }
})
  return membername;
  // return 'test'
}); 