import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { HttpsProxyAgent } from 'https-proxy-agent'

let proxyURL = ''
const proxyMap = new Map<string, HttpsProxyAgent<string>>()

export async function zfetch<T = any>(url: string, config: AxiosRequestConfig = {}) {
  let httpsAgent: HttpsProxyAgent<string>

  if (proxyURL) {
    if (proxyMap.has(proxyURL)) {
      httpsAgent = proxyMap.get(proxyURL)
    }
    else {
      httpsAgent = new HttpsProxyAgent(proxyURL)
      proxyMap.set(proxyURL, httpsAgent)
    }
  }

  const { data } = await axios.request<T>({
    ...config,
    url,
    httpsAgent,
  })
  return data
}

export function setProxy(proxy: string) {
  proxyURL = proxy
}
