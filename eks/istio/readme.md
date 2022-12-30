# Istio🦜

To define behavior of the sidecar container => ( Envoy pod ) for handling outbound traffic from the application. We can use `outboundTrafficPolicy`.

In production we can set: </br>
```outboundTrafficPolicy
outboundTrafficPolicy:
  mode: REGISTRY_ONLY
```

Make changes  👇

```istio-configmap-istio-edit
kubectl edit configmap istio -n istio-system
```
![image](https://user-images.githubusercontent.com/70542481/210065387-d77b555c-3ba1-4128-9e8f-a8c11f7eaa5f.png)


|Name	         |  Description |
|--------------| -------------|   
|REGISTRY_ONLY |  outbound traffic will be restricted to services defined in the service registry as well as those defined through ServiceEntries|
| ALLOW_ANY	| outbound traffic to unknown destinations will be allowed, in case there are no services or ServiceEntries for the destination port |

</br></br>
Service Entry: A service entry describes the `properties` of a service (DNS name, VIPs, ports, protocols, endpoints).
```istio-apply-service-entry
kubectl apply -f spotlight-devops/eks/istio/istio-service-entry.yml
```
</br></br>
Authorization Policy: Authorization policy supports CUSTOM, DENY and ALLOW actions for access control.

<b>Deny All 👇</b>
</br>
```istio-apply-service-entry
kubectl apply -f spotlight-devops/eks/istio/istio-authorization-policy.yml
```
