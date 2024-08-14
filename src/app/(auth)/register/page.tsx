import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';

export default function register() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-[550px] bg-white rounded-xl py-5 px-10 shadow-md">
				<h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent text-center bg-clip-text">
					Clash
				</h1>
				<h1 className="text-3xl font-bold">Register</h1>
				<p>Welcome to clash</p>
				<form>
					<div className="mt-4">
						<Label htmlFor="name">Name</Label>
						<Input
							type="name"
							id="name"
							name="name"
							placeholder="Enter your name..."
						/>
					</div>
					<div className="mt-4">
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email..."
						/>
					</div>
					<div className="mt-4">
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password..."
						/>
					</div>
					<div className="mt-4">
						<Label htmlFor="cpassword">Confirm Password</Label>
						<Input
							type="password"
							id="cpassword"
							name="confirm password"
							placeholder="Enter your confirm password..."
						/>
					</div>
					<div className="mt-4">
						<Button className="w-full">Register</Button>
					</div>
				</form>
				<p className="text-center mt-2">
					Already have an account?
					<strong>
						<Link href="/login">login</Link>
					</strong>
				</p>
			</div>
		</div>
	);
}
