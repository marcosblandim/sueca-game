import { useState } from 'react';
import { Link } from 'react-router-dom';
import RuleLine from './RuleLine';
import RuleContent from './RuleContent';
import RuleForm from './RuleForm';

export default function Rules({
	rules,
	setRules,
	selectedRuleName,
	setSelectedRuleName,
}) {
	const addRule = rule => {
		if (findRule(rule.name)) {
			alert('Rule name already exists');
			return false;
		}
		setRules([...rules, rule]);
		return true;
	};

	const findRule = name => {
		for (const rule of rules) {
			if (rule.name == name) {
				return rule;
			}
		}
	};

	const getSelectedRule = () => {
		return findRule(selectedRuleName);
	};

	return (
		<>
			<h1>Rules</h1>
			<p>
				<Link to='/'>{'<'} Back</Link>
			</p>

			<br />
			<h3>Add rules</h3>
			<RuleForm addRule={addRule} />

			<br />
			<h3>All rules</h3>
			{rules.map(rule => (
				<RuleLine
					key={rule.name}
					rule={rule}
					selected={rule.name === selectedRuleName}
					setSelectedRuleName={setSelectedRuleName}
				/>
			))}

			<br />
			<h3>Selected rule</h3>
			{getSelectedRule().name}
			<RuleContent content={getSelectedRule().content} />
		</>
	);
}
