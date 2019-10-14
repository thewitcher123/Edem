# Развертывание и установка платформы.

Здесь описывается пошаговая инструкция для развертывания и установки проекта [HubCore][] для разработки с пояснением некоторых моментов.

### Backend.

- Приложение [Django][] обслуживается [Gunicorn][] (приложение WSGI).
- Используем [NginX][] в качестве обратного прокси-сервера и статического файлового сервера. Статические и мультимедийные файлы постоянно хранятся в томах.
- База данных [Postgres][].
- [Python][] зависимости устанавливаются через [pipenv][], с помощью `Pipfile` и `Pipfile.lock` или [pip][] с помощью `requirements.txt`.
- Поддержка нескольких переменных среды для настройки находятся в файле `.env`.
- Тесты выполняются с использованием встроеного в [Django][] тестер на основе [unittest][].

Также для удобства доступен [Makefile][]. Возможно, вам придется использовать `sudo make` вместо просто `make`, потому что часто нужны команды `docker` и `docker-compose` привилегия администратора.

### Frontend.

- Frontend основывается на фрэймворке [React][] с библиотекой GUI [Blueprint][] и с библиотекой [Redux][] для контроля состоянията компонентов [React][].

- Метакомпилятор [Babel][] скомпелирует код `JavaScript` `ES6` стандарта в код `JavaScript` который поддерживают браузера.

- Сборщик проектов [Webpack][] c анализатором кода [ESlint][].

## Требования.

Вам нужно установить [Docker][], [Docker-Compose][], [Node.js][] и [npm][]. И для удобства если в системе отсутствует установить `make` утилиту.

## Загрузка кода.

Код можно скачать или с клонировать с репозитории GitHub'а.

```bash
git clone https://github.com/hubcoreorg/hubcore.org.git
```

Вы получите папку проекта `hubcore.org` с содержанием:

```
hubcore.org
├── hubcore.org/documentation
│   ├── hubcore.org/documentation/db.md
│   ├── hubcore.org/documentation/install.md
│   └── hubcore.org/documentation/stack.md
├── hubcore.org/files
│   └── hubcore.org/files/readme
│       ├── hubcore.org/files/readme/btn01.png
│       ├── hubcore.org/files/readme/btn02.png
│       ├── hubcore.org/files/readme/btn03.png
│       ├── hubcore.org/files/readme/btn04.png
│       ├── hubcore.org/files/readme/btn05.png
│       ├── hubcore.org/files/readme/btn06.png
│       ├── hubcore.org/files/readme/btn07.png
│       ├── hubcore.org/files/readme/btn08.png
│       ├── hubcore.org/files/readme/btn09.png
│       ├── hubcore.org/files/readme/btn10.png
│       └── hubcore.org/files/readme/btn11.png
├── hubcore.org/LICENSE
├── hubcore.org/README.md
├── hubcore.org/src
│   ├── hubcore.org/src/backend
│   │   ├── hubcore.org/src/backend/config
│   │   │   ├── hubcore.org/src/backend/config/nginx
│   │   │   │   └── hubcore.org/src/backend/config/nginx/conf.d
│   │   │   │       └── hubcore.org/src/backend/config/nginx/conf.d/local.conf
│   │   │   └── hubcore.org/src/backend/config/postgres
│   │   │       ├── hubcore.org/src/backend/config/postgres/docker-entrypoint-initdb.d
│   │   │       │   └── hubcore.org/src/backend/config/postgres/docker-entrypoint-initdb.d/init_postgres.sh
│   │   │       └── hubcore.org/src/backend/config/postgres/Dockerfile
│   │   ├── hubcore.org/src/backend/docker-compose.yml
│   │   ├── hubcore.org/src/backend/hubcore
│   │   │   ├── hubcore.org/src/backend/hubcore/api
│   │   │   │   ├── hubcore.org/src/backend/hubcore/api/admin.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/api/apps.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/api/__init__.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/api/models.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/api/tests.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/api/urls.py
│   │   │   │   └── hubcore.org/src/backend/hubcore/api/views.py
│   │   │   ├── hubcore.org/src/backend/hubcore/Dockerfile
│   │   │   ├── hubcore.org/src/backend/hubcore/frontend
│   │   │   │   ├── hubcore.org/src/backend/hubcore/frontend/admin.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/frontend/apps.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/frontend/__init__.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/frontend/models.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/frontend/tests.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/frontend/urls.py
│   │   │   │   └── hubcore.org/src/backend/hubcore/frontend/views.py
│   │   │   ├── hubcore.org/src/backend/hubcore/hubcore
│   │   │   │   ├── hubcore.org/src/backend/hubcore/hubcore/__init__.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/hubcore/settings.py
│   │   │   │   ├── hubcore.org/src/backend/hubcore/hubcore/urls.py
│   │   │   │   └── hubcore.org/src/backend/hubcore/hubcore/wsgi.py
│   │   │   ├── hubcore.org/src/backend/hubcore/manage.py
│   │   │   ├── hubcore.org/src/backend/hubcore/Pipfile
│   │   │   ├── hubcore.org/src/backend/hubcore/Pipfile.lock
│   │   │   └── hubcore.org/src/backend/hubcore/requirements.txt
│   │   ├── hubcore.org/src/backend/LICENSE
│   │   ├── hubcore.org/src/backend/README.md
│   │   └── hubcore.org/src/backend/scripts
│   │       └── hubcore.org/src/backend/scripts/do_backup.py
│   ├── hubcore.org/src/frontend
│   │   ├── hubcore.org/src/frontend/hubcore
│   │   │   ├── hubcore.org/src/frontend/hubcore/components
│   │   │   │   ├── hubcore.org/src/frontend/hubcore/components/HelloWorld.js
│   │   │   │   └── hubcore.org/src/frontend/hubcore/components/Hubcore.js
│   │   │   ├── hubcore.org/src/frontend/hubcore/favicon.ico
│   │   │   ├── hubcore.org/src/frontend/hubcore/index.html
│   │   │   ├── hubcore.org/src/frontend/hubcore/index.js
│   │   │   └── hubcore.org/src/frontend/hubcore/styles
│   │   │       └── hubcore.org/src/frontend/hubcore/styles/Hubcore.css
│   │   ├── hubcore.org/src/frontend/LICENSE
│   │   ├── hubcore.org/src/frontend/package.json
│   │   ├── hubcore.org/src/frontend/package-lock.json
│   │   ├── hubcore.org/src/frontend/README.md
│   │   └── hubcore.org/src/frontend/webpack.config.js
│   └── hubcore.org/src/Makefile
└── hubcore.org/TORs
    └── hubcore.org/TORs/v0-1.md

```

