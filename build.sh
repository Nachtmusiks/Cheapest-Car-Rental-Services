npm install
[ $? -eq 0 ]  || exit 1

npm run lint
[ $? -eq 0 ]  || exit 1

npm test
[ $? -eq 0 ]  || exit 1

npm run plato
[ $? -eq 0 ]  || exit 1

node ../platocheck.js
[ $? -eq 0 ]  || exit 1

