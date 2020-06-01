import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className='home container'
      animate={{ marginTop: 200, opacity: 0.2, rotateZ: 180 }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button animate={{ scale: 1.5 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
