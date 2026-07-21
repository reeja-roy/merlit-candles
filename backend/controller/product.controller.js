import Product from "../model/product.js"

export const createProduct = async (req, res) => {
    try {
        const { title, description, specialPrice, price, image, waxType, burnTime, weight, quantity, reviews, rating } = req.body
        const existingProduct = await Product.findOne({ title })
        if (existingProduct) {
            return res.status(400).json({ message: "product already exist" })
        }
        const addProduct = await Product.create({ title, description, specialPrice, price, image, waxType, burnTime, weight, quantity, reviews, rating })
        return res.status(200).json({ message: "new product added successfully" })

    } catch (err) {

        console.log(err)
        return res.status(400).json({ messgae: err.message })
    }
}

export const listProduct = async (req, res) => {
    try {
        const products = await Product.find()
        console.log("product", products)
        return res.status(200).json(products)
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({ message: err.message })
    }
}

export const updateProduct = async (req, res) => {

    try {
        const { id } = req.params
        const { title, description, specialPrice, price, image, waxType, burnTime, weight, quantity, reviews, rating } = req.body

        const product = await Product.findById({ _id: id })
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        if (title == product.title || description == product.description) {
            return res.status(400).json({ message: "existing  data!!" })
        }
        await Product.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true
            }
        )

        return res.status(200).json({ message: "updated successfully", product })

    } catch (err) {

        console.log(err)
        return res.status(400).json({ message: err.message })

    }
}

export const deleteProduct = async (req, res) => {

    try {
        const { id } = req.params

        const product = await Product.findByIdAndDelete({ _id: id })
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }

        return res.status(200).json({ message: "deleted successfully", product })

    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: err.message })


    }
} 

export const getSingleProduct = async (req,res) =>{
try{
  const {id} = req.params;
  const product = await Product.findById({_id:id})
  if(!product){
  return res.status(404).json({message:"product not found"})

  }
  return res.status(200).json(product)

}
catch(err){
console.log(err)
        return res.status(400).json({ message: err.message })


}

}