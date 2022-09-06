import {ReactNode} from 'react';

interface Props {
	pageTitle?: string | null;
	children: ReactNode;
}

const AppLayout = ({pageTitle, children}: Props): JSX.Element => {

	return (
		<div id="app">
			<main>{children}</main>
		</div>
	);
};

export default AppLayout;
