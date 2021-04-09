import getDefaultRuleContent from './getDefaultRuleContent';

export default function rulePostProcess(rule) {
  const processedRule = { ...rule };
  const defaultRuleContent = getDefaultRuleContent();

  for (const suit in processedRule.content) {
    if (!processedRule.content[[suit]].name) {
      processedRule.content[[suit]] = defaultRuleContent[[suit]];
    }
  }
  return processedRule;
}
