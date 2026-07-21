import Cart from "../model/cart.js";
import Product from "../model/product.js";

export const addCart = async (req, res) => {
    try {
        const userId = req.user.id
        const { productId, quantity } = req.body

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }

        let cart = await Cart.findOne({ user: userId })

        if (!cart) {
            cart = new Cart({
                user: userId,
                items: []
            })
        }
        const existingItem = cart.items.find(item => item.product.toString() === productId)

        if (existingItem) {
            existingItem.quantity += quantity
        }
        else {
            cart.items.push({
                product: productId,
                quantity
            })
        }

        await cart.save()

        return res.status(200).json({ message: "product added cart successfully", cart })


    } catch (err) {
        return res.status(400).json({ message: err.message })

    }
}
export const listCart = async (req, res) => {

    try {
        const product = await Cart.findOne({
            user: req.user.id
        }).populate("items.product")
        return res.status(200).json({ message: "cart List", product })

    } catch (err) {
        return res.status(400).json({ message: "err.message" })
        console.log(err)
    }
}