## Сборка.

Сборка всего проекта разделена на две части frontend и backend.

_**Предварительно требовани:**_ для сборки проекта требуется создать файл `.env`, где должно описаны переменные среды для сборки. Относительный путь к файлу: `./hubcore.org/src/backend/config/.env`.
Пример содержимого файла `.env` должнобыть:

```
DB_ENGINE=django.db.backends.postgresql_psycopg2
DB_NAME=hubcore_db
DB_USER=hubcore_user
DB_PASSWORD=exaple_password_1234
DB_HOST=postgres
DB_PORT=5432

SECRET_KEY=1234567890
DEBUG=1
```

Пояснение переменных:

- `DB_ENGINE` - Движок спомощью которого django работает с БД. В нашем случае django.db.backends.postgresql_psycopg2
- `DB_NAME` - Имя БД
- `DB_USER` - Пользователь
- `DB_PASSWORD` - Пароль
- `DB_HOST` - Имя сервера, где поднята БД. В нашем случае postgres
- `DB_PORT` - Port сервера, где поднята БД. В нашем случае 5432
- `SECRET_KEY` - Секретный ключ для нашего django приложения.
- `DEBUG` - Разрешить запускать врежиме отладке.

### Сборка frontend'a.

- Переходим в директорию проекта `frontend`.

```bash
cd hubcore.org/src/frontend
```

- Спомощью пакетного менеджера `npm` выполняем сборку фронтенда.

```bash
npm run build
```

- Мы получим собранный проект фронтенда в папке `dist` в текущей дериктории. Содержиме данной директории требуется скопировать в проект бэкенда, а именно в директорию приложения `frontend`.

```bash
mkdir -p ../backend/hubcore/frontend/templates/frontend
cp -r ./dist/static ../backend/hubcore/frontend
cp -f ./dist/index.html ../backend/hubcore/frontend/templates/frontend/index.html
```

- Теперь собранный файлу frontend'а находится в проекте backend'а . Чтож можно приступать к сборке `backend'а`.

### Сборка backend'a.

- Переходим в директорию проекта `backend`. С учетом, что текущая директория является `frontend` выполним следующую команду:

```bash
cd ../backend
```

- Теперь приступим развёртыванию [Docker][] контейнеров используя утилиту [Docker-Compose][].

**_Замечание:_** если у Вас не настроен запуск [Docker][] без прав суперпользователи, то перед полезной командой используйте команду `sudo` для ОС основанных на `Debian`.

```bash
docker-compose build
```

