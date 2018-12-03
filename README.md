Acml Project for The Guc 

Prerequisites :
1-Install Docker 
2-Install Docker Composer 

Running Program :
Commands 
1 -first of all , clone the project move to laradock folder (cd laradoc)
2- build and run the containers of current images using command :
sudo docker-compose up -d nginx mysql phpmyadmin redis workspace websocket front-end 

2- another option is to build every image  
docker-compose build mysql
docker-compose build phpmyadmin
docker-compose build redis
docker-compose build workspace
docker-compose build websocket
docker-compose build front-end
sudo docker-compose up -d nginx mysql phpmyadmin redis workspace websocket front-end 

3-Enter the workspace container  by 
sudo docker-compose exec workspace bash
and run the artisan command :php artisan migrate
to migrate the database for the first time 

Services Running : 9 services isn't worth a bonous !
laradock_docker-in-docker_1_cc061f403f68   dockerd-entrypoint.sh            Up      2375/tcp                                
laradock_front-end_1_80a5eecf809f          npm start                        Up      0.0.0.0:3000->3000/tcp                  
laradock_mysql_1_bd0dbea7b92b              docker-entrypoint.sh mysqld      Up      0.0.0.0:3306->3306/tcp, 33060/tcp       
laradock_nginx_1_87bf712919a0              /bin/bash /opt/startup.sh        Up      0.0.0.0:443->443/tcp, 0.0.0.0:80->80/tcp
laradock_php-fpm_1_3e35d41e707a            docker-php-entrypoint php-fpm    Up      9000/tcp                                
laradock_phpmyadmin_1_4fefcf88ec12         /run.sh supervisord -n           Up      0.0.0.0:8080->80/tcp, 9000/tcp          
laradock_redis_1_c7537a1ff335              docker-entrypoint.sh redis ...   Up      0.0.0.0:6379->6379/tcp                  
laradock_websocket_1_6f261064b018          node app                         Up      0.0.0.0:8890->8890/tcp                  
laradock_workspace_1_719c50406763          /sbin/my_init                    Up      0.0.0.0:2222->22/tcp   

example of env file:
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:3T0YW51CDXQViVQUmtjk0sWFiKgTb8+fET8GASL0OFI=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack



//docker
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=default
DB_USERNAME=default
DB_PASSWORD=secret

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=lost.found.guc@gmail.com
MAIL_PASSWORD=267788954
MAIL_ENCRYPTION=tls

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

JWT_SECRET=l987q3R0KlVDTFxSs7SQ8HKRBOSAhoKz



