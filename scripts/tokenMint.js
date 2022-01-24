//mint new token

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.api.moonbeam.network"
);


async function mint(uri) {
  const [accounts] = await ethers.getSigners();
  const instance = await ethers.getContractFactory("johnNFT");
  const address = "0x7317efb32D4B51ddE3852Bf86aDC6ebA5227Df77";
  const contract = new ethers.Contract(address, instance.interface, provider);
  const Contract = contract.connect(accounts);

  let tx = await Contract.safeMint(
    "0xA07876136c3A3141Dc2C25071330D3B08225e043",
    uri
  );

  console.log(tx);

  
}

async function dogwater(){

await mint("ipfs://QmfM8gbt85HsJ4CunKHgYVACGpr7K2tFoaHHXneG5oW4tN")
await mint("ipfs://QmZZwPwG8peerenEAuFmJG23RWR93MQnm7Ey5uHgCGuPmH")
await mint("ipfs://Qmdpg9GeXQpgUMZjPAPfwviK1knYiGQ6GPVWZrQAsE4dhn")
await mint("ipfs://QmemtYFL2JCTcBEPvSw2y6XdMw9bfoiqQgCfUftRpYUZnw")
await mint("ipfs://QmTsziReEAS7BQmzQwCfo8Gwhfkvo6Zm4d2M7e8UCMai2A")
await mint("ipfs://Qme6QfjF6cuujQyCJYkn9cZcnTCJHXXVJWheZJk3rmAobn")
await mint("ipfs://QmWc5Fn7tWmbxD55cGwyTGdTkswFLs8wuNpYba5hXfB8EB")
await mint("ipfs://QmX7J3adKjc1oVP5WwiawC3SdPgw1dVsfHHDBbHJAdD7GR")
await mint("ipfs://QmP6EKUJn2NswsTvYAqN5rLU48nCmEH6fJ8isRPLDqwB2w")
await mint("ipfs://QmRZePstqLDuSvqKDGdzQ2cdVz51CR41un6t5jVJiWio48")
await mint("ipfs://QmY3ti5BPfqLWWh1jtUKVhd4wuCURktEYiDtjGoFtGsvFu")
await mint("ipfs://QmRdi8zbJsArfCQUdyp385mCjyn3nUaAZpMn93NmeepRmi")
await mint("ipfs://QmWhkSHxyXpkDJQ8FbyJycCUBzwm4n9a8Ytj2nKQB67MD4")
await mint("ipfs://QmVwJ6iXDv6S6Mn6unTBxW2UBDPrJqLr8DREJa79WinaPE")
await mint("ipfs://Qmf5hpemT3nz6J4ADCM8rpDuSXFBJWbNjHfXHu5FbXALnQ")
await mint("ipfs://QmNfSWu1MDYBtP91HLrWcx9fCNMpwCy5gTEdTwBtXzoSv5")
await mint("ipfs://QmSJWoGq1rMMMFvjhRBDdS4CjQgM4tYecqLeTCtMXHSahz")
await mint("ipfs://QmRPEaQAJokFSri3oiDp7XsJ6ER8AbQrBVkrpEr7gowfiA")
await mint("ipfs://QmcJ4RueiLaFpnVBrVw1G8nwHFXhgSTKa2H9AhMGCaA4YJ")
await mint("ipfs://QmV2QJqdzpLVbZVsou9mMpocMWo2NKaGpxiwitzm7y57M3")
await mint("ipfs://QmShP9JzS75EQzJ69Jq1k5Sq2zLmjZtHBaTY8GUGHdi6dw")
await mint("ipfs://QmPornV1DjEgKZyS9CoYaAVQxqLcUkkaTstvaGNEceiUEi")
await mint("ipfs://QmXzBTvcAU4pPTrMWfpVuxwZbG9J6mnaf6uJEW9X8fpNky")
await mint("ipfs://QmThJhtm1iYVecdLq8CfjXQ2i4hewufDuENNZMiVu2t3Kz")
await mint("ipfs://QmaYWPX6kthGKsAsy1HFeSaiK6oThanw8E4EiA8QsHJ9xz")
await mint("ipfs://QmU6hM96u75S1GquF3rdT5DWhFZNVrp9CJqEefm2ZexrHa")
await mint("ipfs://QmSixf3aebEKf2C4EYwAHpUmDXCogMw1ycggJ7FsibFTUG")
await mint("ipfs://QmScpFvSYP6PcagS4ctp58SyciY7dStZkpTkYijYeCPTo2")
await mint("ipfs://QmWL2qoBDMoHNkqJSWU4Xm2bdU9PQ7YrFq8Herxpo6LwgF")
await mint("ipfs://QmerJoyp2HVYVwGncW7AUURJhDGNVC8aPRwMPjWy3ANnfm")
await mint("ipfs://Qmcq52pfxXaWNm84UszuzturvZXjDnLpPrvMXMfB11TbNH")
await mint("ipfs://Qmdrk1Saizs6jmtwja3aS98YjksQb4KKTzjTUHp6pUCMHm")
await mint("ipfs://QmRDY3SuJVTNzUUSBChfvpwYWj5Fa3ihx1VfoTJTHa2mim")
await mint("ipfs://QmTeJjZjiy2v7P7CxU5Na6tWyfvTBPqEjXCWhQZva2Pj3E")
await mint("ipfs://Qma2kqzpTL6kX42U77WuoJ2S9Ze24Y2cZAhARpWmxdMHpu")
await mint("ipfs://QmSVT8eaTy12VziNowJne63MdzJKkB2yoznp6LMpwZTonV")
await mint("ipfs://QmdKjaMSDpmKWsndAydy4kqfHSqKXC1Ue426NDm6WYj4EZ")
await mint("ipfs://QmUQSdoRMqAP9KuiPg8oV3LvqE5hQrfCqRkS8WCCgAF2PT")
await mint("ipfs://QmeZdxCZkwzCLpqPtWjxALWYTc8kqoTmSfbkoBN8Ugb6ZB")
await mint("ipfs://QmTMNcscWSGmjzyCWPjw7qSZsLSJPCunZEyxYEaHRpm2Zb")
await mint("ipfs://QmVqXEbBApGSY5FHbZMEXkovr7Hd5PMUYVj1imKgznnuwX")
await mint("ipfs://QmXvMmo57HHaobQxZ3C376B4wUZhKd1XobF1VgBwf48eXA")
await mint("ipfs://QmenyMa2zT5Kgv8z87FWeqzV76oyBLMgvBFyZn2L4QsR8H")
await mint("ipfs://QmVoauwn9caeQcP6BNubYHcdzfJ1Q1zErPhSFbwezz6Snj")
await mint("ipfs://Qmc3puKEjxZmLYXLvnmnvzbCFfJvKM6UK7dEJxRJK8k5zf")
await mint("ipfs://Qmf227epCXwur6qWuBrauYxnRJTmGcQZmQBS4XrrGEq6iy")
await mint("ipfs://Qmc349rmaVddvKw7VScNgsuHyKPg8H8j1Je9QZP2B4gSTS")
await mint("ipfs://QmVSTBxsta8zpbx6WQcs5isKis46MESPq5W8ANhj6ETUT3")
await mint("ipfs://QmNgXu5mfH8uZezKBBL3ax34g3mbgJRriQVpRsLWTaehUA")
await mint("ipfs://QmR2YCcxtFc5CqU6ysxCAorMQaryaKPsjGKMQt6HZ3BCZV")
await mint("ipfs://QmbazeqA45Z68mMVtqMHNtvMoHi93s4GKyVcYYPNQMKJsX")
await mint("ipfs://QmSzidRAZ8XcmNwKKmHPGygTFknJweCdUyfZjotaT9AEHw")
await mint("ipfs://QmS4LTKi2a1oqGLLmmAdCcHpq7RLzpvv4iQojUcLFyatCk")
await mint("ipfs://QmVTB4wp3Sksf7zkibWPMrXzVSj8NJCKtB5wsw9mx2tR2L")
await mint("ipfs://QmdTxSXfwGtqWixnhdiC7mngcPU1mNCpt45MV8D6AJkRrT")
await mint("ipfs://QmY5CiLdz52ZVf5Fc3iDduiiricLnn66TYTtWcqtdyAgnt")
await mint("ipfs://QmQvnnWhWNmUnAmgs7G5V45pikLYKsmmJC6NNDBHQUxTjK")
await mint("ipfs://QmesRXCuDiuapNZwcLZTH1QDKBXKzX8QN8SqYBiXYV2AkF")
await mint("ipfs://QmZu8A7gAQ4B6APmdc1tYGfTXxy6kWpYmrsKTGWy7tm9M6")
await mint("ipfs://QmRXnt6wQxK3xbn51BSG5QJh4YCTxFBuW1Zayo5roHBrSP")
await mint("ipfs://QmUNEpJQiQ7hNRaoht9G7mwec7oK7HzPhQHKCzBEDMQ7Hn")
await mint("ipfs://QmWiBHgJ8jS4K4nnvvV4e7FF8cEmr1KbXg3H1ZHC8Huypa")
await mint("ipfs://QmbHFU7FoPpbRM9vYWyxo4PjnrYRRio8YFvzFzE2ShcQY7")
await mint("ipfs://QmPEV1UjU98Z9BvwTKQQX7vdmkXoiTfJM25FW2gujLJPSS")
await mint("ipfs://Qmaszbmf4Eq3XzQyZ5DW8y7vCCfcbQYohJh22NL91HhmzL")
await mint("ipfs://QmXAuKnExLVCjh8fsZVSyMUUj5WUhnvhX6qTfx5RqXmMHh")
await mint("ipfs://QmScNqjfAWFUyPJNxev6bYiFztgyTnpedLVp6q7QfEbJBU")
await mint("ipfs://QmQHJaLKmtHQxGbbphYebUQa5Sgpb77KboSV2UjuJKzWY7")
await mint("ipfs://QmNMmzp3Ws8ZeDw7sJ9YLNNfLarcEVnuL7nTDRYXGw9U7w")
await mint("ipfs://QmVRgMgnHwmB9C4o7BxzDnykqtUbFsRXDhQwa8MEftjSGx")
await mint("ipfs://QmNy1Zmqq2AYUHgqEDvej27hS3xP1LHrtUFk27iajXvqyV")
await mint("ipfs://QmY5ZRzy59uCPZFrGj5d7ycSRzwmisSUjKPJftV3kh7e3t")
await mint("ipfs://Qmaek8Da1onuMmNHAgsUCKYx1jzeA8pFsDwfHGMYuGfcsK")
await mint("ipfs://QmVkK8yofpLK7j7yDpbbTibCGEM5SWeiBCG5yYjxAApTdR")
await mint("ipfs://QmTvVD9E2of4XCdwDHzXmgsqpJNAwYuqgC4oPRnPmfarhM")
await mint("ipfs://QmW6pAKzH24DZ45PSLqYvifAuQyvg6YXp6NKBYKnD4GRXB")
await mint("ipfs://QmUS94p7SpsEPBXoPMqU6U1YrMus3yN29gGzRJ8ozrXn4n")
await mint("ipfs://QmdLKbrfBYeguDbzjpEgLDBbcU7Jeod3J9B7oauWsno1WA")
await mint("ipfs://QmS3trF912c5jXUzyCVPDUHjKaHj3Dpxk9r8ZJZLKfByqh")
await mint("ipfs://QmfHnwB8qmpntwEAQnTdoaZXQ44rkMyvkw1aWxA1LVMeHJ")
await mint("ipfs://QmPxEWVhkHMKp23Bt2a71b81CTtLmZDVKakGWzFcpRgz79")
await mint("ipfs://QmWeuAr3fXJRMkBBmoPBMsZf7fZQEG6oWL6etVS9bFeHyt")
await mint("ipfs://QmQWVeS3ATj2546knxfCUwCrE5teARsrAvkoXPyH4NMmBf")
await mint("ipfs://QmTZzXeMTtyaWMDzMdLR3BmW369owwiLoPRKFFbQ2eEzfU")
await mint("ipfs://QmQjtAwRHqtCziXxp27JMbXzJdSjDbjk9BRxkk3VVAqnXv")
await mint("ipfs://QmcRrwgsUmWnAbQ8qWz8Fg8J4Ttph1saisdmzZLBaHRZuw")
await mint("ipfs://QmZZy27jqYFAT4tQiYnsCKRuYmJdEZAV6r3PgBrmX9iwEn")
await mint("ipfs://QmVpZ8SfHLf93UUUByUKJmSTCNTZm6HptTBYSpykHCTtVo")
await mint("ipfs://Qmb9AbFpbi2j12VSjExGEVw6nuNPqhU4xKK5HrHJQtZsUc")
await mint("ipfs://QmS4NafRz4kqk8ty2qMP13Q2UG9FjxX2QeFjUT9jY5RhjE")
await mint("ipfs://QmehEENuexmNqTMAZT57N7PMfFTP1kpUnCtuomrJNjPch3")
await mint("ipfs://QmVndXGikWqZD6JEopxisiTVebartwKvzK9vMcQ35UMjaQ")
await mint("ipfs://QmZp1HFV5SSDfrcW9d3E7B1ZJXGk1zEEc88FvG3dzygrvd")
await mint("ipfs://QmTNRmkL1QVe6Mnyhw87mXqaQuRAjmDtD9tm654qKcmQpV")
await mint("ipfs://Qmc1UA8bfjQdtRP7CnnYNRfEGsuZzJQYpeAHDSM9CEDwBL")
await mint("ipfs://QmZ6T3R2SZnWVEvoLS3nWPQYFBj8nRktkqPGej2yn2RRi4")
await mint("ipfs://QmNdoJ8ArZEBQJbEWSsQptFrLHjyWK24DTnnmxv2RvNT8q")
await mint("ipfs://QmUWK7tkdgK4m2KdHGUAom1soreBbgW4SpnMXPtt59GXtE")
await mint("ipfs://QmWgEw6vfR1Sq9y9ssXYTyY8S58dP3yD2dfT57Le2kczZ2")
await mint("ipfs://QmYH1jrurFfuCZs1rc5QM9FsUU9q8nYemxzmpCpRKfhHD2")

}

dogwater()