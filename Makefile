IMAGE_NAME = loans-service

env:
	cp .env.example .env
build:
	docker build -t $(IMAGE_NAME) .
up:
	docker compose up -d
down:
	docker compose down
logs:
	docker compose logs -f 

