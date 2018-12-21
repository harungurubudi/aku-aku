chmod 600 .ssh/id_rsa
apk add --no-cache curl rsync openssh
rsync -av --delete -e "ssh -i .ssh/id_rsa -o StrictHostKeyChecking=no" . bejo@$STAGING_HOST:~/webapp
ssh -i .ssh/id_rsa -o StrictHostKeyChecking=no bejo@$STAGING_HOST <<EOF
    cd ~/webapp
    npm install
    npm run build
EOF
