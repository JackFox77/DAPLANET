import mongoose from 'mongoose';
import { AccountSchema } from '../models/Account';
import { GalaxySchema } from '../models/Galaxy';
import { MoonSchema } from '../models/Moon';
import { PlanetSchema } from '../models/Planet';
import { StarSchema } from '../models/Star';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Planet = mongoose.model("Planet", PlanetSchema);
  Moon = mongoose.model("Moon", MoonSchema);
  Star = mongoose.model("Star", StarSchema);
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
}

export const dbContext = new DbContext()
