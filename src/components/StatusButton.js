import React from 'react';


export default function StatusButton({ status }) {
    if (status === 'draft') {
        return (
            <div class="api-button-wrapper">
                <button class="button button--warning">DRAFT</button>
            </div>
        );
    }
    if (status === 'stable') {
        return (
            <div class="api-button-wrapper">
                <button class="button button--success">STABLE</button>
            </div>
        );
    }
    if (status === 'deprecated') {
        return (
            <div class="api-button-wrapper">
                <button class="button button--danger">DEPRECATED</button>
            </div>
        );
    }
    if (status === 'experimental') {
        return (
            <div class="api-button-wrapper">
                <button class="button button--info">EXPERIMENTAL</button>
            </div>
        );
    }
    return false;
}

function buildButton(child) {
    if (child.type === 'primary') {
        return <button href={child.href} class="button button--primary">API Reference</button>
    }
    if (child.type === 'secondary') {
        return <button href={child.href} class="button button--secondary">API Reference</button>
    }
    if (child.type === 'success') {
        return <button href={child.href} class="button button--success">API Reference</button>
    }
    if (child.type === 'info') {
        return <button href={child.href} class="button button--info">{child.label}</button>
    }
    if (child.type === 'warning') {
        return <button href={child.href} class="button button--warning">{child.label}</button>
    }
    if (child.type === 'danger') {
        return <button href={child.href} class="button button--danger">{child.label}</button>
    }
    if (child.type === 'link') {
        return <button href={child.href} class="button button--link">{child.label}</button>
    }
    return false;
}
