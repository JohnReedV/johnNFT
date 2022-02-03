//mint new token
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.api.moonbeam.network"
);

var fs = require('fs');

async function mint(uri) {
  const [accounts] = await ethers.getSigners();
  const instance = await ethers.getContractFactory("johnNFT");
  const address = "0xB2Ef1c9bFC998f7D775f2b0380188d74F773173E";
  const contract = new ethers.Contract(address, instance.interface, provider);
  const Contract = contract.connect(accounts);

  let tx = await Contract.safeMint(
    "0xA07876136c3A3141Dc2C25071330D3B08225e043",
    uri
  );

  console.log(tx, uri);


}



async function mintObject() {

  for (i = 0; i < 100; i++) {
    await mint("ipfs://bafybeie4k7hsjyfe5vybcop3264wtae5rmshczzk6iaeyo3ucrehdl3zki/JohnNFT%20+%20" + i + ".json")
  }

}

mintObject()




let awesomeArr = ["ooga wooga", "Relax (imperative)", "You do not understand",
  "I am the arbiter of truth", "FED = bad", "If you don't drink coffee black you don't like coffee, you like sugar",
  "You're fine", "Racism is magnified by the CIA who just wants us divided", "Inflation is a worse theft than taxation",
  "they call me", "ayooo", "yup", "If the workers were drafed in the army, we would have full employment and nothing to eat", "I am never wrong"
  , "Get mad", "Actual retard", "Happy man wilin"]

var number = 1
async function append(image) {

  let saying = awesomeArr[Math.floor(Math.random() * awesomeArr.length)];

  let object = {
    name: "John Selfie " + number + "/100",
    image: image,
    tokenId: number,
    secretSentence: saying
  }

  let real = JSON.stringify(object)

  fs.writeFileSync('JohnNFT + ' + number + '.json', real)

  number++

}


