
#########################################################################
#							Основные цели.								#
#########################################################################

#
all: build test

# Запуск Hubcore.
run: run_backend

# Сборка всего проекта как BackEnd`а, так и FrontEnd`а.
build: build_backend build_frontend

# Запуск полной проверки BackEnd`а и FrontEnd`а.
check: clean_backend check_frontend

# Запуск всех тестов BackEnd`а и FrontEnd`а.
test: test_backend test_frontend

# Очистка BackEnd`а и FrontEnd`а.
clean: clean_backend clean_frontend



#########################################################################
#					Цели для работы с BackEnd`ом.						#
#########################################################################

PATH_BACKEND = backend/docker-compose.yml
DOCKER_COMPOSE = docker-compose -f $(PATH_BACKEND)

# Запуск BackEnd`а.
run_backend:
	$(DOCKER_COMPOSE) up -d

# Остановка BackEnd`а.
stop_backend:
	$(DOCKER_COMPOSE) down -v

# Сборка Docker контейнеров для BackEnd`а.
build_backend:
	$(DOCKER_COMPOSE) build

# Запуск проверки BackEnd`а.
check_backend:

# Запуск тестов BackEnd`а.
test_backend:

# Очистка BackEnd`а.
clean_backend:
	rm -rf ./backend/.pytest_cache
	find . -type f -name "*.pyc" -delete
	rm -rf $(find . -type d -name __pycache__)

# Выполнить миграцию на стороне BackEnd`а.
migrate:
	$(DOCKER_COMPOSE) run --rm hubcore ./manage.py migrate --no-input

#
collectstatic:
	$(DOCKER_COMPOSE) run --rm hubcore ./manage.py collectstatic --no-input

# Запустить очистку Docker контейнеров.
dockerclean:
	docker system prune -f
	docker system prune -f --volumes



#########################################################################
#					Цели для работы с FrontEnd`ом.						#
#########################################################################

PATH_FRONTEND = ./frontend
NPM = npm --prefix $(PATH_FRONTEND)

# Устанавливаем модули для FrontEnd`а.
install_node_modules:
	$(NPM) install --save

# Запуск Webpack сервера для разработки FrontEnd`а.
run_frontend:
	$(NPM) run start

# Сборка FrontEnd`а.
build_frontend:
	$(NPM) run build

# Запуск проверки FrontEnd`а.
check_frontend:

# Запуск тестов FrontEnd`а.
test_frontend:
	$(NPM) run test

# Очистка FrontEnd`а.
clean_frontend:
	rm -rf ./frontend/dist
