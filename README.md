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


| Route    | HTTP | Description        |
| -------- | ---- | ------------------ |
| /company | GET  | Get data Companies |

#### result should give data companies  


| Route    | HTTP | Description              |
| -------- | ---- | ------------------------ |
| /company | POST | Input a new data Company |

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


| Route        | HTTP | Description         |
| ------------ | ---- | ------------------- |
| /company/:id | PUT  | edit a data company |

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

| Route        | HTTP   | Description           |
| ------------ | ------ | --------------------- |
| /company/:id | Delete | delete a data company |


#########################################

| Route    | HTTP | Description       |
| -------- | ---- | ----------------- |
| /job     | GET  | Get the data jobs |
| /job/all | GET  | Get the data jobs |

#### result /job should give data jobs  e.g name,location,id job, company name, company industry
#### result /job/all should give all fields data jobs  e.g name,location,id job, company name, company industry, etc


| Route | HTTP | Description           |
| ----- | ---- | --------------------- |
| /job  | POST | Create a new data job |
#####  Input  
###### name: e.g. Finance (put in req.body)
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
###### companyid: e.g. 5c04731df9529b25d0c0df08 (put in req.body)

| Route           | HTTP | Description      |
| --------------- | ---- | ---------------- |
| /job/detail:/id | GET  | Get a detail job |


#### search Jobs


| Route       | HTTP | Description          |
| ----------- | ---- | -------------------- |
| /job/search | POST | search the data jobs |

#### result should give data jobs  
####  

#####  Input  
###### name: e.g. Finance (put in req.body)
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


| Route             | HTTP | Description          |
| ----------------- | ---- | -------------------- |
| /job/searchbyName | POST | search the data jobs |

#####  Input  
###### name: e.g. Finance (put in req.body)

| Route    | HTTP | Description     |
| -------- | ---- | --------------- |
| /job/:id | PUT  | edit a data job |

#####  Input  
###### name: e.g. Finance (put in req.body)
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


| Route    | HTTP   | Description       |
| -------- | ------ | ----------------- |
| /job/:id | Delete | delete a data job |

