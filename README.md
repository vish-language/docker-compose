# docker-compose

This repository is a quick starter to help you learn how to use Docker Compose.

## What is Docker Compose?

Docker Compose lets you define and run multi-container applications using a
single `compose.yaml` file.

## Basic workflow

1. Create a `compose.yaml` file.
2. Start services:
   ```bash
   docker compose up -d
   ```
3. Check running services:
   ```bash
   docker compose ps
   ```
4. View logs:
   ```bash
   docker compose logs -f
   ```
5. Stop and remove services:
   ```bash
   docker compose down
   ```

## Example `compose.yaml`

```yaml
services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
```