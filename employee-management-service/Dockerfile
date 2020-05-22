FROM openjdk:8-jdk-alpine

VOLUME /temp
ARG JAR_FILE

ADD ${JAR_FILE}Z app.jar

ENTRYPOINT [ "java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar" ]
# COPY ./target/demo-docker-0.0.1-SNAPSHOT.jar /usr/app/

# WORKDIR /usr/app

# RUN sh -c 'touch demo-docker-0.0.1-SNAPSHOT.jar'

# ENTRYPOINT ["java","-jar","demo-docker-0.0.1-SNAPSHOT.jar"]