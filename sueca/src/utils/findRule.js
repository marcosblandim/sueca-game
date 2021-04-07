export default function findRule(name, rules) {
  for (const rule of rules) {
    if (rule.name == name) {
      return { ...rule };
    }
  }
}
