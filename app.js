import express from "express"
const app = express();
import employees from '#db/employees';



app.route('/').get((req, res)=>{
    res.send("Hello employees!")
})

app.route('/employees').get((req, res)=>{
    res.send(employees)
})

app.route('/employees/random').get((req, res)=>{
    const randomId = Math.floor(Math.random() * employees.length);
    const {id, name} = employees[randomId];

    res.send({ id, name})
})

app.route('/employees/:id').get((req, res)=>{
    const id = Number(req.params.id)
    const found = employees.find(emp => emp.id === id);
    if(found){
        res.send(found)
    }else{
        res.status(404).send('')
    }
})







export default app