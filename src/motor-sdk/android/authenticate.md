# Authentication

Under the hood, Sonr uses an MPC-based wallet to secure your account and authenticate you. You can create and login to these accounts easily through motor. For more information check out [TODO](#).

## Creating an Account

To create an account, you simply need to provide a recovery password to the [create account method](./motoroid-reference.md#create-account).. Account creation can take up to three minutes, so entertain your users :).

```java
public void createAccount(String password) throws Exception {
    Motoroid mtr = Motoroid.getInstance();
    CreateAccountResponse response = mtr.createAccount(password);
    System.out.println(response.getAddress()); // prints the blockchain address of the newly created account
}
```

Creating an account automatically authenticates you for the lifetime of the `Motoroid` instance.

## Login

If your user has previously created an account on the device, they can log in without a password. Alternatively, if the user's preshared key has been added to the device, they may login with a password.

```java
public void login(String password) throws Exception {
    Motoroid mtr = Motoroid.getInstance();

    LoginResponse response;
    if (password.isEmpty()) {
      response = mtr.login();
    } else {
      response = mtr.login(password);
    }
    System.out.println(mtr.getAddress); // prints the blockchain address of the logged in account
}
```

Users much be authenticated in order to utilize other Motor features. For more information on how authentication works on Sonr, see [TODO](#)
