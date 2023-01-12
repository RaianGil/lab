import { readFile as run } from 'fs'
import { nodeFirebird } from './nodeFirebird'


const Pru = async() => {
  console.log(await nodeFirebird("SELECT FIRST(1) * FROM VW_CONFIG"))
}
Pru()