import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    specialPrice: {
        type: String,
        require: false
    },
    price: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    waxType: {
        type: String,
        require: true
    },
    burnTime: {
        type: String,
        require: true
    },
    weight: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    reviews: {
        type: String,
        require: false
    },
    rating: {
        type: String,
        require: true
    }


},
    {
        timestamps: true

    }
)

const Product = mongoose.model('Product',productSchema)

export default Product