- Выполним подготовку/сборку статических файлов. Для того, что бы [Nginx][] мог ссылать к ним при запросе клиентом. Если этого не выполнить, то при запросе файлов `.js`, `.css` и другие статические файлы клиент получит ошибку 404.

```bash
docker-compose run --rm hubcore ./manage.py collectstatic --no-input
```

**_Замечание:_** после выполнения выше указанной команды мы получим директорию `static` защищённую от записи. Если требуется произвести манипуляции с данной папкой, то требуется проводить действие от имени администратора/суперпользователя.

### Примечание.

Все действия по сборке как `frontend'а`, так и `backend'а` можно выполнить командой при этом текущая директория должна быть `src` или `hubcore.org/src`. Так как все команды для утилиты `make` требуется проводить находясь в директории, где находится файла `Makefile`.

```bash
make build
```

**_Замечание:_** не забудьте про команду `sudo`, если [Docker][] и [Docker-Compose][] без прав администратора/суперпользователя не запускается у Вас.

## Создание новых миграций на основе изменений.

Если вы внесли изменения в модели или создали новые требуется произвести подготовку для новой миграции с помощью команды:

```bash
docker-compose run --rm hubcore ./manage.py makemigrations
```

или

```bash
make makemigrations
```

## Применение миграции.

Для миграции изменений моделей в базу данных требуется выполнить команду:

```bash
docker-compose run --rm hubcore ./manage.py migrate --no-input
```

или

```bash
make migrate
```

## Сборка статических файлов.

Требуетс для того, что бы [Nginx][] мог ссылать к ним при запросе клиентом. Если этого не выполнить, то при запросе файлов .js, .css и другие статические файлы клиент получит ошибку 404.

```bash
docker-compose run --rm hubcore ./manage.py collectstatic --no-input
```

или

```bash
make collectstatic
```

## Запуск.

Для запуска сервера на основе собранного [Docker][] контейнеров требуется выполнить команду:

```bash
docker-compose up -d
```

или

```bash
make run
```

## Остановка.

Для остановки сервера на основе собранного [Docker][] контейнеров требуется выполнить команду:

```bash
docker-compose down -v
```

или

```bash
make stop
```

## Тесты.

**Внимание** в данный момент не реализовано.

- `make check`
- `make test`

## Очистка от сборочных файлов.

Для очистки требуется произвести ряд команд. При это у Вас должна быть текущая директория `src` или `hubcore.org/src/`.

### Очистка backend'a.

```bash
rm -rf ./backend/.pytest_cache
find . -type f -name "*.pyc" -delete
find . -type d -name "__pycache__" -delete
rm -rf ./backend/hubcore/frontend/static
rm -rf ./backend/hubcore/frontend/templates
```

или

```bash
make clean_backend
```

### Очистка frontend'a.

```bash
rm -rf ./frontend/dist
```

или

```bash
make clean_frontend
```

### Примечание.

Для того чтобы выполнить очистку сразу в `frontend'е` и в `backend'е` можно воспользоваться одной командой:

```bash
make clean
```

## Очистка от не задействованных [Docker][] контейнеров.

Для очистки от не задействованных и/или промежуточных при разработке [Docker][] контейнеров требуется выполнить команду:

```bash
docker system prune -f
```

или

```bash
make dockerclean
```

## Настройка [VS Code][] для разработки и отладки.

### Backend.

**Внимание** в данный момент нахотится в описании.

### Frontend.

**Внимание** в данный момент нахотится в описании.

[hubcore]: https://github.com/hubcoreorg/hubcore.org
[docker]: https://www.docker.com/
[docker-compose]: https://docs.docker.com/compose/
[django]: https://www.djangoproject.com/
[gunicorn]: http://gunicorn.org/
[nginx]: https://www.nginx.com/
[postgres]: https://www.postgresql.org/
[python]: https://www.python.org/
[pipenv]: https://docs.pipenv.org/
[pip]: https://pip.pypa.io/en/stable/
[requirements.txt]: https://pip.pypa.io/en/stable/user_guide/#id12
[unittest]: https://docs.python.org/3/library/unittest.html#module-unittest
[makefile]: https://www.gnu.org/software/make/manual/make.html
[vs code]: https://code.visualstudio.com/
[react]: https://reactjs.org/
[blueprint]: https://blueprintjs.com/
[redux]: https://redux.js.org/
[npm]: https://www.npmjs.com/
[node.js]: https://nodejs.org/en/
[webpack]: https://webpack.js.org/concepts/
[babel]: https://babeljs.io/docs/en/
[eslint]: https://eslint.org/
