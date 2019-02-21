.PHONY: up down clean-docker

up:
	docker-compose up -d && docker-compose logs -f react_app

test:
	docker-compose run --rm react_app npm test

down:
	docker-compose stop

clean-docker:
	docker system prune --all --volumes