# To test the production build with cleared data
all: down frontbuild buildcontainers launchcontainers
	open http://localhost

launchcontainers:
	docker-compose up -d

frontbuild:
	cd frontend && NODE_ENV=production webpack

down:
	docker-compose down

buildcontainers:
	docker-compose build


# For development (with file watching and volumes)
dev: backdev frontdev

backdev:
	docker-compose -f docker-compose.yml -f docker-compose.watch.yml up -d

frontdev:
	cd frontend && NODE_ENV=development yarn dev

logs:
	docker-compose logs -f
