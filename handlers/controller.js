const Product = require("../DataBase/books.modal");
const User = require("../DataBase/user.modal");
const Order = require("../DataBase/orders.modal");

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Kitob topilmadi" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Kitob topilmadi" });
    }

    res.status(200).json({ message: "Ktob yoq qolindi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBooks = async (req,res) => {
    try {
      const books = await Product.find({});
      res.status(200).json(books)
    } catch(err){
      res.status(500).json({err});
    }
}
const createBook = async (req,res) => {
    try {
        const book = await Product.create(req.body);
        res.status(200).json(book);
    } catch(err){
        res.status(400).json(err)
    }
}

const register = async (req,res) => {
  const {email} = req.body;
  const user = await User.findOne({email});
  if(user){
    return res.status(400).json({
      message:"Bu email ishlatilyapti boshqa tomonidan",
      success: false
    })
  }

  try {
    const user = await User.create(req.body);
    
    res.status(200).json('User registered seccesfully');

  } catch(err) {
    res.status(400).json(err);
  }
};

const login = async(req,res) => {

  try {
    const {email, password} = req.body;
    const user = await User.findOne({email, password});
    if(user.email == email && user.password == password){
    return res.status(200).json({
      message: "Logined in"
     });
    }
  } 
  catch (err){
    res.status(400).json({
      message:"Email yoki Password notogri kiritildi",
      success: false
    });
  }
}

const CreateOrders = async (req,res) => {
  try {
    const orders = await Order.create(req.body);
    res.status(200).json(orders);
  } catch(err) {
    res.status(400).json(err);
  }
}


const getOrders = async (req,res) => {
  try {
    const order = await Order.find({});
    res.status(200).json(order);
  } catch (err){
    res.status(400).json(err)
  }
}

module.exports = {
  createBook,
  updateProduct,
  deleteProduct,
  getBooks,
  register,
  CreateOrders,
  getOrders,
  login
};
