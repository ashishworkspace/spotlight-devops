# Spotlight-DevOps


#### Project Structure
```bash
├── client
│   ├── customer-1
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── public
│   │   │   ├── favicon.ico
│   │   │   ├── index.html
│   │   │   ├── logo192.png
│   │   │   ├── logo512.png
│   │   │   ├── manifest.json
│   │   │   └── robots.txt
│   │   ├── README.md
│   │   └── src
│   │       ├── App.js
│   │       └── index.js
│   └── customer-2
│       ├── Dockerfile
│       ├── package.json
│       ├── package-lock.json
│       ├── public
│       │   ├── favicon.ico
│       │   ├── index.html
│       │   ├── logo192.png
│       │   ├── logo512.png
│       │   ├── manifest.json
│       │   └── robots.txt
│       ├── README.md
│       └── src
│           ├── App.js
│           └── index.js
├── eks
│   ├── cluster
│   │   ├── cluster.yml
│   │   ├── ec2_id_rsa
│   │   └── ec2_id_rsa.pub
│   ├── deployment.yml
│   ├── efs-setup
│   │   ├── 1-namespace.yaml
│   │   ├── 2-service-account.yaml
│   │   ├── 3-clusterrole.yaml
│   │   ├── 4-clusterrolebinding.yaml
│   │   ├── 5-role.yaml
│   │   ├── 6-rolebinding.yaml
│   │   ├── 7-deployment.yaml
│   │   └── 8-storage-class.yaml
│   ├── ingress.yml
│   ├── istio
│   │   ├── istio-authorization-policy.yml
│   │   ├── istio-deploy.yml
│   │   ├── istio-gateway.yml
│   │   ├── istio-service-entry.yml
│   │   └── readme.md
│   ├── ns.yml
│   ├── pvc.yml
│   └── svc.yml
├── readme.md
└── server
    ├── customer1
    │   ├── Dockerfile
    │   ├── index.ts
    │   ├── package.json
    │   ├── package-lock.json
    │   └── tsconifg.json
    └── customer2
        ├── Dockerfile
        ├── index.ts
        ├── package.json
        ├── package-lock.json
        └── tsconfig.json
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
