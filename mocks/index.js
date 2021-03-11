const jsonServer = require('json-server');
const cities = require('./cities');
const forecasts = require('./forecasts');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const router = jsonServer.router({
  ...cities,
  ...forecasts,
});

server.use(middlewares);

const getRandomTemperature = () => {
  const min = -10;
  const max = 43;

  const rand = Math.floor(Math.random() * (max - min) + min);

  return {
    celsius: rand,
    fahrenheit: (rand * 9) / 5 + 32,
  };
};

const getRandomWeatherCondition = () => {
  const conditions = ['sunny', 'hail', 'raindrops', 'showers'];
  const rand = Math.floor(Math.random() * 5347);
  const condition = conditions[rand % conditions.length];

  return condition;
};

server.get('/cities', (req, res) => {
  const { q } = req.query;
  let list = { ...cities };

  if (q) {
    list = {
      cities: list.cities.filter(
        (c) => c.name.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) > -1
      ),
    };
  }

  res.send(list.cities);
});

server.get('/forecasts/:city', (req, res) => {
  const { city: cityName } = req.params;
  const list = { ...forecasts };

  const city = list.forecasts.find(
    (c) => c.city.name.toLocaleLowerCase() === cityName.toLocaleLowerCase()
  );

  // Inject the timestamp for the next 13 days
  // today inclusive
  const today = new Date();
  const ts = [today.getTime()];

  const curLenth = ts.length;
  for (let i = 0; i < 13 - curLenth; i++) {
    const nextDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + i + 1
    );

    ts.push(nextDay.getTime());
  }

  res.send({
    ...city,
    days: city.days.map((d) => ({
      ...d,
      timestamp: ts.shift(),
      weather: {
        ...d.weather,
        temperatures: {
          ...d.weather.temperatures,
          current: {
            ...getRandomTemperature(),
          },
          average: {
            ...getRandomTemperature(),
          },
        },
        condition: getRandomWeatherCondition(),
      },
    })),
  });
});

server.use(router);
server.listen(3030, () => {
  console.log('JSON Server is running on http://localhost:3030');
});
