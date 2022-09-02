import React from 'react';

export default function Highlight({ children, color }) {
    return (
        <span
            style={{
                backgroundColor: color,
                borderRadius: '6px',
                color: '#fff',
                fontWeight: 'bold',
                padding: '0.125rem',
            }}>
            {children}
        </span>
    );
}
