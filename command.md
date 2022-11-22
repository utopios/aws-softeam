## Création d'un repository sur ecr
aws ecr create-repository --repository-name first-repository --region eu-west-3

## Créer une image docker en local
docker build -t <host/nom_image:tag> <chemin_vers_dockerfile>

## Créer un tag sur une image locale de docker 
docker tag <image_local> <repos_aws>

## Connecter docker cli à notre ecr
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin 639962416620.dkr.ecr.<region>.amazonaws.com

## push vers ecr
docker push tag

## pour récupérer les logs d'un container
docker log <id Ou nom container>

## Commande pour créer un context ecs
docker context create ecs <nom_context>

## commande pour utiliser un context
docker context use <nom_context>

## commande pour démarrer des conteneurs à l'aide de docker compose
docker compose up