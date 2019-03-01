.PHONY: up down clean-docker

up:
	docker-compose up -d && docker-compose logs -f react_app_music

test:
	docker-compose run --rm react_app_music npm test

down:
	docker-compose stop

clean-docker:
	docker system prune --all --volumes