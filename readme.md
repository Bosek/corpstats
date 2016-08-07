# corpstats
[![Build Status](https://travis-ci.org/Bosek/corpstats.svg?branch=master)](https://travis-ci.org/Bosek/corpstats)

corpstats is a small library for fetching data from [ZKillboard](http://zkillboard.com) or [EVE-Kill](http://eve-kill.net)(Not tested yet, but theoretically). Data is then wrapped into Javascript class objects. Fancy!

### Dependencies

The only dependency is `node-fetch`.

### Install

`npm install corpstats --save`

### Usage

```javascript
import corpstats from 'corpstats';
```

gives you access to **class objects**:

```javascript
class Alliance { ID, Name }
class Character { ID, Name }
class Corporation { ID, Name }
class Faction { ID, Name }

class Item { Flag, Singleton, TypeID, QtyDropped, QtyDestroyed }
class Position { X, Y, Z }
class ZKB { LocationID, Hash, TotalValue, Points }

class Attacker { Alliance, Character, Corporation, Faction, DamageDone, FinalBlow, SecurityStatus, ShipTypeID, WeaponTypeID }
class Victim { Alliance, Character, Corporation, Faction, DamageTaken, ShipTypeID }

class Kill { Attackers[Attacker], Items[Item], Position, Victim, ZKB, KillID, KillTime, MoonID, SolarSystemID }
```

and access to object **API**, which returns API URLs:

```javascript
  const API
  {
  	Alliance(id) =>
    {
    	Kills(year, month) => page => {
        	URL, Model: Kill
        },
        // NOT IMPLEMENTED YET
        Losses(year, month) => page => {
        	URL, Model: Loss
        }
    },
    Character(id) =>
    {
    	Kills(year, month) => page => {
        	URL, Model: Kill
        },
        // NOT IMPLEMENTED YET
        Losses(year, month) => page => {
        	URL, Model: Loss
        }
    },
    Corporation(id) =>
    {
    	Kills(year, month) => page => {
        	URL, Model: Kill
        },
        // NOT IMPLEMENTED YET
        Losses(year, month) => page => {
        	URL, Model: Loss
        }
    }
  };
```

and finally function **Pull**:

```javascript
function Pull(path, options)
	return Promise
```

with default options:

```javascript
const options = {
  apiUrl: 'https://zkillboard.com/api/',
  debug: false,
  maxEntriesPerPage: 200,
  startPage: 1,
  userAgent: `corpstats v${pkg.version} (bosektom@gmail.com) public`,
};
```

---

example:

```javascript
import { API, Pull } from 'corpstats';

Pull(API.Alliance(99005770).Kills(2016, 2)).then(kills => {
  console.log(`Wingspan deliveries in february 2016: ${kills.length}`);
});
```
```
> Wingspan deliveries in february 2016: 1419
```

[See this example on Tonic](https://tonicdev.com/bosek/corpstats-basic-usage)

### Todo

Parsing for Losses endpoint.

### Licence
The MIT License (MIT)

Copyright (c) 2016 Tomas Bosek bosektom@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
