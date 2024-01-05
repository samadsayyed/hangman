import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
console.log(email);
console.log(password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/bg.jpg')]">
      <h1 className="text-4xl font-bold mb-6">Register</h1>
      <form className="w-96">
        <div className="mb-4">
          <label htmlFor="email" className="block text-black text-2xl font-semibold">Email</label>
          <input type="email" id="email" className="border-2 border-black p-2 w-full rounded-md bg-transparent" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-black text-2xl font-semibold">Password</label>
          <input type="password" id="password" className="border-2 border-black p-2 w-full rounded-md bg-transparent" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleRegister} className="p-3 border-2 rounded-3xl text-2xl font-semibold border-black">Register</button>
      </form>
      <p className="mt-4 font-bold">Already have an account? <Link to="/login" className="text-red-600">Login here</Link></p>
    </div>
  );
};

export default Register;
