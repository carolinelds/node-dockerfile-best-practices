# Multi stage build study documentation [in progress]

This app is a simple random name picker based on NodeJS, React, Postgres and Prisma. It uses Docker containers and Nginx for deploy on AWS EC2.

## Backend optimization (production image) 

Local size:
- before: 1.36 GB
- after: 388 MB

ECR size:
- before: 506.54 MB
- after: 124.55 MB
- % of decrease: 75.41 %

Request response time on production:
- before: 
- after: 
- % of decrease:

Security scan results with Trivy:
- before: 107 (HIGH: 103, CRITICAL: 4)
- after: 1 (HIGH: 0, CRITICAL: 1)
```
trivy image --severity HIGH,CRITICAL --ignore-unfixed <image>
```

### Reference files: 
- ./node-react/back-end/Dockerfile.old
- ./node-react/back-end/Dockerfile