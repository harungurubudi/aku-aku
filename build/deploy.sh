chmod 600 .ssh/id_rsa
apk add --no-cache curl rsync openssh
timestamp=$(date +%s)
ssh -i .ssh/id_rsa -o StrictHostKeyChecking=no bejo@$STAGING_HOST "mkdir -p ~/webapp/releases/$timestamp"
rsync -avz --exclude '.git' -e 'ssh -i .ssh/id_rsa -o StrictHostKeyChecking=no' . bejo@$STAGING_HOST:~/webapp/releases/$timestamp
ssh -i .ssh/id_rsa -o StrictHostKeyChecking=no bejo@$STAGING_HOST <<EOF
    set -x

    rm -f ~/webapp/current
    ln -s ~/webapp/releases/$timestamp ~/webapp/current
    sudo systemctl restart webapp.service

    cd ~/webapp/releases
    ls -t | tail -n +3 | xargs rm -rf --
EOF
