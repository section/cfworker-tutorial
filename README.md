# Deploy a Cloudflare Worker equivalent App on Section Tutorial

This repo holds the sample code for usage with the tutorials hosted on Section.io's documentations.

Refer to [Tutorials/CloudFlare Workers](https://www.section.io/docs/tutorials/cf-worker) for detailed instructions on deploying.

```bash
# Build and push react image
USER=section
IMAGENAME=cf-worker
TAG=0.0.1
GITHUB_TOKEN=<INSERT_TOKEN> # https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

docker build . --tag ghcr.io/$USER/$IMAGENAME:$TAG
docker run -it --rm -p 1337:3000 ghcr.io/$USER/$IMAGENAME:$TAG

echo $GITHUB_TOKEN | docker login ghcr.io -u $GITHUB_USER --password-stdin
docker push ghcr.io/$USER/$IMAGENAME:$TAG

# Deploy k8s yamls
# - Change image name in k8s/workers-deployment.yaml if using your own image instead
kubectl apply -f ./k8s/
```
