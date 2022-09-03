import React from 'react';


export default function APIButton({ href, label = 'API Reference', type = 'primary' }) {
    const buttonClass = `button button--${type}`;
    return (
        <div class="api-button-wrapper">
            <a href={href} class={buttonClass}>{label}</a>
        </div>
    );
}
