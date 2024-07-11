import express from 'express';
const router = express.Router();

import { createuser, deletuser, dynamicId, getuser, updateuser } from '../controllers/userControlar.js';





// Define routes

 // get all api from back-end 



 router.get('/', getuser)


// Route to handle dynamic IDs

router.get('/:id', dynamicId)




  router.post('/', createuser)


  router.delete('/:id', deletuser )


  




  router.patch('/:id', updateuser);




export default router;
