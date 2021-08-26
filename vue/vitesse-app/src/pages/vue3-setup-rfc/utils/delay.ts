export default function () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolve')
    }, 1000)
  })
}
