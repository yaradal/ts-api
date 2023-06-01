default: run

run:
	npm run dev

build-docker:
	docker build -t ts-api:$$(git rev-parse --short HEAD) ./

push-minikube:
	minikube image load ts-api:$$(git rev-parse --short HEAD)

deploy-minikube:
	kubectl set image deployment ts-api ts-api=ts-api:$$(git rev-parse --short HEAD)

build-and-deploy-minikube: build-docker push-minikube deploy-minikube

apply-k8s:
	kubectl apply -f ./kubernetes/ts-api
	kubectl apply -f ./kubernetes/redis