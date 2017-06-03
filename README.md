# react-weibo
A react & node full-stack sample project.

![](https://ymj1fa.dm2302.livefilestore.com/y4m5MiNcRuioUaG0CagyHl1nkH7TZkCiNDrWYWhciXK9ZSMoMzugQUpb0XOMHBclIAQdy0IsxUW85Q_NYO1h-nkHyltay5X4AEDYYYsXBMVywGmCPT0lfKXFi5c5lb0V8FKVVb9yfsBoW1H6AiW9BGJpB2T8RUfj8YgtJkinjvN9JU01bwDK9OrLKNurrj-bQzg4e8a0u4USSlOJ0LBg_KiAg?width=425&height=747&cropmode=none)

![](https://oqe6kq.dm2302.livefilestore.com/y4mNpmBX_Tm606zZ-sh9zJAS2OUp_HRrjAzXNJ_kPoueLgXdstutOH5C0dU64hI83u3W74mQ87Egh6P7BEJlGVhZxf2o_bwI7AcsetTm34wpQkHQDaHjTTTGVPnB9G3iZrC6ZvEF0k6DHWIBL_1YBhVhZ74FfTt6lZlExk4H9WH6rkZtX1e4C6Hxt-rmfA_9jDbe-EiUrgOjN5iH6ZAgiqL1g?width=424&height=745&cropmode=none)

### Special features offer:
- Best react practices from create-react-app adopted.
- React framework dva adopted to make redux & router much easier.
- Node 8 is coming, embrace async/await globally (from back to front).
- Api access ctrl via token & ts.
- Elaborate api req log (in Elastic Filebeat compatible json format).
- Flexible req params validation.
- Log online view and its access ctrl via basic http auth.
- Reasonable config merging mechanism.
- Definite DRY, AOP, ES6, OCD, etc.
- Host app with pm2 conveniently.

### Frontend Techs involve:
|Aspect         |Tech               |
|:---           |:---               |
|fx             |react              |
|state mana     |dva (redux)        |
|css            |scss               |
|build & test   |react-scripts      |
|debug          |vscode Debugger for Chrome|

### Backend Techs involve:
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
# DEV
1. cnpm i
2. npm run build
3. node app   (runs as api service in dev mode)
4. npm dev  (runs the frontend app in dev mode)

# PROD
1. deploy with built frontend stuffs
2. npm run prod
```