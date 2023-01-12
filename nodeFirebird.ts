import Firebird from 'node-firebird'

export const nodeFirebird = async(query: string) => {
  const connectionString = {
    host: '192.168.0.8',
    port: 3050,
    database: 'C:\\app\\CardSlide\\CARDSLIDE.FDB',
    user: 'SYSDBA',
    password: 'masterkey'
  }
  
  return new Promise((resolve, reject) => {
    Firebird.attach(connectionString,(err, db) => {
      if(err)
        reject(err)

      db.query(query, [],(err, result) => err? reject(err) : resolve(result))
      db.detach()
    })
  })
}