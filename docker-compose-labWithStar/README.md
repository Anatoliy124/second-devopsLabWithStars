# это лаба 2 со звездой
## Что надо:
* Написать “плохой” Docker compose файл, в котором есть не менее трех “bad practices” по их написанию
* Написать “хороший” Docker compose файл, в котором эти плохие практики исправлены
* В Readme описать каждую из плохих практик в плохом файле, почему она плохая и как в хорошем она была исправлена, как исправление повлияло на результат
* После предыдущих пунктов в хорошем файле настроить сервисы так, чтобы контейнеры в рамках этого compose-проекта так же поднимались вместе, но не "видели" друг друга по сети. В отчете описать, как этого добились и кратко объяснить принцип такой изоляции
# Подготовка
### установка docker-compose.
![image](install.png)
docker-compose уже установлен
# Делаем докерфайлы
### плохой
![image](bad.png)
![image](bad-continue.png)
### хороший
![image](Good.png)
![image](good-continue.png)
## Что не так:
* В "плохом" файле используется устаревшая версия, где нет новых фитч, а в зорошем используется стабильная новая проверенная версия 3.8, где есть новый функционал.
* В плохом файле есть ошибка с volume, так как оно монтируется как `./app:/app`, это определение не соответствует привычной структуре `/usr/src/app`, это усложняет поддержку проекта.
* Использование latest вместо указания версии, в новой версии все может поменятся - было во второй лабе 
* в плохом файле нет секретов, ссылаться на них гораздо безопаснее
# Сеть
### Добился изоляции, создав для сервиса уникальную сеть с драйвером bridge, это обеспечилр сетевую изоляцию, так как теперь сервисы подключены только к своим сетям, и поэтому они не взаимодейсвуют друг с другом.
![image](Good.png)

