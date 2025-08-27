image-name := "furs_next-image"
container-name := "furs_next"
network-name := "furs-network"
host_port := "3000"
internal_port := "3000"

build:
    docker build -t {{image-name}}:latest  .

run:
    docker run -d --name {{container-name}} --network {{network-name}} -p {{host_port}}:{{internal_port}} {{image-name}}:latest

stop:
    docker stop {{container-name}}
    docker rm {{container-name}}
