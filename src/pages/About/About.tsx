
import { motion } from "framer-motion";
import profilePic1 from "@/assets/person-1.jpg"; // Replace with actual image paths
import profilePic2 from "@/assets/person-2.jpg"; // Replace with actual image paths
import profilePic3 from "@/assets/person-3.jpg"; // Replace with actual image paths
import profilePic4 from "@/assets/person-4.jpeg"; // Replace with actual image paths
import {
  FaCar,
  FaDollarSign,
  FaClock,
  FaFlagCheckered,
  FaUsers,
  FaThumbsUp,
} from "react-icons/fa";

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

// Testimonial Variants
const testimonialVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Journey Items
const journeyItems = [
  {
    year: "2018",
    title: "Our Beginning",
    description:
      "Founded with a mission to provide the best car wash services in the city.",
    icon: FaFlagCheckered,
  },
  {
    year: "2019",
    title: "First Milestone",
    description:
      "Serviced over 1000 cars, establishing our reputation for quality and care.",
    icon: FaUsers,
  },
  {
    year: "2020",
    title: "Customer Satisfaction",
    description:
      "Achieved a 95% customer satisfaction rate through continuous improvement.",
    icon: FaThumbsUp,
  },
  {
    year: "2021",
    title: "Expansion",
    description:
      "Opened our second location to serve more customers effectively.",
    icon: FaCar,
  },
];

export default function About() {
  return (
    <div className="container mx-auto py-16 px-4 bg-gradient-to-b from-gray-100 to-white">
      {/* Heading Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          About <span className="text-yellow-500">PolishPro</span>
        </h1>
        <p className="text-xl mt-4 text-gray-700 max-w-3xl mx-auto">
          At PolishPro, we’re dedicated to bringing out the shine in your
          vehicle. Experience top-notch car wash services that exceed
          expectations.
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
          {
            icon: FaCar,
            title: "5000+ Cars Cleaned",
            text: "We've serviced thousands of vehicles with care.",
          },
          {
            icon: FaDollarSign,
            title: "Affordable Prices",
            text: "Quality service without breaking the bank.",
          },
          {
            icon: FaClock,
            title: "Quick Service",
            text: "Get your car washed in under an hour!",
          },
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

      {/* Journey Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.3 } } }}
        className="text-center my-16"
      >
        <h2 className="text-4xl font-bold mb-8">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {journeyItems.map((item, index) => (
            <motion.div
              key={index}
              variants={journeyItem}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <item.icon className="text-yellow-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{item.year}</h3>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section with Hover Animations */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="text-center my-16"
      >
        <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { name: "John Doe", role: "Founder & CEO", img: profilePic1 },
            {
              name: "Jane Smith",
              role: "Operations Manager",
              img: profilePic2,
            },
            {
              name: "Michael Brown",
              role: "Lead Technician",
              img: profilePic3,
            },
            { name: "Emily Davis", role: "Customer Service", img: profilePic4 },
          ].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="text-center p-6 shadow-lg rounded-lg bg-white"
            >
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="my-16"
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center">
          {[
            {
              name: "Alice Johnson",
              feedback:
                "PolishPro did an amazing job on my car! It looks brand new, and the service was fast and friendly.",
              img: profilePic1,
            },
            {
              name: "Mark Smith",
              feedback:
                "I love how affordable and quick their service is. Highly recommend PolishPro!",
              img: profilePic2,
            },
            {
              name: "Emma Brown",
              feedback:
                "The team at PolishPro truly cares about their customers. Best car wash experience I've ever had!",
              img: profilePic3,
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
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">Satisfied Customer</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="text-center my-16"
      >
        <a
          href="/contact"
          className="x-8 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:from-yellow-600 hover:to-red-600 transition-all duration-500 transform hover:scale-105"
        >
          Book Your Car Wash Now!
        </a>
      </motion.div>
    </div>
  );
}
