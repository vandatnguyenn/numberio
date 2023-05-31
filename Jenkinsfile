pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'Success'
            }
        }
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/vandatnguyenn/numberio.git'
            }
        }
    }
}