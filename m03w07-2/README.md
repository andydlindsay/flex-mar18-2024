# M03W07 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)

### 3 Major Security Issues
* plaintext passwords
* plaintext cookies
* http is a plaintext protocol

http://localhost:9876/login

### Hashing
* one way process
* plaintext password => hashing algo => hash fgsdkfhaskdhfasdhfjkaghsdlfhasd
* salt is added to the password before hashing

plaintext password + salt => hashing algo => hash

### Encryption
* two way process

                      res.cookie()
client <============> middleware <=====> route handler
response
encrypted cookie


dasfhajksdhfjkahsd

```js
// set the cookie
res.cookie('cookieName', cookieValue);
req.session.cookieName = cookieValue;

// reading the cookie
req.cookies.cookieName;
req.session.cookieName;

// clearing the cookie
res.clearCookie(cookieName);
req.session.cookieName = null; // clears one cookie
req.sesson = null; // clears all cookies
```

### HTTPS
* HTTP Secure
* encrypted protocol
* Man in the Middle (MitM) 
* Monster in the Middle (MitM)

* asymetric encryption
* public => available to anyone
* private => kept secret




https://www.google.com/










