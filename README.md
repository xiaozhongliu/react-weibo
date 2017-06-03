# react-weibo
A react & node full-stack sample project.

### Special features offer:
Best react practices from create-react-app adopted.  
React framework dva adopted to make redux & router much easier.  
Node 8 is coming, embrace async/await globally (from back to front).  
Api access ctrl via token & ts.  
Elaborate api req log (in Elastic Filebeat compatible json format).  
Flexible req params validation.  
Log online view and its access ctrl via basic http auth.  
Reasonable config merging mechanism.  
Definite DRY, AOP, ES6, OCD, etc.  

### Frontend Techs involved:
|Aspect         |Tech               |
|:---           |:---               |
|fx             |react              |
|state mana     |dva(redux)         |
|css            |scss               |
|build & test   |react-scripts      |
|debug          |vscode Debugger for Chrome|

### Backend Techs involved:
|Aspect         |Tech               |
|:---           |:---               |
|fx             |express            |
|memcache       |redis              |
|synchronization|async/await        |
|validation     |express-validator  |
|log            |log4js             |
|log auth       |http-auth          |
|host           |pm2                |

### Start using:
```
1. cnpm install
2. npm run build
3. node app     (runs as the api service in dev mode, or the entire project in prod mode)
4. npm start    (runs the frontend app in dev mode)
```