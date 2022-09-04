import React from "react";
import Terminal from "react-animated-term";
import 'react-animated-term/dist/react-animated-term.css'

const createPrefixFrames = (prefix, finalVal) => {
    const maxChars = finalVal.length;
    const frames = []

    for (let i = 0; i < maxChars; i++) {
        const text = '✗ ' + prefix + ': ' + finalVal.substring(0, i)
        frames.push({
            text: text,
            delay: 40
        })
    }

    return frames
}

const getPrefixSuccess = (prefix, finalVal) => {
    return '✓ ' + prefix + ': ' + finalVal;
}

const createSpinnerFrames = (text, del = 40) => {
    const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    const frames = []

    for (let i = 0; i < spinnerFrames.length; i++) {
        frames.push({
            text: spinnerFrames[i] + ' ' + text,
            delay: del,
        })
    }
    return frames
}

function CreateAccountTerminalView({ action }) {
    const prefixCmd = "Enter Password";
    const finalPwd = "****************";
    const createAccountLines = [
        {
            text: "speedway account create",
            cmd: true,
            delay: 60
        },
        {
            text: getPrefixSuccess(prefixCmd, finalPwd),
            cmd: false,
            repeat: false,
            frames: createPrefixFrames(prefixCmd, finalPwd)
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
            text: "",
            cmd: false,
        },
        {
            text: "🚀 New account created - snr1tt9mrl9duhl3978rsr7s04f6emf6xrfv35cr5q",
            cmd: false,
            repeat: true,
            frames: createSpinnerFrames('Broadcasting Transaction to Network')
        },
        {
            text: "",
            cmd: true
        }
    ];
    return <Terminal lines={createAccountLines} interval={40} height={400} />;
};


function CreateSchemaTerminalView({ action }) {
    const prefixCmd = "Enter Schema Fields";
    const schemaFieldInputText = "name:string, birthday:int, isBeautiful:bool";
    const schemaFieldItems = schemaFieldInputText.split(',').map((item) => item.trim());
    const createAccountLines = [
        {
            text: "speedway schema create",
            cmd: true,
            delay: 40
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
            repeat: true,
            frames: createPrefixFrames(prefixCmd, schemaFieldInputText)
        },
        {
            text: "",
            cmd: false,
        },
        {
            text: "Inputted Schema Definition:",
            cmd: false,
        },
        {
            text: "└─ " + schemaFieldItems[0],
            cmd: false,
        },
        {
            text: "└─ " + schemaFieldItems[1],
            cmd: false,
        },
        {
            text: "└─ " + schemaFieldItems[2],
            cmd: false,
        },
        {
            text: "",
            cmd: false,
        },
        {
            delay: 80,
            text: "🚀 WhatIs for Schema Broadcasted",
            cmd: false
        },
        {
            text: "└─ creator - did:snr:1tt9mrl9duhl3978rsr7s04f6emf6xrfv35cr5q",
            cmd: false
        },
        {
            text: "└─ did - did:snr:QmWSHfvQFqaPT4PqKfxkizk1BCLgpuQfsL9iG3RjTL3T5K",
            cmd: false
        },
        {
            text: "└─ cid - QmWSHfvQFqaPT4PqKfxkizk1BCLgpuQfsL9iG3RjTL3T5K",
            cmd: false
        },
        {
            text: "",
            cmd: true
        },
    ];
    return <Terminal lines={createAccountLines} interval={40} height={400} />;
};

