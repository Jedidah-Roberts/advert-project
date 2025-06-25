import meet from "../../assets/meet.jpg";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ebo Rice",
    role: "Back-end Developer",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Back-end developer learning and growing with every build.",
  },
  {
    name: "Juliet Esinam",
    role: "Back-end Developer",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Back-end developer learning and growing with every build.",
  },
  {
    name: "Jedidah Roberts",
    role: "Front-end Developer",
    imageUrl: meet,
    bio: "Passionate about creating stunning UIs using React and Tailwind CSS.",
  },
  {
    name: "Jennifer Offin",
    role: "Front-end Developer",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Crafts clean user interfaces with React and Tailwind CSS.",
  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const MeetTheTeam = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800">
        Meet the Team
      </h2>

      <motion.div
        className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            variants={cardAnimation}
            className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-100"
          >
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover mb-5 border-4 border-white shadow-inner ring-4 ring-orange-200"
              src={member.imageUrl}
              alt={member.name}
            />
            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
            <p className="text-sm text-purple-600 font-medium mb-2">
              {member.role}
            </p>
            <p className="text-sm text-gray-600 leading-snug">{member.bio}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MeetTheTeam;
