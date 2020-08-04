import React, { useState, useEffect } from 'react';
import { server } from '../../lib/api';
import {
	Listing,
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
	// const [listings, setListings] = useState<Listing[] | null>(null);
	const [listings, setListings] = useState<Listing[]>([]);

	useEffect(() => {
		fetchListings();
	}, []);

	const fetchListings = async () => {
		const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
		setListings(data.listings);
		console.log(data);
	};

	const deleteListing = async (id: string) => {
		await server.fetch<DeleteListingData, DeleteListingVariables>({
			query: DELETE_LISTING,
			variables: {
				id
			}
		});
		// hope there's a better way of updating state/UI than making api call
		fetchListings();
	};

	const listingsList = (
		<ul>
			{listings.map((listing) => {
				return (
					<li key={listing.id}>
						{listing.title}
						<button onClick={() => deleteListing(listing.id)}>
							Delete
						</button>
					</li>
				);
			})}
		</ul>
	);

	return (
		<div>
			<h2>{title}</h2>
			{listingsList}
		</div>
	);
};
