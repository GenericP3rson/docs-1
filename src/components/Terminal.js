import React from "react";
import Terminal from "react-animated-term";
import 'react-animated-term/dist/react-animated-term.css'

const createPasswordInputFrames = (maxChars, delay) => {
    const frames = []
    const step = Math.ceil(maxChars / spinnerFrames.length)

    for (let i = 0; i < maxChars; i += step) {
        const text = '✗ Password: ' + '*'.repeat(i)
        frames.push({
            text: text,
            delay
        })
    }

    return frames
}

const createSchemaFieldFrames = () => {
    const schemaFieldInputText = "name:string, birthday:int, isBeautiful:bool, profilePic:link";
    const maxChars = schemaFieldInputText.length;
    const frames = []
    const step = Math.ceil(maxChars / spinnerFrames.length)

    for (let i = 0; i < maxChars; i += step) {
        const text = '✗ Enter Schema Fields: ' + schemaFieldInputText.substring(0, i)
        frames.push({
            text: text,
            delay: 40,
        })
    }

    return frames
}

const createSpinnerFrames = (text, delay => {
    const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    const frames = []

    for (let i = 0; i < spinnerFrames.length; i++) {
        frames.push({
            text: spinnerFrames[i] + ' ' + text,
            delay: 40
        })
    }
    return frames
})


function CreateAccountTerminalView({ action }) {

    const createAccountLines = [
        {
            text: "speedway account create",
            cmd: true,
            delay: 60
        },
        {
            text: '✓ Password: ****************',
            cmd: false,
            repeat: false,
            frames: createPasswordInputFrames(16, 40),
        },
        {
            text: "✓ Motor Ready",
            cmd: false,
            repeat: true,

            frames: createSpinnerFrames('Initializing Motor')
        },
        {
            text: "✓ Wallet Set",
            cmd: false,
            repeat: true,

            frames: createSpinnerFrames('Generating MPC Wallet')
        },
        {
            text: "✓ Airdrop Received",
            cmd: false,
            repeat: true,

            frames: createSpinnerFrames('Requesting Initial Balance')
        },
        {
            text: "✓ Credentials Secured in Vault",
            cmd: false,
            repeat: true,

            frames: createSpinnerFrames('Creating Shards and Encrypting with Device AES Key')
        },
        {
            text: "✓ Account Creation Succeeded: snr1tt9mrl9duhl3978rsr7s04f6emf6xrfv35cr5q",
            cmd: false,
            repeat: true,

            frames: createSpinnerFrames('Broadcasting Transaction to Network')
        },
        {
            text: "",
            cmd: true
        }
    ];
    return <Terminal lines={createAccountLines} interval={40} height={300} />;
};


function CreateSchemaTerminalView({ action }) {
    const createAccountLines = [
        {
            text: "speedway schema create",
            cmd: true,
            delay: 60
        },
        {
            text: "✓ Wallet Reconstructed",
            cmd: false,
            repeat: true,

            frames: createSpinnerFrames('Fetching shards from Vault')
        },
        {
            text: "✓ Logged In: snr1tt9mrl9duhl3978rsr7s04f6emf6xrfv35cr5q",
            cmd: false,
            repeat: true,
            frames: createSpinnerFrames('Initializing Motor Node')
        },
        {
            text: "✓ Broadcasted a new Schema Definition",
            cmd: false,
            frames: createSchemaFieldFrames()
        },
        {
            delay: 1000,
            text: "Schema WhatIs:",
            cmd: false
        },
        {
            text: "   creator - did:snr:1tt9mrl9duhl3978rsr7s04f6emf6xrfv35cr5q",
            cmd: false
        },
        {
            text: "   did - did:snr:QmQkZaXZMQ5yLresq6QbJp3PDQxdKMFK3fBLJ6vuPHFjFV",
            cmd: false
        },
        {
            text: "   cid - QmQkZaXZMQ5yLresq6QbJp3PDQxdKMFK3fBLJ6vuPHFjFV",
            cmd: false
        },
        {
            text: "",
            cmd: true
        },
    ];
    return <Terminal lines={createAccountLines} interval={40} height={300} />;
};

function CreateObjectTerminalView({ action }) {
    const createAccountLines = [
        {
            text: "speedway object build",
            cmd: true,
            delay: 80
        },
        {
            text: "✔ Done",
            cmd: false,
            repeat: true,
            repeatCount: 6,
        },
        {
            text: "",
            cmd: true
        }
    ];
    return <Terminal lines={createAccountLines} interval={40} height={300} />;
};

function CreateBucketTerminalView({ action }) {
    const createAccountLines = [
        {
            text: "speedway bucket create",
            cmd: true,
            delay: 80
        },
        {
            text: "✔ Done",
            cmd: false,
            repeat: true,
            repeatCount: 8,
        },
        {
            text: "",
            cmd: true
        }
    ];
    return <Terminal lines={createAccountLines} interval={40} height={300} />;
};

export {
    CreateAccountTerminalView,
    CreateSchemaTerminalView,
    CreateObjectTerminalView,
    CreateBucketTerminalView,
};
