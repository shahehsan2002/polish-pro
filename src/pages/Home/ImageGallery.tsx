import { motion } from "framer-motion";
import Image1 from "../../assets/Mosaic/1.jpg";
import Image2 from "../../assets/Mosaic/2.jpg";
import Image3 from "../../assets/Mosaic/3.jpg";
import Image4 from "../../assets/Mosaic/4.jpg";
import Image5 from "../../assets/Mosaic/5.jpg";
import Image6 from "../../assets/Mosaic/6.jpg";
import Image7 from "../../assets/Mosaic/7.jpg";
import Image8 from "../../assets/Mosaic/8.jpg";
import Image9 from "../../assets/Mosaic/9.jpg";
import Image10 from "../../assets/Mosaic/10.jpg";
import Image11 from "../../assets/Mosaic/11.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11];

const MosaicGallerySection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-200 overflow-hidden">
      <div className="relative container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Dive into our world with this curated selection of images.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <img
                src={img}
                alt={`Gallery item ${index}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold tracking-wider"></span>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MosaicGallerySection;
