import React from 'react';
import { server } from '../../lib/api';

// GraphQL query sent to server.fetch function
const LISTINGS = `
    query Listings {
        listings {
        id
        title
        image
        address
        price
        numOfGuests
        numOfBeds
        numOfBaths
        rating
        }
    }
`;

interface Props {
	title: string;
}

export const Listings = ({ title }: Props) => {
	const fetchListings = async () => {
		const { data } = await server.fetch({ query: LISTINGS });
		console.log(data);
	};

	return (
		<div>
			<h2>{title}</h2>
			<button onClick={fetchListings}>Get Listings</button>
		</div>
	);
};
