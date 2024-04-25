# M03W06 - CRUD with Express

### To Do
- [x] Implement CRUD over HTTP with Express
- [x] Render data for the user using EJS templates
- [x] Use forms to submit HTTP requests
- [x] Explore the Post-Redirect-Get pattern
- [x] Using Chrome DevTools to see requests and responses
- [x] Practice debugging Express

### CRUD
* create  POST
* read    GET
* update  POST
* delete  POST

GET /sports/:id/edit => serve the edit form
POST /sports/:id/edit
req.params.id
req.body.newSportName

send the form to the browser
post the completed form to the server

### Resource
* object
* sports

```js
{
  name: 'tennis',
  division: 'amateur',
  durationInMins: 60,
  numOfPlayers: 2
},
{
  name: 'soccer',
  division: 'professional',
  durationInMins: 90,
  numOfPlayers: 22
}
```


url-encoding
name=squash&numOfPlayers=2&division=professional
middleware body-parser
{
  name: 'squash'
}

req.body.name

https://www.google.com/search?q=developer






















