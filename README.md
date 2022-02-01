## Test SoyYo

Prueba tecnica

### Instalacion
```
git clone https://github.com/jsrdriguez/soyyo-test.git

cd soyyo-test

npm install

npm start

```
### Docker

```
docker build -t co.com.soyyo.entity.filter-dev-1_0_0 .

docker run --name test-soyyo -p 3000:8000 -d co.com.soyyo.entity.filter-dev-1_0_0
```

### Test

```
npm test
```