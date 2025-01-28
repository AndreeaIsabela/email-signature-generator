# email-signature-generator

This repository contains a **Monorepo** project that includes the following services:

- **Client** (Vue.js with TS frontend)
- **Server** (Express.js with TS backend)
- **Background** (Node.js with TS service for background tasks)

### Prerequisites
- **Docker**: Make sure Docker is installed on your machine.

## Running the Project with Docker Compose

### Step 1: Clone the Repository

```bash
git clone https://github.com/AndreeaIsabela/email-signature-generator
cd email-signature-generator
```

### Step 2: Build and Start All Services

To start the project and all its services using Docker Compose, run the following command:

```bash
docker compose -f 'docker-compose.yml' up -d --build 
```

### Step 3: Access the Services

Once the Docker containers are up and running, you can access the following services:

- **Client (Vue.js frontend)**: Open your browser and go to [http://localhost:8080](http://localhost:8080)
- **Server (Express.js backend API)**: Open your browser and go to [http://localhost:3000](http://localhost:3000)
- **Background (Node.js worker)**: The background worker runs in the background and processes tasks asynchronously. It does not expose a port for direct access.
- **RabbitMQ Management Interface**: Open your browser and go to [http://localhost:15672](http://localhost:15672)
  - **Username**: `admin`
  - **Password**: `password`

These services are now running and accessible locally.

As a webhook url please use this link ->   [https://webhook.site/b139913b-25b0-4e24-a889-331a2cbecea3](https://webhook.site/b139913b-25b0-4e24-a889-331a2cbecea3)

Check the generated signature here -> [https://webhook.site/#!/view/b139913b-25b0-4e24-a889-331a2cbecea3/ddf0b169-7c15-4b62-81e9-b259af4aef2b/1] (https://webhook.site/#!/view/b139913b-25b0-4e24-a889-331a2cbecea3/ddf0b169-7c15-4b62-81e9-b259af4aef2b/1)

### Step 4: Stop and remove the Services

```bash
docker compose -f 'docker-compose.yml' down
```