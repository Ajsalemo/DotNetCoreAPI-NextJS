FROM node:10-alpine as build

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN yarn install

# Bundle app source
COPY . /usr/src/app
# Build the application
RUN yarn build

FROM node:10-alpine as production
COPY --from=build /usr/src/app /usr/src/app
COPY init_container.sh /opt/
COPY sshd_config /etc/ssh/

# Start and enable SSH
RUN apk add openssh \
     && echo "root:Docker!" | chpasswd \
     && chmod +x /opt/init_container.sh

# Set the working directory to /etc/ssh and generate SSH keys 
WORKDIR /etc/ssh/
RUN ssh-keygen -A
WORKDIR /usr/src/app

EXPOSE 3000

# CMD [ "yarn", "start" ]
ENTRYPOINT [ "/opt/init_container.sh" ]

