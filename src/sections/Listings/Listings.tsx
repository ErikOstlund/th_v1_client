import React from 'react';
import { server } from '../../lib/api';
import {
	ListingsData,
	DeleteListingData,
	DeleteListingVariables
} from './types';

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

const DELETE_LISTING = `
    mutation DeleteListing($id: ID!) {
        deleteListing(id: $id) {
            id
        }
    }
`;

interface Props {
	title: string;
}

export const Listings = ({ title }: Props) => {
	const fetchListings = async () => {
		const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
		console.log(data);
	};

	const deleteListing = async () => {
		const { data } = await server.fetch<
			DeleteListingData,
			DeleteListingVariables
		>({
			query: DELETE_LISTING,
			variables: {
				id: '5f1f9124021fc57e9b183fe6'
			}
		});
		console.log(data);
	};

	return (
		<div>
			<h2>{title}</h2>
			<button onClick={fetchListings}>Get Listings</button>
			<button onClick={deleteListing}>Delete a Listing</button>
		</div>
	);
};
