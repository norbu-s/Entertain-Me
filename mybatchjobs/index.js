const require


var CronJob = require('cron').CronJob;  
new CronJob('* * * * * *', function() {  
    console.log('This is a test batch job started at ' + new Date());  
}, null, true, '');  