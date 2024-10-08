import * as React from 'react';
import { Children } from 'react';
import { Helmet } from 'react-helmet';

export class Title extends React.Component 
{
	title = (): string =>
	{
		const childrenAsString: string = Children.map(this.props.children, child =>
		{
			return child?.toString();
		}).join('').toString();
		return childrenAsString + ' - Quesdon@Planet';
	};

	render(): React.ReactNode
	{
		return (
			<Helmet>
				<title>{this.title()}</title>
			</Helmet>
		);
	}
}
