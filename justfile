image-name := "chouqe/furs_next-image"
container-name := "furs_next"
host-port := "3000"
internal-port := "3000"

build:
    docker build -t {{image-name}}:latest .

run:
    docker run -d \
      --name {{container-name}} \
      -p {{host-port}}:{{internal-port}} \
      --env-file .env.local \
      {{image-name}}:latest

push:
    docker push {{image-name}}:latest

deploy: build push
    echo "✅ Образ собран и запушен в Docker Hub"
