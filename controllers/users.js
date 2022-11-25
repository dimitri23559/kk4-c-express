const User = require('../models/User')

module.exports = {
  //get all users
  index: async (req, res) => {
    try {
      const users = await User.find()

      if(users.length > 0){
        res.status(200).json({
          status: true,
          data: users,
          method: req.method,
          url: req.url
        })
      }else{
        res.json({
          status: false,
          message: "Data masih kosong"
        })
      }
    } catch (error) {
      res.status(400).json({success: false})
    }
  },
  //get a user by id
  show: async (req, res) => {
    try {
      const users = await User.findById(req.params.id)
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url
      })
    } catch (error) {
      res.status(400).json({success:false})
    }    
  },
  store: async (req, res) => {
    try {
      const users = await User.create(req.body)

      res.status(200).json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan"
      })
    } catch (error) {
      res.status(400).json({success:false})
    }
  },
  update: async (req, res) => {
    try {
      const users = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      })
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah"
      })
    } catch (error) {
      res.status(400).json({success:false})
    }    
  },
  delete: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id)

      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus"
      })

    } catch (error) {
      res.status(400).json({success:false})
    }
    
  }
}