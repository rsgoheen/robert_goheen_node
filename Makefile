foreverstart:
	mkdir -p logs/forever
	forever start -a -l forever.log -o logs/forever/out.log -e logs/forever/err.log --minUptime 5000 --spinSleepTime 2000 ~/webapps/robert_goheen_node/app.js

foreverstop:
	forever stop ~/webapps/robert_goheen_node/app.js
