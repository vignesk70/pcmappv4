// const Member = require('../models/members');
import { Member } from '../models/members'

// Member.sync({alter:true})

export default defineEventHandler(async (event) => {
  const members = await Member.findAll();
  // const membername = await Member.findAll({attributes: ['id','member_name','member_email']})
  return {members};
  // return 'test'
}); 