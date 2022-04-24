import got from 'got'
import fs from 'fs'

// search name in sci
const sciurl = 'https://www.sciencedirect.com/search?qs='
const name = 'Nitrogen addition reduces dissolved organic carbon leaching in a montane forest'
// const sciSearch = got(`${sciUrl}${encodeURIComponent(name)}`)
// const uri = 'https://www.sciencedirect.com/search?qs=Nitrogen%20addition%20reduces%20dissolved%20organic%20carbon%20leaching%20in%20a%20montane%20forest'
const uri = 'https://www.baidu.com'
const options = {
  headers: {
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'no-cache',
    pragma: 'no-cache',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Microsoft Edge";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    cookie:
      'search_ab=%7B%224%22%3A65%7D; sd_search=eyJhdXRoSGlzdG9yeSI6eyJwcmV2aW91c0N1c3RvbWVyIjpmYWxzZSwicHJldmlvdXNMb2dJbiI6ZmFsc2V9fQ%3D%3D.QuriVmdE0iYbFirfLWTT7%2BLc9cjMl%2FZu6OhMURqaOfk; EUID=5407d36d-9733-4a1e-9445-08a64ea051e5; sd_session_id=8e2a28d5338dd04e2d-b7a6-bfe14e96dce7gxrqb; acw=8e2a28d5338dd04e2d-b7a6-bfe14e96dce7gxrqb%7C%24%7C979C3A4CA029959262555923BA2B5C0D3ADEE9CBB7A4DE823DFDDB2ABAB0443FFA68F1599D5C259F7F11D42C2257B50633697E18C18F94120E9169905BBD791CB0469A67597464825D387A21AFA2E514; has_multiple_organizations=false; id_ab=AEG; mboxes=%7B%7D; utt=5d24-3159b8b50810255de17-0149676e5af42bb6-Y; fingerPrintToken=d469bccc35a623f890824d91e1b186f5; AMCVS_4D6368F454EC41940A4C98A6%40AdobeOrg=1; SD_ART_LINK_STATE=%3Ce%3E%3Cq%3Escience%3C%2Fq%3E%3Corg%3Erslt_list%3C%2Forg%3E%3Cz%3Erslt_list_item%3C%2Fz%3E%3CsrcFr%3Erslt_list_item%3C%2FsrcFr%3E%3Crdt%3E2022%2F04%2F24%2F13%3A12%3A53%3A752%3C%2Frdt%3E%3Cenc%3EN%3C%2Fenc%3E%3C%2Fe%3E; __cf_bm=Kbs8HMzuCFozxe.a83OMe1hnfn.uO38Cfz8kTQjP6p8-1650808724-0-AaCjJj1jlSZp0bzHv3tfWP6FWZTlNmzk+cEAcxjwW4DnJC403Gne4ztiNHk3pq9CUgE46ys52fl4FeUJkJ/Na1PrpiCgdSSI7Y41EiMbL1tH; mbox=session%236768ff7e348f4d23bab7aae3a0076d52%231650810586%7CPC%230e2ef4c380d9423ab38c0b0a05f09860.37_0%231714053526; MIAMISESSION=515592da-3c0f-41b4-a60a-26de9f25ef4c:3828261576; s_pers=%20c19%3Dsd%253Asearch%253Aresults%253Aguest%7C1650810577235%3B%20v68%3D1650808777180%7C1650810577243%3B%20v8%3D1650810053089%7C1745418053089%3B%20v8_s%3DLess%2520than%25201%2520day%7C1650811853089%3B; AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg=-2121179033%7CMCIDTS%7C19107%7CMCMID%7C91207254235727616529077841486134584385%7CMCAID%7CNONE%7CMCOPTOUT-1650817253s%7CNONE%7CvVersion%7C5.3.0; s_sess=%20s_cpc%3D0%3B%20e78%3Dqs%253DNitrogen%2520addition%2520reduces%2520dissolved%2520organic%2520carbon%2520leaching%2520in%2520a%2520montane%2520forest%3B%20s_sq%3D%3B%20s_ppvl%3Dsd%25253Ahome%25253Ahpx%252C19%252C19%252C895%252C1209%252C895%252C1512%252C982%252C2%252CP%3B%20e41%3D1%3B%20s_cc%3Dtrue%3B%20s_ppv%3Dsd%25253Asearch%25253Aresults%25253Aguest%252C100%252C100%252C895%252C713%252C895%252C1512%252C982%252C2%252CL%3B',
    Referer: 'https://www.sciencedirect.com/',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
}
got(sciurl + name, options)
  .then(res => {
    console.log('res', res.body)
  })
  .catch(res => console.log('error', res))

// 下载文件到本地
// got.stream(url).pipe(fs.createWriteStream('./flower.png'))
