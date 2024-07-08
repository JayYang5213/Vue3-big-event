/** 独立维护pinia */
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

/** 统一导出仓库 */
export * from './modules/user'
