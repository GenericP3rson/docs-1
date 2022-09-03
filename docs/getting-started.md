---
title: Getting Started
sidebar_position: 2
displayed_sidebar: highwaySidebar
---

# Getting Started

The highway is a single binary which allows for interfacing with the Sonr Blockchain (see **'Using the CLI'** for information on commands). The highway is also equipped with a REST server.  The following is a diagram outlining the topology of highway and available features.

We believe the best way to onboard the next billion users is to create a cohesive end-to-end platform that’s composable and interoperable with all existing protocols. For this, we built our Networking layer in `libp2p` and our Layer 1 Blockchain with `cosmos-sdk`. Our network comprises of two separate nodes: Highway and Motor, which each have a specific use case on the network. In order to maximize the onboarding experience, we developed our own Wallet which has value right out of the gate!


<!--
[t]("https://www.figma.com/file/kZVXK3yJOxmukNdckjh2RT/Highway-SDK?node-id=2%3A12") -->



# Using the CLI

our Highway-sdk comes with a set of CLI commands&#x20;



```tex
serve - Serves our GRPC and HTTP servers on the specified ports in our environment files
```



# Using REST

The highway is capable of running an http server (REST) with 'serve' ports can be specified

*   Register

*   Authentication

*   Objects&#x20;

    *   Create

    *   Update

    *   Deactivate

*   Buckets

    *   Create

    *   Update

    *   Deactivate

*   Channels

    *   Create

    *   Hide

*   registry

    *   query

    *   exists

# Using Golang

The highway node is a relayer node that helps motors interact with the sonr network. It is responsible for routing messages between motors and other relayers. The highway node
also provides an interface for developers to deploy custom services on the network. To have a custom build of the highway node, execute the following command on your machine:

### Creating a Highway Node

1. `go get -u github.com/sonr-io/sonr`

2. Create a simple highway node with the following:

```go
import (
  "github.com/sonr-io/sonr/pkg/highway"
  "github.com/sonr-io/sonr/internal/host"
)

func main() {
	// Create the node.
	n, err := highway.NewHighway(ctx, host.WithPort(8084), host.WithWebAuthn("Sonr", "localhost", "http://localhost:8080", true))
	if err != nil {
		panic(err)
	}
}
```


