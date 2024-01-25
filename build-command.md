```bash
KIE_TOOLS_BUILD__buildContainerImages=true \
KIE_TOOLS_BUILD__runTests=false \
KIE_TOOLS_BUILD__runIntegrationTests=false \
DEV_DEPLOYMENT_BASE_IMAGE__account="thiagoelg" \
DEV_DEPLOYMENT_KOGITO_QUARKUS_BLANK_APP_IMAGE__account="thiagoelg" \
DEV_DEPLOYMENT_DMN_FORM_WEBAPP_IMAGE__account="thiagoelg" \
ONLINE_EDITOR__devDeploymentBaseImageAccount="thiagoelg" \
ONLINE_EDITOR__devDeploymentKogitoQuarkusBlankAppImageAccount="thiagoelg" \
ONLINE_EDITOR__devDeploymentDmnFormWebappImageAccount="thiagoelg" \
ONLINE_EDITOR__devDeploymentImagePullPolicy="Always" \
ONLINE_EDITOR__corsProxyUrl="https://daily-dev-cors-proxy-kie-sandbox.rhba-0ad6762cc85bcef5745bb684498c2436-0000.us-south.containers.appdomain.cloud" \
ONLINE_EDITOR__extendedServicesUrl="https://daily-dev-kie-sandbox-extended-services-kie-sandbox.rhba-0ad6762cc85bcef5745bb684498c2436-0000.us-south.containers.appdomain.cloud" \
pnpm -F online-editor... -F dev-deployment-base-image... -F dev-deployment-dmn-form-webapp-image... -F dev-deployment-kogito-quarkus-blank-app-image... build:prod
```