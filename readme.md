First use case 
    domain1.myapp.com -> Customer1
    domain2.myapp.com -> Customer2

Second use case 
    Create a EKS Cluster using YAML file with specifice Permission(IAM)

Third use case
    We have 2 namespace -> We need two Persistent volume to store the data of each namespace.
    There i one more namespace for storing system level files  -> Prometheus

Fourth use case
    Nginx Ingress Service 
        domain1.myapp.com
        domain2.myapp.com

Fifth use case:
    There are 2 customer namespace each with 3 Replica of React app

                    React Appliaction
        customer1                      customer2 
    customer1-react-1               customer2-react-1
    customer1-react-2               customer2-react-2
    customer1-react-3               customer2-react-3
    
                    Node Application 
    NodeApplication 
    



