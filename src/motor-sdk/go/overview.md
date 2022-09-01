# Overview

<<<<<<< HEAD
This file provides an overview of the Motor Go library. The other sections will closely match Android.
=======
Note: This library is under heavy development and, for the time being, is more advanced than its mobile counterparts.

Start by adding the `sonr` package to your project.

```bash
go get -u github.com/sonr-io/sonr
```

## Create a Motor Instance

There should exist only one instance of `Motor` throughout the lifetime of your application.

```go
import (
    "github.com/sonr-io/sonr/pkg/motor"
    "github.com/sonr-io/sonr/third_party/types/common"
)

func main() {
    mtr, err := EmptyMotor(&mt.InitializeRequest{
		    DeviceId: "unique_device_id", // this field must be unique to the device
	  }, common.DefaultCallback())
}
```

Before you can use the motor methods, you must finish initialization by either creating an account or logging in. To create an account you must have the following information.

* Device ID - something to uniquely identify the device Motor is running on
* Password - the user must provide this
* DSC - Device Specific Credential. A 32-byte AES key used to represent the device. Keep this stored in the device's keychain.

```go
mtr, err := EmptyMotor(&mt.InitializeRequest{
    DeviceId: "unique_device_id", // this field must be unique to the device
}, common.DefaultCallback())
if err != nil {
  panic(err)
}

createResponse, err := mtr.CreateAccount(mt.CreateAccountRequest{
		Password:  "password123",
		AesDscKey: aesKey,
})

// store the preshared key somewhere
store(createResponse.AesPskKey)
```

Logging in uses a combination of the below.
* DID - The DID generated during account creation
* DSC - Device Specific Credential. A 32-byte AES key used to represent the device. Keep this stored in the device's keychain.
* PSK - Preshared key. A 32-byte AES key. This key is meant to be shared between all devices
* Password - The password used during account creation

To login you must provide the PSK and one of either the password or DSC.

```go
mtr, err := EmptyMotor(&mt.InitializeRequest{
    DeviceId: "unique_device_id",
}, common.DefaultCallback())
if err != nil {
  panic(err)
}

loginResponse, err := mtr.Login(mt.LoginRequest{
    Did:       "<address of the account to be logged in>",
    Password:  "password123",
    AesPskKey: pskKey,
})

// -- OR --

loginResponse, err := mtr.Login(mt.LoginRequest{
    Did:       "<address of the account to be logged in>",
    AesDscKey: dscKey,
    AesPskKey: pskKey,
})
```

Once authenticated, the rest of the Motor methods are available to you, seen in this interface.

```go
type MotorNode interface {
    // Account
    GetAddress() string
    GetBalance() int64
    GetClient() *client.Client
    GetWallet() *mpc.Wallet
    GetPubKey() *secp256k1.PubKey
    SendTokens(req mt.PaymentRequest) (*mt.PaymentResponse, error)

    // Networking
    Connect() error
    GetDeviceID() string
    GetHost() host.SonrHost

    // Registry
    AddCredentialVerificationMethod(id string, cred *did.Credential) error
    CreateAccount(mt.CreateAccountRequest) (mt.CreateAccountResponse, error)
    GetDID() did.DID
    GetDIDDocument() did.Document
    Login(mt.LoginRequest) (mt.LoginResponse, error)

    // Schema
    CreateSchema(mt.CreateSchemaRequest) (mt.CreateSchemaResponse, error)
    NewObjectBuilder(schemaDid string) (*object.ObjectBuilder, error)

    // Buckets

    /*
      Creates a new bucket with the defined properties in the request.
      Returns and instance of bucket. before returning both content and buckets are resolved.
    */
    CreateBucket(context.Context, mt.CreateBucketRequest) (bucket.Bucket, error)

    GetBucket(did string) (bucket.Bucket, error)

    GetBuckets(ctx context.Context) ([]bucket.Bucket, error)
    /*
      Updates a pre existing Bucket's label. before calling update the bucket must already be resolved using GetBucket
    */
    UpdateBucketLabel(context context.Context, did string, label string) (bucket.Bucket, error)

    /*
      Updates a pre existing Bucket's visibility. Before calling update the bucket must already be resolved using GetBucket.
      Note that changing a buckets visibility can cause issues for other applications using a previously public bucket.
    */
    UpdateBucketVisibility(context context.Context, did string, visibility bt.BucketVisibility) (bucket.Bucket, error)

    /*
      Updates a pre existing Bucket's BucketItems. Before calling update the bucket must already be resolved using GetBucket.
      Should be used for both adding and removing content. Once a buckets content is updated, content is updated to reflect the updated items.
    */
    UpdateBucketItems(context context.Context, did string, items []*bt.BucketItem) (bucket.Bucket, error)
    SeachBucketBySchema(req mt.SeachBucketContentBySchemaRequest) (mt.SearchBucketContentBySchemaResponse, error)

    // Query
    QueryWhoIs(req mt.QueryWhoIsRequest) (*mt.QueryWhoIsResponse, error)
    QueryWhatIs(req mt.QueryWhatIsRequest) (*mt.QueryWhatIsResponse, error)
    QueryWhatIsByCreator(req mt.QueryWhatIsByCreatorRequest) (*mt.QueryWhatIsByCreatorResponse, error)
    QueryWhatIsByDid(did string) (*mt.QueryWhatIsResponse, error)
    QueryWhereIs(req mt.QueryWhereIsRequest) (*mt.QueryWhereIsResponse, error)
    QueryWhereIsByCreator(req mt.QueryWhereIsByCreatorRequest) (*mt.QueryWhereIsByCreatorResponse, error)
    QueryObject(cid string) (map[string]interface{}, error)
}
```
>>>>>>> 4b4eb1940744c5d13ec391fcc29115534e045b40
