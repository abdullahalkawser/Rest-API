import { v4 as uuidv4 } from 'uuid';
let  data = [

] 
 
 export const createuser = (req,res)=>{

        const user = req.body;
        const userid = uuidv4();
        const userWithid = {...user, id: userid}
    
        data.push(userWithid)
        res.status(201).json({ message: 'User created successfully', user: data });

    

}

export const getuser = (req,res)=>{

        res.send(data);



}



export const dynamicId = (req,res)=>{

    const { id } = req.params;
    
    
    const userdata = data.find(u => u.id === id);
  
    if (userdata) {
      res.send(userdata);
    } else {
      res.status(404).send({ error: 'User not found' }); // Send a 404 error if user not found
    }
  }



export const updateuser = (req,res)=>{

    const { id } = req.params;
    const { name, email, age } = req.body;

    // Find user by ID
    const user = data.find(user => user.id === id);

    if (!user) {
        return res.status(404).send({ error: 'User not found' });
    }

    
    if (name) {
        user.name = name;
    }
    if (email) {
        user.email = email;
    }
    if (age) {
        user.age = age;
    }

    res.send({ message: 'User updated successfully', user });


}


export const deletuser = (req,res)=>{

    const { id } = req.params;


    
    
     const filteredData = data.filter(u => u.id !== id);


  
    if (filteredData) {
        data = filteredData; // Update data array without the deleted user
        res.send({ message: 'User deleted successfully', data: filteredData });
    } else {
      res.status(404).send({ error: 'User not found' }); // Send a 404 error if user not found
    }


}
