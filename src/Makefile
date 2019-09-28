
PATH_CONF = backend/docker-compose.yml
DOCKER_COMPOSE = docker-compose -f $(PATH_CONF)

#########################################################################
#							Основные цели.								#
#########################################################################

#
all: build test

# 
run: run_backend

# Сборка BackEnd`а и FrontEnd`а.
build: build_backend build_frontend

# Запуск проверки BackEnd`а и FrontEnd`а.
check: clean_backend check_frontend

# Запуск тестов BackEnd`а и FrontEnd`а.
test: test_backend test_frontend

# Очистка BackEnd`а и FrontEnd`а.
clean: clean_backend clean_frontend


#########################################################################
#					Цели для работы с BackEnd`ом.						#
#########################################################################

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

#
migrate:
	$(DOCKER_COMPOSE) run --rm hubcore ./manage.py migrate --no-input

#
collectstatic:
	$(DOCKER_COMPOSE) run --rm hubcore ./manage.py collectstatic --no-input

#
dockerclean:
	docker system prune -f
	docker system prune -f --volumes


#########################################################################
#					Цели для работы с FrontEnd`ом.						#
#########################################################################

#
build_frontend:

#
check_frontend:

#
test_frontend:

#
clean_frontend:
