import type { NextPage } from 'next';
import { useTheme } from 'styled-components';

import styled from 'styled-components';

const Introduction = styled.div`
	color: ${({ theme }) => theme.text};
`;

const Home: NextPage = () => {
	const theme = useTheme();
	console.log('Current theme: ', theme);

	return (
		<>
			<main>
				<Introduction>Hello World</Introduction>
			</main>
		</>
	);
};

export default Home;
