# To test the production build with cleared data
all: down frontbuild backbuild buildcontainers launchcontainers
	open http://localhost

launchcontainers:
	docker-compose up -d

frontbuild:
	cd frontend && yarn && NODE_ENV=production yarn build

backbuild:
	cd backend && yarn

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
