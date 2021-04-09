# da-cicd ([![Build Status](https://travis-ci.com/dalice157/da-cicd.svg?branch=main)](https://travis-ci.com/dalice157/da-cicd))

- [travis-ci 文件](https://docs.travis-ci.com/)
- [ci pages](https://docs.travis-ci.com/user/deployment/pages/)

## 可以部署到 gitHubPage gitHub Releases
```
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN  # Set in the settings page of your repository, as a secure variable
  keep_history: true
  on:
    branch: main
```