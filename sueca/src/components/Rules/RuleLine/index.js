import React from 'react';

export default function RuleLine({ rule, selected, setSelectedRuleName }) {
	const selectedRule = () => {
		setSelectedRuleName(rule.name);
	};

	return (
		<div onClick={selectedRule}>
			{rule.name}
			{selected ? ' - selecionado' : ''}
		</div>
	);
}
