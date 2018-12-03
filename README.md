# Software-Engineer-Challenge


### Installation and Getting Started
```sh
$ npm i nodemon
$ npm i
$ npm start (server side)
$ npm test (server side)


### Using Mongodb 
### List of API  
##### http://localhost:3000/


| Route | HTTP | Description                 |
| ----- | ---- | --------------------------- |
| /company | GET  | Get Companies |


#### Input Company 


| Route | HTTP | Description                    |
| ----- | ---- | ------------------------------ |
| /company | POST | Input new data Company |

#####  Input
###### name: e.g. PT Perkasa Citrapasific (put in req.body)
###### email: e.g. email@citra.com (put in req.body)
###### logo: e.g. https://source.unsplash.com/random/300x200 (put in req.body)
###### nameUser: e.g. Ratih (put in req.body)
###### telp: e.g. 081221133777444 (put in req.body)
###### address: e.g. Kompleks Perkantoran  Blok 77 (put in req.body)


name: req.body.name,
            email : req.body.email,
            profile :  req.body.profile,
            logo: req.body.logo ,
            nameUser: req.body.nameUser,
            telp:  req.body.telp,
            address :  req.body.address,
            city :  req.body.city,
            website :  req.body.website,
            industry :  req.body.industry,
            totalEmployees :  req.body.totalEmployees,