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


| Route    | HTTP | Description   |
| -------- | ---- | ------------- |
| /company | GET  | Get Companies |


#### result should give data companies  


| Route    | HTTP | Description            |
| -------- | ---- | ---------------------- |
| /company | POST | Input new data Company |

#####  Input Company 
###### name: e.g. PT Perkasa Citrapasific (put in req.body)
###### email: e.g. email@citra.com (put in req.body)
###### logo: e.g. https://source.unsplash.com/random/300x200 (put in req.body)
###### nameUser: e.g. Ratih (put in req.body)
###### telp: e.g. 081221133777444 (put in req.body)
###### address: e.g. Kompleks Perkantoran  Blok 77 (put in req.body)
###### city: e.g. Jakarta (put in req.body)
###### website: e.g. www.indocare.com (put in req.body)
###### industry: e.g. personal care (put in req.body)
###### totalEmployees: e.g. 100 (put in req.body)



| Route    | HTTP | Description   |
| -------- | ---- | ------------- |
| /job     | GET  | Get data jobs |
| /job/all | GET  | Get data jobs |

#### result /job should give data jobs  e.g name,location,id job, company name, company industry
#### result /job/all should give all fields data jobs  e.g name,location,id job, company name, company industry, etc


#### search Jobs


| Route       | HTTP | Description      |
| ----------- | ---- | ---------------- |
| /job/search | POST | search data jobs |

#### result should give data jobs  
####  

#####  Input  
###### name: e.g. Head Finance (put in req.body)
###### function: e.g. accounting (put in req.body)
###### description: e.g. mengerti flow (put in req.body)
###### education: e.g. SMP (put in req.body)
###### qualification: e.g. jujur (put in req.body)
###### location: e.g. Jakarta (put in req.body)
###### minSalary: e.g. 5000000 (put in req.body)
###### maxSalary: e.g. 100000000 (put in req.body)
###### minAge: e.g. 20 (put in req.body)
###### maxAge: e.g. 50 (put in req.body)
###### gender: e.g. wanita (put in req.body)