async function dogwater() {

  await append("ipfs://QmfM8gbt85HsJ4CunKHgYVACGpr7K2tFoaHHXneG5oW4tN")
  await append("ipfs://QmZZwPwG8peerenEAuFmJG23RWR93MQnm7Ey5uHgCGuPmH")
  await append("ipfs://Qmdpg9GeXQpgUMZjPAPfwviK1knYiGQ6GPVWZrQAsE4dhn")
  await append("ipfs://QmemtYFL2JCTcBEPvSw2y6XdMw9bfoiqQgCfUftRpYUZnw")
  await append("ipfs://QmTsziReEAS7BQmzQwCfo8Gwhfkvo6Zm4d2M7e8UCMai2A")
  await append("ipfs://Qme6QfjF6cuujQyCJYkn9cZcnTCJHXXVJWheZJk3rmAobn")
  await append("ipfs://QmWc5Fn7tWmbxD55cGwyTGdTkswFLs8wuNpYba5hXfB8EB")
  await append("ipfs://QmX7J3adKjc1oVP5WwiawC3SdPgw1dVsfHHDBbHJAdD7GR")
  await append("ipfs://QmP6EKUJn2NswsTvYAqN5rLU48nCmEH6fJ8isRPLDqwB2w")
  await append("ipfs://QmRZePstqLDuSvqKDGdzQ2cdVz51CR41un6t5jVJiWio48")
  await append("ipfs://QmY3ti5BPfqLWWh1jtUKVhd4wuCURktEYiDtjGoFtGsvFu")
  await append("ipfs://QmRdi8zbJsArfCQUdyp385mCjyn3nUaAZpMn93NmeepRmi")
  await append("ipfs://QmWhkSHxyXpkDJQ8FbyJycCUBzwm4n9a8Ytj2nKQB67MD4")
  await append("ipfs://QmVwJ6iXDv6S6Mn6unTBxW2UBDPrJqLr8DREJa79WinaPE")
  await append("ipfs://Qmf5hpemT3nz6J4ADCM8rpDuSXFBJWbNjHfXHu5FbXALnQ")
  await append("ipfs://QmNfSWu1MDYBtP91HLrWcx9fCNMpwCy5gTEdTwBtXzoSv5")
  await append("ipfs://QmSJWoGq1rMMMFvjhRBDdS4CjQgM4tYecqLeTCtMXHSahz")
  await append("ipfs://QmRPEaQAJokFSri3oiDp7XsJ6ER8AbQrBVkrpEr7gowfiA")
  await append("ipfs://QmcJ4RueiLaFpnVBrVw1G8nwHFXhgSTKa2H9AhMGCaA4YJ")
  await append("ipfs://QmV2QJqdzpLVbZVsou9mMpocMWo2NKaGpxiwitzm7y57M3")
  await append("ipfs://QmShP9JzS75EQzJ69Jq1k5Sq2zLmjZtHBaTY8GUGHdi6dw")
  await append("ipfs://QmPornV1DjEgKZyS9CoYaAVQxqLcUkkaTstvaGNEceiUEi")
  await append("ipfs://QmXzBTvcAU4pPTrMWfpVuxwZbG9J6mnaf6uJEW9X8fpNky")
  await append("ipfs://QmThJhtm1iYVecdLq8CfjXQ2i4hewufDuENNZMiVu2t3Kz")
  await append("ipfs://QmaYWPX6kthGKsAsy1HFeSaiK6oThanw8E4EiA8QsHJ9xz")
  await append("ipfs://QmU6hM96u75S1GquF3rdT5DWhFZNVrp9CJqEefm2ZexrHa")
  await append("ipfs://QmSixf3aebEKf2C4EYwAHpUmDXCogMw1ycggJ7FsibFTUG")
  await append("ipfs://QmScpFvSYP6PcagS4ctp58SyciY7dStZkpTkYijYeCPTo2")
  await append("ipfs://QmWL2qoBDMoHNkqJSWU4Xm2bdU9PQ7YrFq8Herxpo6LwgF")
  await append("ipfs://QmerJoyp2HVYVwGncW7AUURJhDGNVC8aPRwMPjWy3ANnfm")
  await append("ipfs://Qmcq52pfxXaWNm84UszuzturvZXjDnLpPrvMXMfB11TbNH")
  await append("ipfs://Qmdrk1Saizs6jmtwja3aS98YjksQb4KKTzjTUHp6pUCMHm")
  await append("ipfs://QmRDY3SuJVTNzUUSBChfvpwYWj5Fa3ihx1VfoTJTHa2mim")
  await append("ipfs://QmTeJjZjiy2v7P7CxU5Na6tWyfvTBPqEjXCWhQZva2Pj3E")
  await append("ipfs://Qma2kqzpTL6kX42U77WuoJ2S9Ze24Y2cZAhARpWmxdMHpu")
  await append("ipfs://QmSVT8eaTy12VziNowJne63MdzJKkB2yoznp6LMpwZTonV")
  await append("ipfs://QmdKjaMSDpmKWsndAydy4kqfHSqKXC1Ue426NDm6WYj4EZ")
  await append("ipfs://QmUQSdoRMqAP9KuiPg8oV3LvqE5hQrfCqRkS8WCCgAF2PT")
  await append("ipfs://QmeZdxCZkwzCLpqPtWjxALWYTc8kqoTmSfbkoBN8Ugb6ZB")
  await append("ipfs://QmTMNcscWSGmjzyCWPjw7qSZsLSJPCunZEyxYEaHRpm2Zb")
  await append("ipfs://QmVqXEbBApGSY5FHbZMEXkovr7Hd5PMUYVj1imKgznnuwX")
  await append("ipfs://QmXvMmo57HHaobQxZ3C376B4wUZhKd1XobF1VgBwf48eXA")
  await append("ipfs://QmenyMa2zT5Kgv8z87FWeqzV76oyBLMgvBFyZn2L4QsR8H")
  await append("ipfs://QmVoauwn9caeQcP6BNubYHcdzfJ1Q1zErPhSFbwezz6Snj")
  await append("ipfs://QmPoz5sjrDuD1aHKkSU3Wk2zHhYsQBrmzpbgtxiFJiNVNx")
  await append("ipfs://Qmf227epCXwur6qWuBrauYxnRJTmGcQZmQBS4XrrGEq6iy")
  await append("ipfs://QmfAh8iFq5PSe5agee8ZyWqsb78FE22wY3bQgSvk8TewMf")
  await append("ipfs://QmVSTBxsta8zpbx6WQcs5isKis46MESPq5W8ANhj6ETUT3")
  await append("ipfs://QmNgXu5mfH8uZezKBBL3ax34g3mbgJRriQVpRsLWTaehUA")
  await append("ipfs://QmR2YCcxtFc5CqU6ysxCAorMQaryaKPsjGKMQt6HZ3BCZV")
  await append("ipfs://QmbazeqA45Z68mMVtqMHNtvMoHi93s4GKyVcYYPNQMKJsX")
  await append("ipfs://QmSzidRAZ8XcmNwKKmHPGygTFknJweCdUyfZjotaT9AEHw")
  await append("ipfs://QmS4LTKi2a1oqGLLmmAdCcHpq7RLzpvv4iQojUcLFyatCk")
  await append("ipfs://QmVTB4wp3Sksf7zkibWPMrXzVSj8NJCKtB5wsw9mx2tR2L")
  await append("ipfs://QmdTxSXfwGtqWixnhdiC7mngcPU1mNCpt45MV8D6AJkRrT")
  await append("ipfs://QmY5CiLdz52ZVf5Fc3iDduiiricLnn66TYTtWcqtdyAgnt")
  await append("ipfs://QmQvnnWhWNmUnAmgs7G5V45pikLYKsmmJC6NNDBHQUxTjK")
  await append("ipfs://QmesRXCuDiuapNZwcLZTH1QDKBXKzX8QN8SqYBiXYV2AkF")
  await append("ipfs://QmZu8A7gAQ4B6APmdc1tYGfTXxy6kWpYmrsKTGWy7tm9M6")
  await append("ipfs://QmRXnt6wQxK3xbn51BSG5QJh4YCTxFBuW1Zayo5roHBrSP")
  await append("ipfs://QmUNEpJQiQ7hNRaoht9G7mwec7oK7HzPhQHKCzBEDMQ7Hn")
  await append("ipfs://QmWiBHgJ8jS4K4nnvvV4e7FF8cEmr1KbXg3H1ZHC8Huypa")
  await append("ipfs://QmbHFU7FoPpbRM9vYWyxo4PjnrYRRio8YFvzFzE2ShcQY7")
  await append("ipfs://QmPEV1UjU98Z9BvwTKQQX7vdmkXoiTfJM25FW2gujLJPSS")
  await append("ipfs://Qmaszbmf4Eq3XzQyZ5DW8y7vCCfcbQYohJh22NL91HhmzL")
  await append("ipfs://QmXAuKnExLVCjh8fsZVSyMUUj5WUhnvhX6qTfx5RqXmMHh")
  await append("ipfs://QmScNqjfAWFUyPJNxev6bYiFztgyTnpedLVp6q7QfEbJBU")
  await append("ipfs://QmQHJaLKmtHQxGbbphYebUQa5Sgpb77KboSV2UjuJKzWY7")
  await append("ipfs://QmNMmzp3Ws8ZeDw7sJ9YLNNfLarcEVnuL7nTDRYXGw9U7w")
  await append("ipfs://QmVRgMgnHwmB9C4o7BxzDnykqtUbFsRXDhQwa8MEftjSGx")
  await append("ipfs://QmNy1Zmqq2AYUHgqEDvej27hS3xP1LHrtUFk27iajXvqyV")
  await append("ipfs://QmY5ZRzy59uCPZFrGj5d7ycSRzwmisSUjKPJftV3kh7e3t")
  await append("ipfs://Qmaek8Da1onuMmNHAgsUCKYx1jzeA8pFsDwfHGMYuGfcsK")
  await append("ipfs://QmVkK8yofpLK7j7yDpbbTibCGEM5SWeiBCG5yYjxAApTdR")
  await append("ipfs://QmTvVD9E2of4XCdwDHzXmgsqpJNAwYuqgC4oPRnPmfarhM")
  await append("ipfs://QmW6pAKzH24DZ45PSLqYvifAuQyvg6YXp6NKBYKnD4GRXB")
  await append("ipfs://QmUS94p7SpsEPBXoPMqU6U1YrMus3yN29gGzRJ8ozrXn4n")
  await append("ipfs://QmdLKbrfBYeguDbzjpEgLDBbcU7Jeod3J9B7oauWsno1WA")
  await append("ipfs://QmS3trF912c5jXUzyCVPDUHjKaHj3Dpxk9r8ZJZLKfByqh")
  await append("ipfs://QmfHnwB8qmpntwEAQnTdoaZXQ44rkMyvkw1aWxA1LVMeHJ")
  await append("ipfs://QmPxEWVhkHMKp23Bt2a71b81CTtLmZDVKakGWzFcpRgz79")
  await append("ipfs://QmWeuAr3fXJRMkBBmoPBMsZf7fZQEG6oWL6etVS9bFeHyt")
  await append("ipfs://QmQWVeS3ATj2546knxfCUwCrE5teARsrAvkoXPyH4NMmBf")
  await append("ipfs://QmTZzXeMTtyaWMDzMdLR3BmW369owwiLoPRKFFbQ2eEzfU")
  await append("ipfs://QmQjtAwRHqtCziXxp27JMbXzJdSjDbjk9BRxkk3VVAqnXv")
  await append("ipfs://QmcRrwgsUmWnAbQ8qWz8Fg8J4Ttph1saisdmzZLBaHRZuw")
  await append("ipfs://QmZZy27jqYFAT4tQiYnsCKRuYmJdEZAV6r3PgBrmX9iwEn")
  await append("ipfs://QmVpZ8SfHLf93UUUByUKJmSTCNTZm6HptTBYSpykHCTtVo")
  await append("ipfs://Qmb9AbFpbi2j12VSjExGEVw6nuNPqhU4xKK5HrHJQtZsUc")
  await append("ipfs://QmS4NafRz4kqk8ty2qMP13Q2UG9FjxX2QeFjUT9jY5RhjE")
  await append("ipfs://QmehEENuexmNqTMAZT57N7PMfFTP1kpUnCtuomrJNjPch3")
  await append("ipfs://QmVndXGikWqZD6JEopxisiTVebartwKvzK9vMcQ35UMjaQ")
  await append("ipfs://QmZp1HFV5SSDfrcW9d3E7B1ZJXGk1zEEc88FvG3dzygrvd")
  await append("ipfs://QmTNRmkL1QVe6Mnyhw87mXqaQuRAjmDtD9tm654qKcmQpV")
  await append("ipfs://Qmc1UA8bfjQdtRP7CnnYNRfEGsuZzJQYpeAHDSM9CEDwBL")
  await append("ipfs://QmZ6T3R2SZnWVEvoLS3nWPQYFBj8nRktkqPGej2yn2RRi4")
  await append("ipfs://QmNdoJ8ArZEBQJbEWSsQptFrLHjyWK24DTnnmxv2RvNT8q")
  await append("ipfs://QmUWK7tkdgK4m2KdHGUAom1soreBbgW4SpnMXPtt59GXtE")
  await append("ipfs://QmWgEw6vfR1Sq9y9ssXYTyY8S58dP3yD2dfT57Le2kczZ2")
  await append("ipfs://QmYH1jrurFfuCZs1rc5QM9FsUU9q8nYemxzmpCpRKfhHD2")

}

//dogwater()