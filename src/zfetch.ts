import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type { HttpsProxyAgent } from 'https-proxy-agent'
import createHttpsProxyAgent from 'https-proxy-agent'

let proxyURL = ''
const proxyMap = new Map<string, HttpsProxyAgent>()

export async function zfetch<T = any>(url: string, config: AxiosRequestConfig = {}) {
  let httpsAgent: HttpsProxyAgent | undefined

  if (proxyURL) {
    if (proxyMap.has(proxyURL)) {
      httpsAgent = proxyMap.get(proxyURL)
    }
    else {
      httpsAgent = createHttpsProxyAgent(proxyURL)
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
