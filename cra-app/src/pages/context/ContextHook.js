import React, {useContext} from 'react';
import {ThemeContext} from './Context';
export default function ContextHook() {
    const ctx = useContext(ThemeContext);
    return (
        <div className={ctx.ThemeColor}>ContextHook</div>
    )
}