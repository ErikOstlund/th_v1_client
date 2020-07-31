interface Body {
	query: string;
}

export const server = {
	// Typescript Generics
	// <TData>: says the function can accept a type variable
	// this is passed in by whoever calls this function
	fetch: async <TData = any>(body: Body) => {
		const res = await fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		// type assert returned value as Promise<>
		return res.json() as Promise<{ data: TData }>;
	}
};
