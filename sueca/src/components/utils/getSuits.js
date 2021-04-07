import getDefaultRuleContent from './getDefaultRuleContent';

export default function getSuits() {
	const content = getDefaultRuleContent();
	const cardsSuits = Object.keys(content);

	cardsSuits.sort();
	cardsSuits[0] = 'A';
	cardsSuits[9] = '0';

	return cardsSuits;
}
