"use client"
import React, { useState } from 'react';

export default function Login() {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Kirim data ke server untuk proses login
    };

    return (
        <main className="flex justify-center">
            <div className="flex justify-center w-full">
                <div
                    className="h-72 mt-32 rounded-2xl shadow-xl hover:shadow-2xl shadow-amber-300 transition-shadow bg-gray-200">
                    <div className="text-3xl text-black flex justify-center">Login Here!</div>
                    <form onSubmit={handleSubmit} className="p-4">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-2xl mt-4">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}