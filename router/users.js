const express = require('express')
const Router = express.Router()

let users =[
  {id:1,nama:"didik",email:"test@gmail.com"},
  {id:2,nama:"didik",email:"test@gmail.com"}
]
Router.get('/users', (req, res) => {
 if (users.length>0){
  res.json({
      status: true,
      data:users,
      method: req.method,
      url:req.url
    })
  }
  else{
    res.json({
      status:false,
      message: "data tiddak di temukan"
    })
  }
})
Router.post('/user', (req, res) => {
  users.push(req.body)
  if (users.length>0){
    res.json({
        status: true,
        data:users,
        method: req.method,
        url:req.url,
        message: "data berhasil di tambahkan"
      })
    }
})
Router.put('/user/:id', (req, res) => {
  const id = req.params.id
  users.filter(user => {
    if(user.id === id) {
      user.nama = req.body.nama
      user.email = req.body.email

      return user
    }
  })
  if (users.length>0){
    res.json({
        status: true,
        data:users,
        method: req.method,
        url:req.url,
        message:"data berhasil di ubah"
      })
    }
})
Router.delete('/user/:id', (req, res) => {
 const id = req.params.id
 users = users.filter(user=>user.id != id)

 if (users.length>0){
  res.json({
      status: true,
      data:users,
      method: req.method,
      url:req.url,
      message:"data berhasil di hapus"
    })
  }
})

module.exports = Router