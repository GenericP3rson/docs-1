import React from 'react';

function buildButton(type) {
    if (type === 'flutter' || type === 'dart' || type === 'f') {
        return <span class="badge badge--primary">Flutter</span>
    }
    if (type === 'cli' || type === 'c') {
        return <span class="badge badge--secondary">CLI</span>
    }
    if (type === 'android' || type === 'a') {
        return <span class="badge badge--success">Android</span>
    }
    if (type === 'golang' || type === 'g') {
        return <span class="badge badge--info">Golang</span>
    }
    return false;
}

export default function SupportedClients({ list }) {
    // Setup the list of clients
    const clients = list.map((client) => {
        return (
            <div class="col col--1">
                {buildButton(client)}
            </div>
        );
    });
    return (
        <div style={{ "margin-bottom": "16px", "margin-top": "-8px" }}>
            <div class="row">
                {clients}
            </div>
        </div>
    );
}
