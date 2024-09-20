

import React from "react";
import { motion } from "framer-motion";
import profilePic1 from "@/assets/person-1.jpg";
import profilePic2 from "@/assets/person-2.jpg";
import profilePic3 from "@/assets/person-3.jpg";
import profilePic4 from "@/assets/person-4.jpeg";
import { FaBullseye, FaHandshake, FaRocket, FaAward } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, ease: "easeInOut" },
  },
};

const journeyItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const parallaxStyles = {
  transform: "translateZ(0)",
  transformStyle: "preserve-3d",
  backfaceVisibility: "hidden",
};

const parallaxEffect = (scrollYProgress) => ({
  transform: `translateY(${scrollYProgress * 50}px)`,
});

const testimonialVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function About() {
  return (
    <div className="container mx-auto py-16 px-4">

      {/* Heading Section */}
      <motion.div initial="hidden" animate="show" variants={fadeInUp} className="text-center mb-12">
        <h1 className="text-5xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          About <span className="text-yellow-500">StrengthZone</span>
        </h1>
        <p className="text-xl mt-4 text-gray-700 max-w-3xl mx-auto">
          At StrengthZone, we're driven by a passion for fitness and innovation, empowering individuals worldwide with high-quality, reliable fitness equipment.
        </p>
      </motion.div>

      {/* Achievement Milestone with Icon Animations */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        {[ 
          { icon: FaAward, title: "50+ Awards", text: "Recognized globally for excellence." },
          { icon: FaHandshake, title: "15 Countries", text: "Proudly operating across the world." },
          { icon: FaRocket, title: "100% Growth", text: "Accelerating progress every year." },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="shadow-lg p-8 rounded-lg bg-white border-t-4 border-yellow-500"
          >
            <item.icon className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-lg mt-2 text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress Bars Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="my-16 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Our Growth</h2>
        <div className="mb-6">
          <p className="text-lg font-semibold">Global Expansion</p>
          <div className="w-full bg-gray-300 rounded-full h-5">
            <motion.div
              className="bg-gradient-to-r from-yellow-500 to-orange-600 h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.5 }}
            ></motion.div>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg font-semibold">Customer Satisfaction</p>
          <div className="w-full bg-gray-300 rounded-full h-5">
            <motion.div
              className="bg-gradient-to-r from-green-500 to-blue-500 h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "95%" }}
              transition={{ duration: 1.5 }}
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Team Section with Hover Animations */}
      <motion.div initial="hidden" animate="show" variants={staggerContainer} className="text-center my-16">
        <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[ 
            { name: "John Doe", role: "Founder & CEO", img: profilePic1 },
            { name: "Jane Smith", role: "COO", img: profilePic2 },
          ].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="text-center p-6 shadow-lg rounded-lg bg-white"
            >
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-xl">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline/History Section */}
      <motion.div initial="hidden" animate="show" variants={fadeInUp} className="max-w-5xl mx-auto my-16">
        <h2 className="text-4xl font-bold text-center mb-10">Our Journey</h2>
        <div className="relative">
          <div className="border-l-4 border-yellow-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {[ 
            {
              year: "2015",
              title: "Founded",
              desc: "StrengthZone was born with the mission to revolutionize fitness equipment."
            },
            {
              year: "2018",
              title: "Global Expansion",
              desc: "We expanded into 10 new countries and continued our journey of innovation."
            },
            {
              year: "2021",
              title: "Award-Winning Products",
              desc: "Our innovative products were recognized with 50+ global awards."
            },
          ].map((event, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "left-timeline" : "right-timeline"}`}
              variants={journeyItem}
            >
              <div className="order-1 w-5/12"></div>
              <motion.div
                className="z-20 flex items-center order-1 bg-yellow-500 shadow-xl w-8 h-8 rounded-full"
                style={parallaxStyles}
                whileHover={{ scale: 1.1 }}
              ></motion.div>
              <div className="order-1 bg-white rounded-lg shadow-lg w-5/12 px-6 py-4">
                <h3 className="text-lg font-bold">{event.year}</h3>
                <h4 className="text-xl font-semibold">{event.title}</h4>
                <p className="text-gray-600">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div initial="hidden" animate="show" variants={fadeInUp} className="my-16">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          {[ 
            {
              name: "Alice Johnson",
              feedback: "StrengthZone has completely transformed my fitness routine. The equipment is top-notch and the customer service is exceptional.",
              img: profilePic1
            },
            {
              name: "Mark Smith",
              feedback: "I've seen incredible results using StrengthZone's equipment. The quality and durability are unmatched.",
              img: profilePic3
            },
            {
              name: "Emma Brown",
              feedback: "Fantastic experience from start to finish. The team at StrengthZone is knowledgeable and truly cares about their customers.",
              img: profilePic4
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={testimonialVariants}
              initial="hidden"
              animate="show"
              className="bg-white shadow-lg rounded-lg p-6 m-4 w-full md:w-80"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">Client</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div initial="hidden" animate="show" variants={fadeInUp} className="text-center my-16">
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
}
