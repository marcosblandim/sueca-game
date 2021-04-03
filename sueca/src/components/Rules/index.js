import { useState } from "react";
import { Link } from "react-router-dom";

export default function Rules({ rules, setRules, selectedRuleName, setSelectedRuleName }) {

    const [ruleNameInput, setRuleNameInput] = useState("");

    const updateRuleNameInput = event => {
        setRuleNameInput(event.target.value);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        addRule(ruleNameInput, {});
        setRuleNameInput(ruleNameInput);
    }

    const addRule = (ruleName, rule) => {
        if (ruleName in rules) {
            alert('Rule name already exists')
        } else {
            setRules({ ...rules, [ruleName]: rule });
        }
    }

    /*
    # Rules
    - form for creating new rules
    - list of created forms
        - can delete, select and edit a rule from buttons of the elments of this list
        - edit 
    - when creating, it will come filled with the standart rules
    - editing will be the same as creating, but it will come filled with its own data instead of the standart rule deck
    */
    return (
        <>
            <h1>Rules</h1>
            <p><Link to='/'>{'<'} Back</Link></p>
            <form onSubmit={handleOnSubmit}>
                <input value={ruleNameInput} onChange={updateRuleNameInput} required/>
                <button type="submit" >Add rule</button>
            </form>
            {Object.keys(rules).map(rule => {
                return (
                    <p key={rule}>{rule}</p>
                )
            })}
        </>
    )
}