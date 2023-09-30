import { error } from '@sveltejs/kit';
import { db } from '$lib/firebase/firebaseConfig.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const usernameRef = collection(db, 'users');
	const usernameQuery = query(usernameRef, where('username', '==', params.username));
	const usernameQuerySnapshot = await getDocs(usernameQuery);

	if (usernameQuerySnapshot.empty) {
		throw error(404, { message: 'Oops! User does not exist.' });
	}
}
