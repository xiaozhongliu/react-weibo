#!/bin/bash
LOGPATH=[root_path]/log/pm2
logFile=$LOGPATH/out.log
yesterday=`date --date='1 days ago' +%Y%m%d`
logOfLastDay=$LOGPATH/$yesterday.log
cp $logFile $logOfLastDay
> $logFile