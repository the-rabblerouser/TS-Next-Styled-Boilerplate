import type { NextPage } from 'next';

import styled from 'styled-components';

const Introduction = styled.div`
	color: ${({ theme }) => theme.text};
`;

const Home: NextPage = () => {
	return (
		<>
			<main>
				<Introduction>Hello World</Introduction>
			</main>
		</>
	);
};

export default Home;
