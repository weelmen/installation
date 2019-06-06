FROM ubuntu:latest      

RUN apt-get update -yq && apt-get upgrade -yq && \
apt-get install -yq curl git nano sudo

RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

COPY . .
RUN npm install
RUN npm start
#RUN cd project && npm start
EXPOSE 8080
CMD cd project && npm start


#FROM ub:latest
#
#RUN apt update \
 #&& apt install -y \
  #  curl \
   # gnupg \
    #gcc \
    #g++ \
    #make \
 #&& curl -sL https://deb.nodesource.com/setup_10.x | bash - \
 #&& apt install -y nodejs \
#&& rm -rf /var/lib/apt/lists/*

# Bundle app source
# Trouble with COPY http://stackoverflow.com/a/30405787/2926832
#COPY . /src

# Install app dependencies
#RUN cd /src; npm install
#RUN node git
#RUN cd node-express-realworld-example-app

# Binds to port 8080
#EXPOSE  8080
#RUN npm run dev

#  Defines your runtime(define default command)
# These commands unlike RUN (they are carried out in the construction of the container) are run when the container
#CMD ["node", "/src/index.js"]

