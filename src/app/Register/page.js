"use client";
import React, { useState } from "react";
import { useRouter } from "next/router"; // Impor useRouter

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Inisialisasi useRouter

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = { username, email, password };

    console.log("Data to be sent:", userData);

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        // Tambahkan logika setelah registrasi berhasil, seperti redirect
        router.push("/"); // Mengalihkan ke halaman beranda
      } else {
        const errorText = await response.text();
        console.error("Registration failed:", errorText);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <main className='flex justify-center'>
      <div className='flex justify-center w-full'>
        <div className='mt-32 rounded-2xl shadow-xl hover:shadow-2xl shadow-amber-300 transition-shadow bg-gray-200'>
          <div className='text-3xl text-black flex justify-center'>
            Register Here!
          </div>
          <form onSubmit={handleSubmit} className='p-4'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded-2xl mt-4'
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