function CreateObjectTerminalView({ action }) {
    const schemaFieldInputText = "name:string, birthday:int, isBeautiful:bool";
    const schemaFieldItems = schemaFieldInputText.split(',').map((item) => item.trim());
    const createAccountLines = [
        {
            text: "speedway object build",
            cmd: true,
            delay: 80
        },
        {
            text: "✓ Logged In: snr1tt9mrl9duhl3978rsr7s04f6emf6xrfv35cr5q",
            cmd: false,
            repeat: true,
            frames: createSpinnerFrames('Fetching shards from Vault & Initializing Motor Node', 80)
        },
        {
            text: "✓ Found Schema Definition",
            cmd: false,
            repeat: true,
            frames: createPrefixFrames("Enter Schema DID", "did:snr:QmWSHfvQFqaPT4PqKfxkizk1BCLgpuQfsL9iG3RjTL3T5K")
        },
        {
            text: "└─ " + schemaFieldItems[0],
            cmd: false,
        },
        {
            text: "└─ " + schemaFieldItems[1],
            cmd: false,
        },
        {
            text: "└─ " + schemaFieldItems[2],
            cmd: false,
        },
        {
            text: "",
            cmd: false,
        },
        {
            text: "✓ Creating Object named 'test'",
            cmd: false,
            repeat: true,
            frames: createPrefixFrames("Enter Object Label", "test")
        },
        {
            text: "✓ Set 'name' property to 'Ryan Reynolds'",
            cmd: false,
            repeat: true,
            frames: createPrefixFrames("Enter Value for 'name'", "Ryan Reynolds")
        },
        {
            text: "✓ Set 'birthday' property to 214917239",
            cmd: false,
            repeat: true,
            frames: createPrefixFrames("Enter Value for 'birthday'", "214917239")
        },
        {
            text: "✓ Set 'isBeautiful' property to true",
            cmd: false,
            repeat: true,
            frames: createPrefixFrames("Enter Value for 'isBeautiful'", "true")
        },
        {
            text: "",
            cmd: false,
        },
        {
            delay: 80,
            text: "🚀 Schema Document Uploaded",
            cmd: false
        },
        {
            text: "└─ code - 200",
            cmd: false
        },
        {
            text: "└─ did - did:snr:4c9a45e9-6cce-4408-8be0-38089a869c5c",
            cmd: false
        },
        {
            text: "└─ label - test",
            cmd: false
        },
        {
            text: "└─ cid - bafyreiggebtaxtl5dvs6tt7vyauq3y32iuhrwq7ffhw4na5lwdu4kp4eci",
            cmd: false
        },
        {
            text: "",
            cmd: true
        }
    ];
    return <Terminal lines={createAccountLines} interval={40} height={420} />;
};

function CreateBucketTerminalView({ action }) {

    const createAccountLines = [
        {
            text: "speedway bucket create",
            cmd: true,
            delay: 80
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
            text: "✓ Set New Bucket Name to 'contacts'",
            cmd: false,
            repeat: true,
            frames: createPrefixFrames("Enter a Label for bucket", "contacts")
        },
        {
            text: "✓ Bucket owner is 'snr1tt9mrl9duhl3978rsr7s04f6emf6xrfv35cr5q█'",
            cmd: false,
            repeat: true,
            frames: createPrefixFrames("Set owner address", "snr1tt9mrl9duhl3978rsr7s04f6emf6xrfv35cr5q█")
        },
        {
            text: "✓ Bucket is now publicly available",
            cmd: false,
            repeat: true,
            frames: createPrefixFrames("Set bucket visibility", "public")
        },
        {
            text: "",
            cmd: false,
        },
        {
            delay: 80,
            text: "🚀 WhereIs for Bucket Transaction Broadcasted",
            cmd: false
        },
        {
            text: "└─ did - did:snr:12eca44f50e34ea8b10403688567b02d",
            cmd: false
        },
        {
            text: "└─ creator - snr1tt9mrl9duhl3978rsr7s04f6emf6xrfv35cr5q",
            cmd: false
        },
        {
            text: "└─ label - contacts",
            cmd: false
        },
        {
            text: "└─ visibility - 1",
            cmd: false
        },
        {
            text: "└─ isActive - true",
            cmd: false
        },
        {
            text: "",
            cmd: true
        }
    ];
    return <Terminal lines={createAccountLines} interval={40} height={400} />;
};

// "where_is": {
//     "did": "did:snr:12eca44f50e34ea8b10403688567b02d",
//         "creator": "snr1tt9mrl9duhl3978rsr7s04f6emf6xrfv35cr5q",
//             "label": "contacts",
//                 "visibility": 1,
//                     "is_active": true,
//                         "timestamp": 1662272569
// }

export {
    CreateAccountTerminalView,
    CreateSchemaTerminalView,
    CreateObjectTerminalView,
    CreateBucketTerminalView,
};
