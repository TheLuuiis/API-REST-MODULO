pipeline {
    agent any

    stages {
        stage('Clonacion del Repositorio') {
            steps {
                git branch: 'master', url: 'https://github.com/TheLuuiis/API-REST-MODULO'
            }
        }
        stage('Construccion de Docker image') {
            steps{
                script {
                    docker.build('myapp-modulo:v1', '.')
                }
            }
        }
        stage('Desplegar contenedores docker') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
    post {
        always {
            emailext(
                subject: "Jenkins Build ${currentBuild.fullDisplayName}",
                body: "Build ${currentBuild.fullDisplayName} completed of myapp-modulo, 😊",
                to: "cesar.gonzalez@est.iudigital.edu.co"
            )
        }
    }
}