const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
    images: { type: String, required: true },
    id: { type: Number, required: true }
}, {
    versionKey: false,
    timestamps: true
});

const Carousel = mongoose.model("carousel", carouselSchema);

module.exports = Carousel;