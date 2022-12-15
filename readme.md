# Spotlight-DevOps


#### Project Structure
```bash
├───client
│   ├───customer-1
│   │   ├───public
│   │   └───src
│   └───customer-2
│       ├───public
│       └───src
├───eks
│   ├───cluster
│   └───efs-setup
│   ├───deployment.yml
│   ├───svc.yml
│   ├───ingress.yml
│   ├───pvc.yml
│   └───ns.yml
└───server
    ├───customer1
    └───customer2
```
### All the .yml files is located inside eks folder

#### NOTE: 
Add records for <strong>INGRESS LOAD BALANCER</strong>
<ul>
    <li> backend1.myapp.com </li> 
    <li> backend2.myapp.com </li>
    <li> domain1.myapp.com </li>
    <li> domain2.myapp.com </li>
</ul>

#### Thanks for reading♥
